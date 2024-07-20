import { styled } from "styled-components";

//고정
export const Container = styled.div`
  width: 390px;
  height: 1096px;
  margin: 0 auto;
  background: linear-gradient(
      0deg,
      rgba(217, 217, 217, 0.21) 0%,
      rgba(217, 217, 217, 0.21) 100%
    ),
    linear-gradient(
      180deg,
      #e8d6ff 0%,
      #dcd3e8 17%,
      #d9d2e2 21.25%,
      #e8e8e8 67%,
      #fff 100%
    );
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  background-color: transparent;
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

// 분석 상세 텍스트
export const IntroText = styled.div`
  color: #3d3a3a;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  margin-left: 115px;
  margin-top: -23px;
`;

// 전시 작품 제목 및 관람 날짜
export const Introduce = styled.div`
  width: 306px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 0.5px solid #9c9c9c;
  background: rgba(255, 255, 255, 0.5);
  filter: blur(3px);
  position: absolute;
  margin-top: 29px;
  margin-left: -7px;
`;

export const Content = styled.div`
  #Title {
    width: 280.232px;
    color: #3d3a3a;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 160.5%; /* 20.865px */
    margin-left: 12.88px;
    margin-top: 33px;
    z-index: 999;
    position: relative;
  }

  #Date {
    width: 86.968px;
    color: #3d3a3a;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 160.5%; /* 16.05px */
    margin-left: 110px;
    z-index: 999;
    position: relative;
  }
`;

// 소비자 감상평
export const Consumer = styled.div`
  width: 343px;
  height: 228px;
  flex-shrink: 0;
  border-radius: 20px;
  opacity: 0.7;
  background: linear-gradient(270deg, #eae3f2 40%, #f5f1f9 85%, #fff 100%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
  margin-top: 30px;
  margin-left: -24px;

  #profile {
    width: 27.2px;
    height: 29.616px;
    flex-shrink: 0;
    margin-left: 17px;
    margin-top: 15px;
    position: absolute;
  }

  #text {
    width: 268px;
    height: 258px;
    flex-shrink: 0;
    color: #3d3a3a;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 200% */
    position: absolute;
    margin-left: 70px;
    margin-top: 15px;
  }
`;

// 감정 분석 결과 텍스트
export const Result = styled.div`
  color: #3d3a3a;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  margin-top: 33px;
  margin-left: 46px;
`;

export const Purple = styled.div`
  #purple1 {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    fill: linear-gradient(180deg, #6f4f98 0%, #251a32 100%);
    position: absolute;
    margin-left: 30px;
  }

  #gray {
    width: 208.257px;
    height: 16.862px;
    flex-shrink: 0;
    border-radius: 9.919px;
    background: #d9d9d9;
    box-shadow: 0px 3.968px 3.968px 0px rgba(0, 0, 0, 0.25) inset;
    color: rgba(0, 0, 0, 0.5);
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 240% */
    text-align: right;
    padding-right: 5px;
    padding-bottom: 5px;
    margin-left: 70px;
    margin-top: 60px;
  }
`;

export const Purple2 = styled.div`
  #purple2 {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    fill: linear-gradient(180deg, #6f4f98 0%, #251a32 100%);
    position: absolute;
    margin-left: 30px;
  }

  #gray {
    width: 208.257px;
    height: 16.862px;
    flex-shrink: 0;
    border-radius: 9.919px;
    background: #d9d9d9;
    box-shadow: 0px 3.968px 3.968px 0px rgba(0, 0, 0, 0.25) inset;
    color: rgba(0, 0, 0, 0.5);
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 240% */
    text-align: right;
    padding-right: 5px;
    padding-bottom: 5px;
    margin-left: 70px;
    margin-top: 15px;
  }
`;

export const Purple3 = styled.div`
  #purple3 {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    fill: linear-gradient(180deg, #6f4f98 0%, #251a32 100%);
    position: absolute;
    margin-left: 30px;
  }

  #gray {
    width: 208.257px;
    height: 16.862px;
    flex-shrink: 0;
    border-radius: 9.919px;
    background: #d9d9d9;
    box-shadow: 0px 3.968px 3.968px 0px rgba(0, 0, 0, 0.25) inset;
    color: rgba(0, 0, 0, 0.5);
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 240% */
    text-align: right;
    padding-right: 5px;
    padding-bottom: 5px;
    margin-left: 70px;
    margin-top: 15px;
  }
`;

export const Purple4 = styled.div`
  #purple4 {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    fill: linear-gradient(180deg, #6f4f98 0%, #251a32 100%);
    position: absolute;
    margin-left: 30px;
  }

  #gray {
    width: 208.257px;
    height: 16.862px;
    flex-shrink: 0;
    border-radius: 9.919px;
    background: #d9d9d9;
    box-shadow: 0px 3.968px 3.968px 0px rgba(0, 0, 0, 0.25) inset;
    color: rgba(0, 0, 0, 0.5);
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 240% */
    text-align: right;
    padding-right: 5px;
    padding-bottom: 5px;
    margin-left: 70px;
    margin-top: 15px;
  }
`;

//AI 심리분석 해설
export const AItext = styled.div`
  width: 303px;
  color: #3d3a3a;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 200% */
  margin-top: 35px;
`;
