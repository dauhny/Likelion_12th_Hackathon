import { styled } from "styled-components";

//고정
export const Container = styled.div`
  width: 390px;
  height: 844px;
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
  margin-left: -1px;
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

// 챗지피티 이미지
export const AIImg = styled.div`
  width: 47.185px;
  height: 47.185px;
  flex-shrink: 0;
  margin-left: 53px;
  margin-top: 170px;
  margin-bottom: 120px;
`;

// 분석 버튼
export const Analysis = styled.button`
  width: 176px;
  height: 31px;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: #6f4f98;
  border: 2px solid #6f4f98;
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
    margin-top: -4px;
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
  background-color: #6f4f98;
  border: 2px solid #6f4f98;
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
    margin-left: 10px;
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
