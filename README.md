# C106 Enimal

### 📢 2022.08.29 ~ 2022.10.07 (7주)

### :arrow_right: [노션](https://selective-spectrum-c0a.notion.site/Enimal-09dba286b744472f8854dcf122d9e313)

### 📃[프로젝트 산출물](/exec)
# 🍯 팀원 소개

|Back-End|Back-End|Front-End|Front-End|NFT|NFT|
|-----|---|---|---|---|---|
|최 강(팀장)|김유완(팀원)|오행송(팀원)|이동명(팀원)|나원경(팀원)|김규민(팀원)|
<br/>

# 🐣 기획배경

✔ 환경 문제, 서식지 부족 등으로 멸종위기 종이 빠르게 늘어나고 있습니다. 

✔ 집중적인 보전 활동을 한다면 멸종위기 종의 서식지 환경이 개선되고, 개체 수가 증가할 수 있지만 돈과 관심이 필요합니다. 

✔ 이런 생각을 토대로 저희는 멸종위기 종에 대한 관심을 유발하고, 기부를 독려할 수 있는 NFT 서비스 Enimal (Endangered + Animal)을 만들게 되었습니다.
<br/>
# 🎯 타겟

🙍‍♀️ 멸종위기 종들에 대한 관심이 있는 사람

🙍‍♂️ NFT에 흥미가 있는 사람

🙍‍ 사소한 기부라도 하고 싶은 사람

🙍‍♂️ 환경 보존을 위해 노력하는 사람
<br/>

# 🐇 기술스택

![기술_스택](/outputs/README.assets/기술_스택.jpg)

### 프론트
    - React.js : 18.2.0
    - Node.js : 14.12.0
    - Sass : 7.0.3
### 백
    - JAVA : 11.0.14
    - Spring Boot : 2.7.3
    - JPA : 2.7.2
    - MySQL : 8.0.30-0ubuntu0.20.04.2
    - JWT : 0.9.0
### NFT
    - Solidity : 0.8.4
    - Truffle : 5.4.24
    - Besu : 21.10.20
    - Dream-api : 1.0.8
### 인프라
    - Nginx : 1.18.0
    - AWS : Linux/5.4.0-1018-aws
    - Jenkins : 2.361.1
    - Docker : 1.2.10
### 협업툴
    - Notion / Gitlab / Figma / Jira


## 🐑 프로젝트 핵심 기능

---

### 뽑기

- 전체 뽑기 : 멸종위기 24종을 임의로 선정하여 각 등급에 따라 차등으로 확률 뽑기
- 개별 뽑기 : 특정 종을 선택하여 등급에 따라 가격 산정
- 업적 보유시 : 미보유 뽑기 확률 상승

### 환전

- 사이트 내 재화로 환전 : SSF를 SAVE로 환전
- SSF 잔량 확인
- 트랜잭션 전송

### NFT 발급 ( Dream api 사용 )

- AI 이미지 생성 : 요청 시마다 새로운 AI 이미지를 생성
- ipfs로 파일 분산화 : DB 사용을 줄임
- 민팅 : 이미지를 NFT화하면서 소유 증명 가능 (ERC721 준수)

```vbnet
AI 이미지 생성 => url을 통해 이미지 다운로드 => 이미지와 메타데이터 ipfs에 전송
=> ipfs url로 get 요청을 보내 이미지 url 받아옴 => 스마트 컨트랙트에 민팅 요청
=> 백에 데이터 저장
```

# 🐑 프로젝트 화면
![사용설명서](/outputs/README.assets/사용설명서.png)

### ** 메인페이지-배너 **
![배너](/outputs/README.assets/메인페이지.png)

서비스에 대한 간단한 소개 페이지를 갈 수 있는 배너

### ** 메인페이지-오늘의동물 **
![오늘의동물](/outputs/README.assets/오늘의_동물.png)

매일 랜덤으로 24종의 멸종위기 동물에 관한 내용을 보여주고, 영상 시청할 수 있도록 유도

### ** 상단바-환전 **
![환전](/outputs/README.assets/재화_전환.png)

싸피네트워크를 통해 SSF 코인 재화를 서비스 내 재화로 변환, 기부 할 비율을 선택 후 충전

### ** 전체 뽑기 **

![전체뽑기](/outputs/README.assets/전체뽑기.JPG)

사용자가 보유중인 업적과 멸종위기 등급을 통해 확률 산정 후 뽑기
업적 보유시 미보유 조각의 뽑기 확률을 증가

### ** 개별 뽑기 **

![선택뽑기](/outputs/README.assets/선택뽑기.JPG)

사용자가 보유중인 업적과 멸종위기 등급을 통해 가격 산정 후 뽑기

### ** 뽑기 화면 **

![뽑기 화면](/outputs/README.assets/뽑기.png)

### **마이페이지**

![기본정보](/outputs/README.assets/마이페이지.png)

현재 나의 랭킹, 업적별 획득 현황 등 사용자 기본정보

### **자유게시판**

![자유게시판](/outputs/README.assets/자유게시판.JPG)

발급된 NFT들을 자랑하는 게시판

### NFT 발급 ( Dream api 사용 )

![이미지 설정](/outputs/README.assets/NFT_발급.png)
![이미지 발급](/outputs/README.assets/보유중.png)

조각을 다 모은 동물을 선택해 이름과 테마 설정,
Dream API에서 해당 테마에 맞는 랜덤한 이미지로 생성,
해당 사용자의 계정에 mint시켜 NFT 발급

# 🎬 UCC
![유우씨씨주소넣을거예요](https://www.notion.so/UCC-2db4ce58fdde400db57857baebba2bb4)



