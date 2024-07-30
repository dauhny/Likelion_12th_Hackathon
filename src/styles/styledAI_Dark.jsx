import { styled } from "styled-components";

//고정
export const Container = styled.div`
  width: 390px;
  height: 844px;
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

// AI 심리 분석 텍스트
export const IntroText = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  margin-left: 104px;
  margin-top: -26px;
`;

// 로고
export const AIImg = styled.div`
  flex-shrink: 0;
  margin-left: 80px;
  margin-top: 270px;
`;

// 분석 버튼
export const Analysis = styled.button`
  width: 176px;
  height: 31px;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: #a259ff;
  border: 2px solid #a259ff;
  cursor: pointer;
  margin-left: 63px;
  margin-top: 160px;
  #folder {
    flex-direction: row;
    width: 16.929px;
    height: 14.091px;
    flex-shrink: 0;
    stroke-width: 2px;
    stroke: #fff;
    margin-top: -5px;
    margin-left: 10px;
  }
  #text {
    flex-direction: row;
    width: 110px;
    height: 15px;
    flex-shrink: 0;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 160.5%; /* 22.47px */
    margin-left: 35px;
    margin-top: -15px;
  }
`;

// 다시 보기 버튼
export const Replay = styled.button`
  width: 176px;
  height: 31px;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: #a259ff;
  border: 2px solid #a259ff;
  cursor: pointer;
  margin-left: 63px;
  margin-top: 8px;
  #past {
    width: 16.929px;
    height: 14.091px;
    flex-shrink: 0;
    stroke-width: 2px;
    stroke: #fff;
    margin-top: -5px;
    margin-left: 5px;
  }
  #text2 {
    width: 130px;
    height: 15px;
    flex-shrink: 0;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 160.5%; /* 22.47px */
    margin-left: 30px;
    margin-top: -15px;
  }
`;

export const PinkBlur = styled.div`
  width: 206px;
  height: 205px;
  flex-shrink: 0;
  background: #a259ff;
  filter: blur(159.68670654296875px);
  margin-top: -360px;
  margin-left: 40px;
`;
