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

// 나의 기록 텍스트
export const IntroText = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  margin-left: 113px;
  margin-top: -23px;
`;

// 분석하고 싶은 기록을 선택하세요
export const Choice = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 160% */
  margin-top: 90px;
  margin-left: -14px;
`;

// 부연설명
export const Comment = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 240% */
  margin-left: -14px;
`;

// 포스터 첨부 박스
export const ImgBox = styled.div`
  width: 81px;
  height: 81px;
  flex-shrink: 0;
  border-radius: 10px 0px 0px 10px;
  background: #6f4f98;
  margin-top: 12px;
  margin-left: -20px;
  img {
    width: 61px;
    height: 61px;
    flex-shrink: 0;
    margin-left: 11px;
    margin-top: 10px;
  }
`;

// 전시 설명
export const ExhibitionIntroduce = styled.div`
  width: 262px;
  height: 81px;
  flex-shrink: 0;
  border-radius: 0px 10px 10px 0px;
  background: linear-gradient(
    180deg,
    #281d36 37.67%,
    #392a4d 68.17%,
    #4e3968 100%
  );
  margin-left: 61px;
  margin-top: -81px;

  #Title {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 160.5%; /* 20.865px */
    margin-left: 18px;
    margin-top: 20px;
    position: absolute;
  }
  #Date {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 160.5%; /* 16.05px */
    margin-left: 18px;
    margin-top: 41px;
    position: absolute;
  }
`;

// 체크박스
export const CheckBox = styled.div`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-left: 226px;
  margin-top: 31px;
  position: absolute;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

// 선택한 기록 분석 버튼
export const Analysis = styled.button`
  width: 158.851px;
  height: 31px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #a259ff;
  border: 2px solid #a259ff;
  cursor: pointer;
  margin-left: 67px;
  margin-top: 300px;
  #choice {
    width: 12px;
    height: 9.856px;
    flex-shrink: 0;
    margin-top: 7px;
    margin-left: 10px;
  }

  #text {
    width: 132.677px;
    height: 24.97px;
    flex-shrink: 0;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 160.5%; /* 22.47px */
    margin-left: 20px;
    margin-top: -15px;
  }
`;

export const PinkBlur = styled.div`
  width: 223px;
  height: 234px;
  background: #c47dd7;
  filter: blur(140px);
  position: relative;
  z-index: -3;
  margin-top: -100px;
  margin-left: 40px;
`;
