import React from "react";
import * as S from "../styles/styledSearch";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  //하단바
  const goSearch = () => {
    navigate(`/search`);
    window.scrollTo(0, 0);
  };

  const goAI = () => {
    navigate(`/ai`);
    window.scrollTo(0, 0);
  };

  const goHome = () => {
    navigate(`/home`);
    window.scrollTo(0, 0);
  };

  const goRecord = () => {
    navigate(`/record`);
    window.scrollTo(0, 0);
  };

  const goMyPage = () => {
    navigate(`/mypage`);
    window.scrollTo(0, 0);
  };

  //하단바 끝

  return (
    <>
      <S.Container>
        <S.BackBtn onClick={goBack}></S.BackBtn>{" "}
        <S.PageTitle>전시 검색</S.PageTitle>
        <S.Item>
          <S.SearchInput placeholder="관심 있는 전시를 검색해보세요." />
          <S.SearchIcon />
          <br />
          <S.ExhibitContainer>
            <S.ExhibitImg>
              <img src="/images/Foreverism.svg" />
            </S.ExhibitImg>
            <S.ExhibitInfoBox>
              <S.ExhibitTitle>포에버리즘 : 우리를 세상의 끝으로</S.ExhibitTitle>
              <S.ExhibitDetail>
                2024. 04. 12 ~ 2024. 06. 23
                <br />
                일민 미술관
              </S.ExhibitDetail>
            </S.ExhibitInfoBox>
          </S.ExhibitContainer>
        </S.Item>
        {/*하단바*/}
        <S.NavBar>
          {/*검색*/}
          <S.NavBtnContainer>
            <S.NavIcon
              style={{
                marginLeft: "25px",
              }}
            >
              <img src="/images/SearchIcon.svg" onClick={goSearch} />
            </S.NavIcon>
            <S.NavText
              style={{
                marginLeft: "28px",
              }}
            >
              검색
            </S.NavText>
          </S.NavBtnContainer>
          {/*AI 심리 분석*/}
          <S.NavBtnContainer>
            <S.NavIcon>
              <img src="/images/AIIcon.svg" onClick={goAI} />
            </S.NavIcon>
            <S.NavText
              style={{
                fontSize: "11px",
                marginLeft: "20px",
                marginTop: "-3px",
              }}
            >
              AI 심리 분석
            </S.NavText>{" "}
          </S.NavBtnContainer>
          {/*홈*/}
          <S.NavBtnContainer>
            <S.NavIcon
              style={{
                fontSize: "11px",
                marginLeft: "10px",
                marginTop: "-25px",
              }}
            >
              <img src="/images/HomeIcon.svg" onClick={goHome} />
            </S.NavIcon>
          </S.NavBtnContainer>
          {/*내 기록*/}
          <S.NavBtnContainer>
            <S.NavIcon
              style={{
                marginLeft: "63px",
              }}
            >
              <img src="/images/RecordIcon.svg" onClick={goRecord} />
            </S.NavIcon>
            <S.NavText
              style={{
                marginLeft: "60px",
              }}
            >
              내 기록
            </S.NavText>
          </S.NavBtnContainer>
          {/*마이페이지*/}
          <S.NavBtnContainer>
            <S.NavIcon
              style={{
                marginLeft: "45px",
              }}
            >
              <img src="/images/MyPageIcon.svg" onClick={goMyPage} />
            </S.NavIcon>
            <S.NavText>마이페이지</S.NavText>
          </S.NavBtnContainer>
        </S.NavBar>
        {/*하단바*/}
      </S.Container>
    </>
  );
};
