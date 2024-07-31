import { styled } from "styled-components";

//고정
export const Container = styled.div`
  width: 390px;
  height: 2500px;
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

//페이지 제목
export const PageTitle = styled.div`
  color: #3d3a3a;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
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
  margin-top: -4px;
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
  width: 216px;
  height: 410px;
  flex-shrink: 0;
  border-radius: 20px;
  opacity: 0.8;
  background: linear-gradient(270deg, #eae3f2 40%, #f5f1f9 85%, #fff 100%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  margin-top: 32px;
  margin-left: 110px;
  #review {
    width: 165px;
    color: #3d3a3a;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 200% */
    position: absolute;
    margin-left: 26px;
    margin-top: 7px;
  }
`;

// AI 감정 분석 결과
export const AIAnalysis = styled.div`
  width: 315px;
  height: 880px;
  flex-shrink: 0;
  border-radius: 20px;
  opacity: 0.8;
  background: linear-gradient(
    180deg,
    #f5f1f9 15.26%,
    #efe7f9 27.64%,
    #e5d5fa 87%
  );
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.14);
  margin-top: 28px;
  margin-left: -25px;
  #text {
    width: 112px;
    height: 20px;
    flex-shrink: 0;
    color: #3d3a3a;
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 150% */
    position: absolute;
    margin-left: 50px;
    margin-top: 19px;
  }

  #purple1 {
    width: 12px;
    height: 12px;
    flex-shrink: 0;
    fill: linear-gradient(180deg, #6f4f98 0%, #251a32 100%);
    position: absolute;
    margin-left: 30px;
    margin-top: 28px;
  }

  #gray1 {
    width: 173px;
    height: 9px;
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
    margin-top: 30px;
  }

  #purple2 {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    fill: linear-gradient(180deg, #6f4f98 0%, #251a32 100%);
    position: absolute;
    margin-left: 30px;
    margin-top: 13px;
  }

  #gray2 {
    width: 173px;
    height: 9px;
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

  #purple3 {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    fill: linear-gradient(180deg, #6f4f98 0%, #251a32 100%);
    position: absolute;
    margin-left: 30px;
    margin-top: 13px;
  }

  #gray3 {
    width: 173px;
    height: 9px;
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

  #purple4 {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    fill: linear-gradient(180deg, #6f4f98 0%, #251a32 100%);
    position: absolute;
    margin-left: 30px;
    margin-top: 13px;
  }

  #gray4 {
    width: 173px;
    height: 9px;
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

  #AItext {
    width: 246px;
    height: 190px;
    flex-shrink: 0;
    color: #3d3a3a;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 200% */
    position: absolute;
    margin-left: 35px;
    margin-top: 30px;
  }
`;

// 지난 분석 다시 보기 버튼
export const Replay = styled.button`
  width: 176px;
  height: 31px;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: #6f4f98;
  border: 2px solid #6f4f98;
  cursor: pointer;
  margin-left: 56px;
  margin-top: 30px;
  #past {
    width: 16.929px;
    height: 14.091px;
    flex-shrink: 0;
    stroke-width: 2px;
    stroke: #fff;
    margin-top: -5px;
    margin-left: 13px;
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
    margin-left: 25px;
    margin-top: -15px;
  }
`;

export const Loading = styled.div`
  width: 390px;
  height: 1096px;
  background-image: url("/images/Loading.svg");
  position: relative;
  z-index: 999;
  margin-left: -46.7px;
  margin-top: -33px;
`;
