import { styled } from "styled-components";

export const Container = styled.div`
  width: 390px;
  height: 1425px;
  margin: 0 auto;
  background: #fff;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  background-color: black;
`;

export const Item = styled.div`
  margin-left: 12%;
`;

export const ExhibitPoster = styled.div`
  img {
    width: 290px;
    height: 360px;
    border-radius: 10px;
  }
`;

export const ExhibitTitle = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-top: 10%;
  margin-left: 3%;
`;

export const ExhibitDetail = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
`;

export const PurpleBlur = styled.div`
  width: 185px;
  height: 184px;
  background-color: #a259ff;
  filter: blur(160px);
  margin-left: 16%;
`;

export const CalendarIcon = styled.div`
  width: 18px;
  height: 18px;
  margin-bottom: 5px;
`;

export const InfoText = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-top: -25px;
  margin-left: 25px;
`;

export const LocationIcon = styled.div`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin-top: -20px;
`;

export const LocationText = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-top: -62px;
  margin-left: 5%;
  margin-bottom: 30px;
`;
