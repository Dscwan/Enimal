import React, { useState, useEffect } from "react";
import "./CommunityRegist.scss";

import { getCreateArticle } from "@apis/community";
import { useNavigate } from "react-router-dom";

import NFTtest from '@images/NFTtest.jpg'

import { getMyNFT } from "@apis/mypage";

function CommunityRegist() {
  const [Title, setTitle] = useState(null)
  const [Content, setContent] = useState(null)
  const [myNFT, setMyNFT] = useState([]);
  const [myNFTtrue,setMyNFTtrue] = useState([]);
  const [selectedNFT, setSelectedNFT] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMyNFT(localStorage.MyNick).then(res => {
      console.log(res)
      const MyNFTlist=[]
      for (let i=0; i<res.data.length; i+=1){
        if (res.data[i].info) {
          MyNFTlist.push(res.data[i])
        }
      }
      setMyNFT(res.data)
      setMyNFTtrue(MyNFTlist)
    })
  }, [])


  function createArticle(e) {
    e.preventDefault();
    const DATA = {
      title: Title,
      content: Content,
      picture: "asdf"
    }
    getCreateArticle(DATA).then(res => {
      console.log(res)
      navigate(`/community/detail/${res.data.idx}`, { state: { badge: res.data.modalName } })
    })
  }
  function chaengtitle(e) {
    setTitle(e.target.value)
  }
  function chaengcontent(e) {
    setContent(e.target.value)
  }


  function selectNFTimg(e){
    e.preventDefault();
    console.log(myNFT[e.target.id])
    setSelectedNFT(myNFT[e.target.id])
  }

  console.log(selectedNFT)
  
  return (
    <div className="container flex">
      <div className="regi">
        <div className="regi_pagetitle notoBold fs-36">
          자랑게시판
        </div>
        <div className="divide" />
        <div className="regi_content flex justify-center">
          {myNFTtrue.length > 0 ?
            <ul className="NFTList">
              {myNFTtrue.map(nft => {
                console.log(nft)
                return (
                  <div className="flex mx-5">
                      <button type="button" onClick={e=>selectNFTimg(e)} id={myNFT.indexOf(nft)} className="NFTcard">
                        <img className="NFTImg" src={NFTtest} alt="#" />
                        <h1 className="fs-32 notoBold my-3">{nft.nftName}</h1>
                        <div className="flex justify-center">
                          <h1 className="fs-18 roThin">Made by</h1>
                          <h1 className="fs-18 mx-2 roMid">{nft.nftIdByWallet}</h1>
                        </div>
                      </button>
                  </div>
                )
              })}
            </ul>
            :
            <ul className="flex justify-center">
              <h1 className="text-center my-5 fs-18 notoBold">발행된 NFT가 없습니다.</h1>
            </ul>

          }
        </div>
        <div className="regi_text">
          <input className="regi_text_title notoMid fs-24" onChange={e => chaengtitle(e)} style={{ width: '900px' }} placeholder="제목을 입력해주세요" />

          <div className="divide" />
          <textarea className="regi_text_write notoReg fs-20 regi_textarea" onChange={e => chaengcontent(e)} placeholder="내용을 입력해주세요." />

        </div>
        <div className="regi_button flex">
          <button type="button" className="notoBold fs-24" onClick={e => createArticle(e)}>
            등록하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default CommunityRegist;