import { styled } from "styled-components";

//고정
export const Container = styled.div`
  width: 390px;
  height: 1156px;
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
  margin-left: 118px;
  margin-top: -26px;
`;

// 프로필
export const profile = styled.div`
  position: relative;
  img {
    width: 60px;
    height: 60px;
    flex-shrink: 0;
    margin-top: 50px;
    margin-left: 121px;
    border-radius: 30px;
  }

  #name {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 160.5%; /* 22.47px */
    margin-left: -12%;
    text-align: center;
  }

  #time {
    color: #d9d9d9;
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 240% */
    margin-left: -12%;
    text-align: center;
    margin-top: -4px;
  }
`;

// 날짜, 스크랩 묶은 박스
export const firstBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 385px;
  height: 30px;
  margin-top: 12px;
  margin-left: -17px;
`;

// 날짜
export const date = styled.div`
  display: flex;
  flex-direction: row;
  width: 96px;
  height: 23px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #ddc4fb;
  #text {
    flex-direction: row;
    height: 15px;
    flex-shrink: 0;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160.5%; /* 19.26px */
    margin-left: 15px;
    margin-top: 2px;
  }
`;

// 스크랩
export const like = styled.div`
  display: flex;
  flex-direction: row;
  img {
    width: 17px;
    height: 16px;
    flex-shrink: 0;
    position: absolute;
    margin-top: 7px;
    margin-left: 195px;
  }

  #count {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 200% */
    position: absolute;
    margin-top: 4px;
    margin-left: 215px;
  }
`;

export const PinkBlur = styled.div`
  width: 206px;
  height: 205px;
  background: #a259ff;
  filter: blur(159.68670654296875px);
  position: relative;
  z-index: -3;
  margin-top: -53px;
  margin-left: -35px;
`;

// 제목
export const title = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-top: 15px;
  text-align: center;
  margin-left: -12%;
`;

// 전시 이미지
export const img = styled.div`
  width: 236px;
  height: 214px;
  flex-shrink: 0;
  border-radius: 10px;
  margin-left: 32px;
  margin-top: 26px;
`;

// 내용
export const contentContainer = styled.div`
  width: 343px;
  height: 295px;
  flex-shrink: 0;
  border-radius: 10px;
  background: linear-gradient(90deg, #6f4f98 0%, #251a32 100%);
  margin-left: -25px;
  margin-top: 24px;
  #content {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160.5%; /* 22.47px */
    position: absolute;
    margin-left: 23px;
    margin-top: 19px;
    width: 300px;
  }
`;

export const PinkBlur2 = styled.div`
  width: 223px;
  height: 234px;
  background: #c47dd7;
  filter: blur(140px);
  position: relative;
  z-index: -3;
  margin-top: 100px;
  margin-left: 20px;
`;

export const ReviewContainer = styled.div``;
