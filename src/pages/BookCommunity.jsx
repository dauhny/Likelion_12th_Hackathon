import React from "react";
import * as B from "../styles/styledBookCommunity";
import { useNavigate } from "react-router-dom";

export function BookCommunity() {
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

  const goMusicCommunity = () => {
    navigate(`/musiccommunity`);
    window.scrollTo(0, 0);
  };

  const goBookCommunity = () => {
    navigate(`/bookcommunity`);
    window.scrollTo(0, 0);
  };

  const goBookDetail = () => {
    navigate(`/bookdetail`);
    window.scrollTo(0, 0);
  };

  const goBookWrite = () => {
    navigate(`/bookwrite`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <B.Container>
        <B.BackBtn onClick={goBack}></B.BackBtn>
        <B.PageTitle>추천 콘텐츠</B.PageTitle>
        <B.TapContainer>
          <B.TapOff onClick={goMusicCommunity}>
            <h1>음악</h1>
          </B.TapOff>
          <B.TapOn onClick={goBookCommunity}>
            <h1>도서</h1>
          </B.TapOn>
        </B.TapContainer>
        <B.Item>
          <B.ProfileImg>
            <img src="/images/ProfileImg.svg" />
          </B.ProfileImg>
          <B.PostNickname>고독한 예술가</B.PostNickname>
          <B.PostDate>07/17 16:29</B.PostDate>
          <B.BookPhoto onClick={goBookDetail}>
            <img src="/images/RecBook1.svg" />
          </B.BookPhoto>
          <B.BookCommunityBox onClick={goBookDetail}></B.BookCommunityBox>
          <B.BookIcon onClick={goBookDetail}></B.BookIcon>
          <B.BookTitle onClick={goBookDetail}>노스텔지어</B.BookTitle>
          <B.BookArtist onClick={goBookDetail}>이지원</B.BookArtist>
          <B.BookContent onClick={goBookDetail}>
            이 책과 함께하면 이 전시는 더욱 풍부해지는 것 같아요.
          </B.BookContent>
          <B.PurpleBlur></B.PurpleBlur>
          <B.InfoText>
            관람에 도움이 되었나요?
            <p>더욱 다양한 경험을 위한 추천글을 직접 작성해보세요!</p>
          </B.InfoText>
          <B.RecBtn onClick={goBookWrite}></B.RecBtn>
        </B.Item>
        {/*하단바*/}
        <B.NavBar>
          {/*검색*/}
          <B.NavBtnContainer>
            <B.NavIcon
              style={{
                marginLeft: "25px",
              }}
            >
              <img src="/images/SearchIcon.svg" onClick={goSearch} />
            </B.NavIcon>
            <B.NavText
              style={{
                marginLeft: "28px",
              }}
            >
              검색
            </B.NavText>
          </B.NavBtnContainer>
          {/*AI 심리 분석*/}
          <B.NavBtnContainer>
            <B.NavIcon>
              <img src="/images/AIIcon.svg" onClick={goAI} />
            </B.NavIcon>
            <B.NavText
              style={{
                fontSize: "11px",
                marginLeft: "20px",
                marginTop: "-3px",
              }}
            >
              AI 심리 분석
            </B.NavText>{" "}
          </B.NavBtnContainer>
          {/*홈*/}
          <B.NavBtnContainer>
            <B.NavIcon
              style={{
                fontSize: "11px",
                marginLeft: "10px",
                marginTop: "-25px",
              }}
            >
              <img src="/images/HomeIcon.svg" onClick={goHome} />
            </B.NavIcon>
          </B.NavBtnContainer>
          {/*내 기록*/}
          <B.NavBtnContainer>
            <B.NavIcon
              style={{
                marginLeft: "63px",
              }}
            >
              <img src="/images/RecordIcon.svg" onClick={goRecord} />
            </B.NavIcon>
            <B.NavText
              style={{
                marginLeft: "60px",
              }}
            >
              내 기록
            </B.NavText>
          </B.NavBtnContainer>
          {/*마이페이지*/}
          <B.NavBtnContainer>
            <B.NavIcon
              style={{
                marginLeft: "45px",
              }}
            >
              <img src="/images/MyPageIcon.svg" onClick={goMyPage} />
            </B.NavIcon>
            <B.NavText>마이페이지</B.NavText>
          </B.NavBtnContainer>
        </B.NavBar>
        {/*하단바*/}
      </B.Container>
    </>
  );
}
