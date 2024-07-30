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

// 지난 분석 텍스트
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

//보라색 백그라운드
export const PurpleBox = styled.div`
  width: 81px;
  height: 96px;
  flex-shrink: 0;
`;

//보라색 안 그레이 백그라운드 요소들
export const GrayBox = styled.div`
  width: 61px;
  height: 78px;
  flex-shrink: 0;

  #greencheck {
    width: 7px;
    height: 6px;
    flex-shrink: 0;
    margin-top: -86px;
    margin-left: 6px;
  }

  #text {
    width: 30px;
    height: 9.941px;
    flex-shrink: 0;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 8px;
    font-style: normal;
    font-weight: 600;
    line-height: 160.5%; /* 12.84px */
    margin-left: 15px;
    margin-top: 2px;
  }
`;

// 이미지 박스
export const ImgBox = styled.div`
  width: 61px;
  height: 61px;
  flex-shrink: 0;

  margin-top: 12px;
  margin-left: -20px;
  img {
    width: 62px;
    height: 62px;
    flex-shrink: 0;
    margin-left: 4px;
    margin-top: -9px;
    border-radius: 8px;
  }
`;

// 전시작품 설명
export const ExhibitionIntroduce = styled.div`
  width: 262px;
  height: 96px;
  flex-shrink: 0;
  border-radius: 0px 10px 10px 0px;
  background: linear-gradient(
    180deg,
    #281d36 37.67%,
    #392a4d 68.17%,
    #4e3968 100%
  );
  margin-left: 56px;
  margin-top: -96px;
  cursor: pointer;
  #Title {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 160.5%; /* 20.865px */
    position: absolute;
    margin-left: 10px;
    margin-top: 15px;
  }

  #Date {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 160.5%; /* 16.05px */
    position: absolute;
    margin-left: 10px;
    margin-top: 43px;
  }
`;

export const PinkBlur = styled.div`
  width: 223px;
  height: 234px;
  background: #c47dd7;
  filter: blur(140px);
  position: relative;
  z-index: -3;
  margin-top: 110px;
  margin-left: 35px;
`;
