import { styled } from "styled-components";

export const Container = styled.div`
  width: 390px;
  height: 2690px;
  margin: 0 auto;
  background: #121212;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export const Item = styled.div`
  margin-left: 12%;
  position: relative;
  z-index: 0;
`;

export const PinkBlur = styled.div`
  width: 185px;
  height: 184px;
  background-color: #fe3796;
  filter: blur(160px);
  position: relative;
  z-index: -1;
  margin-top: -100px;
  margin-left: -60px;
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

export const PurpleBlur = styled.div`
  width: 223px;
  height: 208px;
  margin: -30px;
  background-color: #a259ff;
  filter: blur(160px);
  margin-top: -680px;
`;

export const InfoTextPurple = styled.div`
  color: #a259ff;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 5px;
  margin-top: 30px;
  margin-left: 5px;
`;

export const NewExhibit = styled.div`
  img {
    width: 290px;
    height: 360px;
    margin: -20px 0px 0px 0px;
    border-radius: 10px;
    margin-top: 10px;
  }
  cursor: pointer;
`;

export const ExhibitPoster = styled.div`
  cursor: pointer;
  border-radius: 10px;

  img {
    width: 300px;
    height: 176px;
    resizemode: "cover";
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const ExhibitInfo = styled.div`
  width: 300px;
  height: 80px;
  border-radius: 0px 0px 10px 10px;
  background: rgba(245, 247, 250, 0.37);
  margin-top: -26%;
  position: relative;
  z-index: 999;

  #InfoP {
    color: #000;
    text-align: right;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    padding-right: 10px;
    margin-top: 2%;
  }
`;

export const InfoText = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: -20px;
  margin-top: 15%;
`;

export const ReviewBtn = styled.button`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  margin-left: 70%;
  margin-bottom: 5px;

  img {
    margin-bottom: -7px;
  }
`;

export const ReviewBox = styled.div`
  width: 300px;
  height: 130px;
  border-radius: 10px;
  background: linear-gradient(90deg, #281d36 0%, #6e5095 91%, #74549c 100%);
  margin-bottom: 15px;
  cursor: pointer;
`;

export const ProfileImg = styled.div`
  img {
    width: 30px;
    height: 30px;
    margin-left: 18px;
    margin-top: 13px;
    position: absolute;
    border-radius: 30px;
  }
`;

export const ReviewName = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  width: 100px;
  margin-left: 55px;
  margin-top: 13px;
  position: absolute;
`;

export const ReviewDate = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  position: absolute;
  margin-left: 75%;
  margin-top: 5px;
`;

export const ReviewTitle = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  position: absolute;
  margin-left: 19px;
  margin-top: 48px;
`;

export const ReviewContent = styled.div`
  color: #cccccc;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  position: absolute;
  margin-left: 19px;
  margin-top: 71px;
  width: 205px;
  height: 50px;
  overflow: hidden;
`;

export const ReviewImg = styled.div`
  img {
    width: 40px;
    height: 40px;
    position: absolute;
    margin-left: 240px;
    margin-top: 41px;
    border-radius: 5px;
  }
`;

export const LikeIcon = styled.div`
  background: url("/images/LikeIcon.svg");
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  position: absolute;
  margin-left: 71%;
  margin-top: 96px;
`;

export const LikeCnt = styled.div`
  color: #cccccc;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  position: absolute;
  margin-left: 78%;
  margin-top: 96px;
`;

export const NewExhibitContainer = styled.div``;

export const ReviewContainer = styled.div``;

export const AD = styled.div`
  margin-left: -12%;
  margin-top: 10px;
  cursor: pointer;
`;
