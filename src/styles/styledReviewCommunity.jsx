import { styled } from "styled-components";

//고정
export const Container = styled.div`
  width: 390px;
  height: 898px;
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

// 커뮤니티 텍스트
export const IntroText = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  margin-left: 116px;
  margin-top: -26px;
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
  font-size: 12px;
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
    margin-top: 27px;
    margin-left: 10px;
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
  }

  #name {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 200% */
    margin-left: 5px;
  }

  #time {
    color: #d9d9d9;
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 240% */
    margin-left: 9px;
    margin-top: -7px;
  }

  #line {
    position: absolute;
    width: 1px;
    height: 77px;
    background: #fff;
    margin-top: -82px;
    margin-left: 77px;
  }
`;

// 콘텐츠 박스
export const contentContainer = styled.div`
  position: relative;
  width: 200px;
  height: 114px;
  margin-top: -93px;
  margin-left: 110px;
  cursor: pointer;
  #title {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 200% */
  }

  #content {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 240% */
  }

  img {
    width: 17px;
    height: 16px;
    flex-shrink: 0;
    position: absolute;
    margin-left: 166px;
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
