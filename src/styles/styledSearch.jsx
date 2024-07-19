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

//페이지 제목
export const PageTitle = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  margin-top: -23px;
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

export const SearchInput = styled.input`
  width: 249px;
  height: 38px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid #a259ff;
  background: #111;
  box-shadow: 0px 81px 106px 0px rgba(0, 0, 0, 0.07),
    0px 10.142px 13.273px 0px rgba(0, 0, 0, 0.03);
  color: #ccc;
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Pretendard Variable";
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  padding-left: 10px;
  margin-top: 20px;
`;

export const SearchIcon = styled.button`
  background: url("/images/SearchIcon.svg");
  border: none;
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: absolute;
  margin-top: 27px;
  margin-left: 7px;
`;

export const ExhibitContainer = styled.div`
  margin-bottom: 120px;
`;

export const ExhibitImg = styled.button`
  background: transparent;
  border: none;

  cursor: pointer;
  position: absolute;
  margin-top: 19px;

  img {
    width: 100px;
    height: 97px;
    resizemode: "cover";
    object-fit: cover;
    border-radius: 10px 0px 0px 10px;
  }
`;

export const ExhibitInfoBox = styled.button`
  width: 182px;
  height: 97px;
  border: none;
  border-radius: 0px 10px 10px 0px;
  background: linear-gradient(
    180deg,
    #281d36 37.67%,
    #392a4d 68.17%,
    #4e3968 100%
  );
  cursor: pointer;
  position: absolute;
  margin-top: 20px;
  margin-left: 106px;
`;

export const ExhibitTitle = styled.div`
  color: #fdfdfd;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 10px;
`;

export const ExhibitDetail = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  margin-left: 18px;
`;
