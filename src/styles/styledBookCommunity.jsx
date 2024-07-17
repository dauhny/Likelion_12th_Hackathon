import { styled } from "styled-components";

export const Container = styled.div`
  width: 390px;
  height: 1209px;
  background: linear-gradient(180deg, #3b3e40 0%, #101212 100%);
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
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

//하단바 끝

//뒤로가기
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

export const BlackCircleWhite = styled.div`
  width: 70px;
  height: 70px;
  fill: #121212;
  stroke-width: 1px;
  stroke: #fff;
  margin-left: 7%;
  margin-top: 10%;
`;

export const InfoText = styled.div`
  color: #fff;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-top: -15%;
  text-align: left;
  padding-left: 110px;
`;

export const AlbumCover = styled.div`
  width: 200px;
  height: 200px;
  margin-left: 26%;
  margin-top: 15%;
  background-image: url("/images/AlbumCover.svg");
`;

export const MusicInfo = styled.div`
  #songTitle {
    color: #fff;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    margin-left: 50%;
  }

  #artist {
    color: #fff;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    margin-left: 45.5%;
    margin-top: -10.5%;
  }
`;

export const UserText = styled.div`
  color: #fff;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  padding-left: 15%;
  padding-right: 15%;
  text-align: justify;
`;

export const TapContainer = styled.div`
  margin-top: 10px;
  display: flex;
`;

export const TapOn = styled.button`
  display: flex;
  width: 195px;
  height: 36px;
  flex-shrink: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  background-image: url("/images/TapOn.svg");
  h1 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    padding-left: 75px;
    margin-top: 5px;
  }
`;

export const TapOff = styled(TapOn)`
  background-image: url("/images/TapOff.svg");
  h1 {
    color: #9c9c9c;
  }
`;
