import { styled } from "styled-components";

//고정
export const Container = styled.div`
  width: 390px;
  height: 1156px;
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

// 날짜, 삭제, 수정 묶은 컨테이너
export const firstBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 385px;
  height: 30px;
  margin-top: 50px;
`;

export const date = styled.button`
  display: flex;
  flex-direction: row;
  width: 96px;
  height: 22px;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: #121212;
  border: 1px solid #dec5fb;
  cursor: pointer;
  #text {
    flex-direction: row;
    width: 65.73px;
    height: 15px;
    flex-shrink: 0;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: 160.5%; /* 19.26px */
    margin-left: 7px;
  }
`;

export const modify = styled.div`
  width: 43px;
  height: 22px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #ddc4fb;
  margin-left: 125px;
  #text {
    color: #3d3a3a;
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: 160.5%; /* 16.05px */
    margin-left: 13px;
    margin-top: 3px;
  }
`;

export const remove = styled.div`
  width: 43px;
  height: 22px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #ddc4fb;
  margin-left: 7px;
  #text {
    color: #3d3a3a;
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: 160.5%; /* 16.05px */
    margin-left: 13px;
    margin-top: 3px;
  }
`;

// 전시 제목
export const title = styled.div`
  width: 325px;
  height: 32px;
  flex-shrink: 0;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 160.5%; /* 32.1px */
  margin-left: 14px;
  margin-top: 15px;
`;

// 전시 이미지
export const img = styled.div`
  img {
    width: 236px;
    height: 214px;
    flex-shrink: 0;
    border-radius: 10px;
    margin-top: 23px;
    margin-left: 30px;
  }
`;

export const PinkBlur = styled.div`
  width: 223px;
  height: 251.393px;
  background-color: #c47dd7;
  filter: blur(140px);
  position: relative;
  z-index: -3;
  margin-top: -295px;
  margin-left: -70px;
`;

// 내용
export const content = styled.div`
  width: 343px;
  height: 295px;
  flex-shrink: 0;
  border-radius: 10px;
  background: linear-gradient(
    270deg,
    #dbbefc 0%,
    #eadbfc 21%,
    #faf8fc 76.5%,
    #fff 100%
  );
  margin-top: 73px;
  margin-left: -24px;

  #text {
    color: #3d3a3a;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 160.5%; /* 22.47px */
    position: absolute;
    margin-left: 15px;
    margin-top: 10px;
  }
`;

// 도움말
export const help = styled.div`
  width: 123px;
  height: 49px;
  margin-top: 103px;
  margin-left: 84px;
  #text1 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 184.615% */
    text-align: center;
  }

  #text2 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
  }
`;

// 아이데이션 이미지
export const idea = styled.div`
  img {
    width: 55px;
    height: 56.833px;
    flex-shrink: 0;
    margin-left: 118px;
    margin-top: 3px;
  }
`;

// 아이데이션 버튼
export const ideation = styled.div`
  width: 102px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #a259ff;
  background: #a259ff;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 92px;
  display: flex;
  flex-direction: row;
  #text {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 160.5%; /* 19.26px */
    margin-left: 18px;
    margin-top: 5px;
  }

  #arrow {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    margin-left: 3px;
    margin-top: 3.5px;
  }
`;

export const PinkBlur2 = styled.div`
  width: 223px;
  height: 251.393px;
  background-color: #c47dd7;
  filter: blur(140px);
  position: relative;
  z-index: -3;
  margin-left: 35px;
  margin-top: -190px;
`;
