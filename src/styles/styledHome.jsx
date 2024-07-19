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

//고정
export const Item = styled.div`
  margin-left: 12%;
  position: relative;
  z-index: 0;
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
`;

export const InfoTextPurple = styled.div`
  color: #a259ff;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 5px;
`;

export const NewExhibit = styled.div`
  img {
    width: 290px;
    height: 360px;
    margin: -20px 0px 0px 0px;
    border-radius: 10px;
  }
`;

export const ExhibitPoster = styled.div`
  width: 300px;
  height: 176px;
  flex-shrink: 0;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  z-index: 999;
  cursor: pointer;
`;

export const ExhibitInfo = styled.div`
  width: 300px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 0px 0px 10px 10px;
  background: rgba(245, 247, 250, 0.37);
  margin-top: -28%;
  position: absolute;

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
  height: 110px;
  border-radius: 10px;
  background: linear-gradient(90deg, #281d36 0%, #6e5095 91%, #74549c 100%);
  margin-bottom: 15px;
`;

export const ProfileImg = styled.div`
  background: url("/images/ProfileImgReview.svg");
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  margin-left: 18px;
  margin-top: 13px;
  position: absolute;
`;

export const ReviewName = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  width: 100px;
  margin-left: 50px;
  margin-top: 13px;
  position: absolute;
`;

export const ReviewDate = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  position: absolute;
  margin-left: 73%;
  margin-top: 7px;
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
  margin-top: 43px;
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
  margin-top: 66px;
`;

export const LikeIcon = styled.div`
  background: url("/images/LikeIcon.svg");
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  position: absolute;
  margin-left: 71%;
  margin-top: 76px;
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
  margin-top: 76px;
`;
