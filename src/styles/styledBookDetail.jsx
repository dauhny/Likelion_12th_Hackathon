import { styled } from "styled-components";

export const Container = styled.div`
  width: 390px;
  height: 969px;
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

export const ProfileImgBlack = styled.div`
  width: 50px;
  height: 50px;
  margin-left: 12%;
  margin-top: 10%;
`;

export const InfoText = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-top: -12%;
  text-align: left;
  padding-left: 110px;
`;

export const AlbumCover = styled.div`
  width: 200px;
  height: 200px;
  margin-left: 26%;
  margin-top: 15%;
  background-image: url("/images/AlbumCover.svg");
  border-radius: 10px;
`;

export const MusicInfo = styled.div`
  #songTitle {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    margin-left: 49.5%;
  }

  #artist {
    color: #fff;
    font-family: "Pretendard Variable";
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
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  padding-left: 15%;
  padding-right: 15%;
  text-align: justify;
`;
