import { styled } from "styled-components";

//고정
export const Container = styled.div`
  width: 390px;
  height: 1598px;
  margin: 0 auto;
  background: #121212;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

//고정
export const Item = styled.div`
  margin-left: 12%;
  position: relative;
  z-index: 0;
`;

//뒤로가기 버튼
export const BackBtn = styled.button`
  width: 11px;
  height: 19px;
  background-image: url("/images/BackBtn.svg");
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  outline: none;
  margin-left: 10px;
  margin-top: 10px;
`;

//하단바 시작

export const NavBar = styled.div`
  width: 390px;
  height: 74px;
  flex-shrink: 0;
  border-radius: 20px 20px 0px 0px;
  border: 1px solid gray;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  bottom: 0;
  z-index: 999;
  display: flex;
  margin-left: -48px;
`;

export const NavBtnContainer = styled.div`
  display: column;
`;

export const NavIcon = styled.button`
  width: 21px;
  height: 39px;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  background-color: transparent;
  border: none;
  margin-left: 30px;
  margin-top: 11px;
  cursor: pointer;
  margin-right: 15px;
`;

export const NavText = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.715px;
  margin-left: 33px;
  margin-top: -5px;
`;
// 하단바 끝

export const PageTitle = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  margin-top: -23px;
`;

// 검색창, 검색 이미지 감싸는 박스
export const searchBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 50px;
`;

// 검색창
export const search = styled.input`
  width: 259px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid #9747ff;
  background: #121212;
  margin-top: 20px;
  margin-left: -7px;
  color: #ccc;
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Pretendard Variable";
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 200% */
  padding-left: 10px;
`;

// 검색 이미지
export const searchImg = styled.div`
  img {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    margin-top: 25px;
    margin-left: 10px;
    cursor: pointer;
  }
`;

// 티켓
export const ticket = styled.div`
  position: relative;
  img {
    width: 343px;
    height: 115.367px;
    margin-top: 34px;
    margin-left: -23px;
  }
`;

// 프로필 박스
export const profileContainer = styled.div`
  position: relative;
  width: 100px;
  height: 114px;
  margin-top: -115px;
  cursor: pointer;

  img {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    margin-top: 20px;
    margin-left: 10px;
    border-radius: 30px;
  }

  #name {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 200% */
    text-align: center;
    margin-top: -5px;
    margin-left: -45%;
  }

  #time {
    color: #d9d9d9;
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 240% */
    margin-left: -5px;
    margin-top: -7px;
  }

  #line {
    position: absolute;
    width: 1px;
    height: 77px;
    background: #fff;
    margin-top: -77px;
    margin-left: 77px;
  }
`;

// 콘텐츠 박스
export const contentContainer = styled.div`
  position: relative;
  margin-bottom: 30px;
  margin-top: -103px;
  margin-left: 110px;
  cursor: pointer;
  #title {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 200% */
  }

  #content {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 17px; /* 240% */
    width: 150px;
    height: 50px;
    overflow: hidden;
  }

  img {
    width: 17px;
    height: 16px;
    flex-shrink: 0;
    position: absolute;
    margin-left: 163px;
    margin-top: -44px;
  }

  #count {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 200% */
    position: absolute;
    margin-left: 183px;
    margin-top: -47px;
  }
`;

export const PinkBlur = styled.div`
  width: 223px;
  height: 234px;
  background-color: #c47dd7;
  filter: blur(140px);
  position: relative;
  z-index: -3;
  margin-top: 410px;
  margin-left: -50px;
`;

export const PaginationContainer = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 55px;
    cursor: pointer;
    margin-left: -70px;
  }

  ul {
    list-style: none;
  }

  ul.pagination li {
    width: 30px;
    height: 30px;
    font-family: "Pretendard Variable";
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
  }

  ul.pagination li a {
    text-decoration: none;
    color: white;
  }

  ul.pagination li.active a {
    color: #a259ff;
    font-weight: 500;
  }

  ul.pagination li.active a:hover {
    color: white;
  }

  ul.pagination li a:hover {
    background-color: #a259ff;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    padding: 0px 5px;
  }
`;
