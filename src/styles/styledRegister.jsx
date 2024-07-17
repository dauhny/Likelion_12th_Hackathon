import { styled, css } from "styled-components";

export const Container = styled.div`
  width: 390px;
  height: 1408px;
  margin: 0 auto;
  background: #121212;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export const Group = styled.div`
  width: 157px;
  height: 118px;
`;

export const Ellipse549 = styled.div`
  width: 206px;
  height: 205px;
  background-color: #a259ff;
  filter: blur(159.68670654296875px);
  margin-top: -120px;
`;

export const InputContainer = styled.div`
  width: 328px;
  position: relative;
  margin-bottom: 16px;
`;

export const InputLabel = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160.5%;
  margin: 7px;
`;

export const UserInput = styled.input`
  width: 313px;
  height: 34px;
  border-radius: 10px;
  border: 1px solid #a259ff;
  background: #121212;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160.5%;
  padding-left: 10px;
`;

export const UserInputShort = styled(UserInput)`
  width: 230px;
`;

export const CheckId = styled.button`
  width: 80px;
  height: 34px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #a259ff;
  background: #a259ff;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160.5%;
  margin-left: 3px;
  cursor: pointer;
`;

export const CheckPw = styled(CheckId)``;

export const Complete = styled.button`
  width: 328px;
  height: 34px;
  border-radius: 8px;
  border: 1px solid #a259ff;
  background: #a259ff;
  color: #fff;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160.5%;
  cursor: pointer;
  margin-top: 20px;
`;

export const Name = styled(UserInput)``;

export const NickName = styled(UserInputShort)``;

export const CheckNickName = styled(CheckId)``;

export const SelectBirth = styled(UserInputShort)`
  width: 115px;
`;

export const Email = styled(UserInput)``;

export const PhoneNumber = styled(UserInput)`
  margin-bottom: 10px;
`;

export const InfoText = styled.div`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 160.5%;
`;

export const PinkBlur = styled.div`
  width: 223px;
  height: 208.099px;
  margin: -30px;
`;

export const InfoTextSmall = styled(InfoText)`
  font-size: 12px;
  text-align: left;
`;
