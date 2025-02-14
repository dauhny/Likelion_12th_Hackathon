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

// AI 감정 분석
export const purple1 = styled.div`
  font-family: "Pretendard Variable";
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(
    180deg,
    #ac88d9 0%,
    #7656a0 25%,
    #5c3d83 37.5%,
    #412466 50%,
    #311b4d 75%,
    #291640 87.5%,
    #241439 93.75%,
    #221336 96.87%,
    #211235 98.44%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 25px;
  margin-top: 95px;
`;

// 을 통해
export const text1 = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 175px;
  margin-top: -30px;
`;

// 솔직한 감정을 파악하고
export const text2 = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 25px;
`;

// 솔루션
export const purple2 = styled.div`
  font-family: "Pretendard Variable";
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(
    180deg,
    #ac88d9 0%,
    #7656a0 25%,
    #5c3d83 37.5%,
    #412466 50%,
    #311b4d 75%,
    #291640 87.5%,
    #241439 93.75%,
    #221336 96.87%,
    #211235 98.44%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 25px;
`;

// 을 제공받아 보세요!
export const text3 = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 105px;
  margin-top: -30px;
`;

export const img = styled.div`
  img {
    width: 247.452px;
    height: 500px;
    flex-shrink: 0;
    margin-top: 40px;
    margin-left: 25px;
  }
`;

// 버튼
export const button = styled.button`
  width: 68px;
  height: 31px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid #eae3f2;
  background: #eae3f2;
  cursor: pointer;
  margin-top: 42px;
  margin-left: 245px;

  &:hover {
    #text {
      font-weight: 800;
    }
  }

  #text {
    color: #6f4f98;
    font-family: "Pretendard Variable";
    font-size: 19px;
    font-style: normal;
    font-weight: 00;
    line-height: normal;
    margin-left: -10px;
    margin-top: -3px;
  }

  #img {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    margin-left: 42px;
    margin-top: -16px;
  }
`;
