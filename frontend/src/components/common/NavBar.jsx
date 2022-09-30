import React, { useState,useEffect } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./NavBar.scss";

import nav from '@images/NAV.png'
import Login from "./Login/Login";

import { getMySave } from "../../apis/account";


const Web3 = require('web3');

function NavBar() {

  const [SSF, setSSF] = useState(null);
  const [save,setSave] =useState(0);

  const web3 = new Web3(new Web3.providers.HttpProvider("http://20.196.209.2:8545/"));
  const token = '0x0c54E456CE9E4501D2c43C38796ce3F06846C966';
  const wallet = localStorage.myAddress;
  const minABI = [
    {
      constant: true,
      inputs: [{ name: "_owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "balance", type: "uint256" }],
      type: "function",
    },
  ];
  const contract = new web3.eth.Contract(minABI, token);
  const getBalance = async () => {
    const res = await contract.methods.balanceOf(wallet).call();
    // const format = web3.utils.fromWei(res);
    const coin = parseInt(res, 10);
    const ssf = coin.toLocaleString('ko-KR');
    console.log(typeof res,ssf)
    setSSF(ssf)
  }
  getBalance();


  useEffect(()=>{
    getMySave().then(res=>{
      setSave(res.data)
    })
  },[])
  


  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  function Logout(e) {
    e.preventDefault();
    localStorage.removeItem('token')
    localStorage.removeItem('MyNick')
    localStorage.removeItem('myAddress')
    alert("로그아웃 되었습니다!")
    navigate('/')
  }

  const mySave = save.toLocaleString("ko-KR");
  return (
    <header className="fixed-top">
      <Navbar className="mainNav flex" expand="lg">
        <Navbar.Brand href="/" className="mainlogo notoBold fs-24">
          <img className="logoimg" src={nav} alt="#" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="basic-navbar-nav">
          <Nav>
            {localStorage.token ?
              <>
                <Nav.Link className="save notoMid fs-20">ssf : {SSF}</Nav.Link>
                <Nav.Link className="save notoMid fs-20">save : {mySave}</Nav.Link>
              </>
              :
              null
            }
            <Nav.Link href="/draw" className="drawBtn notoMid fs-20">
              Draw
            </Nav.Link>
            <NavDropdown
              title="Community"
              className="nav-dropdown1 notoMid fs-20"
            >
              <NavDropdown.Item
                href="/notice"
                className="nav-dropdowm1_notice notoMid fs-16"
              >
                공지사항
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/community"
                className="nav-dropdowm1_free notoMid fs-16"
              >
                자유게시판
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Account"
              className="nav-dropdown2 notoMid fs-20"
            >
              {localStorage.token ?

                <>
                  <NavDropdown.Item
                    href={`/mypage/${localStorage.MyNick}`}
                    className="nav-dropdowm2_mypage notoMid fs-16"
                  >
                    마이페이지
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={e => Logout(e)}
                    className="nav-dropdowm2_acc notoMid fs-16"
                  >
                    로그아웃
                  </NavDropdown.Item>
                </>
                :
                <NavDropdown.Item
                  onClick={openModal}
                  className="nav-dropdowm2_acc notoMid fs-16"
                >
                  지갑연결
                </NavDropdown.Item>
              }


            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Login open={modalOpen} close={closeModal} />
    </header>
  );
}

export default NavBar;
