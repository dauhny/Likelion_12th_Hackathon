import { styled } from "styled-components";

//고정
export const Container = styled.div`
  width: 390px;
  height: 881px;
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

// 기록하기 텍스트
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

// 공유하기 버튼
export const record = styled.button`
  width: 70px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #9747ff;
  cursor: pointer;
  border: 2px solid #9747ff;
  margin-top: 20px;
  margin-left: 255px;
  #text {
    width: 66.661px;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 240% */
    margin-left: -5px;
  }
`;

// 이미지 선택 버튼
export const imgButton = styled.button`
  width: 87px;
  height: 25px;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: #121212;
  border: 1px solid #dec5fb;
  cursor: pointer;
  margin-left: 43px;
  margin-top: 17px;
  #image {
    width: 13px;
    height: 9.053px;
    flex-shrink: 0;
    margin-top: 2px;
    margin-left: 4px;
  }
  #text {
    flex-direction: row;
    width: 47px;
    height: 16px;
    flex-shrink: 0;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: 160.5%; /* 16.05px */
    margin-left: 23px;
    margin-top: -11px;
  }
`;

// 이미지 추가 박스
export const img = styled.div`
  width: 199px;
  height: 199px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px dashed #eae3f2;
  margin-top: 14px;
  margin-left: 45px;
  background: linear-gradient(
    270deg,
    #dbbefc 0%,
    #eadbfc 36.5%,
    #faf8fc 78%,
    #fff 100%
  );

  #photo {
    width: 62px;
    height: 46.159px;
    flex-shrink: 0;
    fill: #9c9c9c;
    margin-top: 70px;
    margin-left: 68px;
  }

  #text {
    color: #9c9c9c;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 160.5%; /* 22.47px */
    text-align: center;
    margin-top: 5px;
  }
`;

// 날짜
export const date = styled.button`
  width: 201px;
  height: 25px;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: #121212;
  border: 1px solid #dec5fb;
  margin-left: 45px;
  margin-top: 17px;

  #text {
    width: 76px;
    height: 15px;
    flex-shrink: 0;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 160.5%; /* 19.26px */
    margin-top: -4px;
  }
`;

export const PinkBlur = styled.div`
  width: 223px;
  height: 251.393px;
  background-color: #c47dd7;
  filter: blur(140px);
  position: relative;
  z-index: -3;
  margin-top: -150px;
  margin-left: -120px;
`;

// 전시 제목
export const title = styled.div`
  width: 343px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #dbbefc;
  background: linear-gradient(270deg, #dbbefc 0%, #f6effe 75%, #fff 100%);
  margin-top: -83px;
  margin-left: -25px;
  #text {
    color: #9c9c9c;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 160.5%; /* 22.47px */
    margin-top: 9px;
    margin-left: 10px;
  }
`;

// 내용
export const content = styled.div`
  width: 343px;
  height: 235px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #dbbefc;
  background: linear-gradient(270deg, #dbbefc 0%, #f6effe 75%, #fff 100%);
  margin-top: 18px;
  margin-left: -25px;
  #text {
    color: #9c9c9c;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 160.5%; /* 22.47px */
    margin-top: 9px;
    margin-left: 10px;
  }
`;

export const PinkBlur2 = styled.div`
  width: 223px;
  height: 251.393px;
  background-color: #c47dd7;
  filter: blur(140px);
  position: relative;
  z-index: -3;
  margin-left: 100px;
  margin-top: 50px;
`;
