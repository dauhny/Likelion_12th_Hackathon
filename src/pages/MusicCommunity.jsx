import React from "react";
import * as M from "../styles/styledMusicCommunity";
import { useNavigate } from "react-router-dom";

export function MusicCommunity() {
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

  const goBookCommunity = () => {
    navigate(`/bookcommunity`);
    window.scrollTo(0, 0);
  };

  const goMusicCommunity = () => {
    navigate(`/musiccommunity`);
    window.scrollTo(0, 0);
  };

  const goCommunityDetail = () => {
    navigate(`/communitydetail`);
    window.scrollTo(0, 0);
  };

  const goWrite = () => {
    navigate(`/write`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <M.Container>
        <M.BackBtn onClick={goBack}></M.BackBtn>
        <M.TapContainer>
          <M.TapOn onClick={goMusicCommunity}>
            <h1>음악</h1>
          </M.TapOn>
          <M.TapOff onClick={goBookCommunity}>
            <h1>도서</h1>
          </M.TapOff>
        </M.TapContainer>
        <M.Item>
          <M.ProfileImg>
            <img src="/images/ProfileImg.svg" />
          </M.ProfileImg>
          <M.PostNickname>고독한 예술가</M.PostNickname>
          <M.PostDate>07/17 16:29</M.PostDate>
          <M.MusicPhoto onClick={goCommunityDetail}>
            <img src="/images/AlbumCover.svg" />
          </M.MusicPhoto>
          <M.MusicCommunityBox
            onClick={goCommunityDetail}
          ></M.MusicCommunityBox>
          <M.MusicIcon onClick={goCommunityDetail}></M.MusicIcon>
          <M.MusicTitle onClick={goCommunityDetail}>T</M.MusicTitle>
          <M.MusicArtist onClick={goCommunityDetail}>실리카겔</M.MusicArtist>
          <M.MusicContent onClick={goCommunityDetail}>
            저는 영원주의를 주제로 하는 이 전시를 둘러보면서 실리카겔의 T가
            떠올랐어요!! 이음악과 함께
          </M.MusicContent>
          <M.PurpleBlur></M.PurpleBlur>
          <M.InfoText>
            관람에 도움이 되었나요?
            <p>더욱 다양한 경험을 위한 추천글을 직접 작성해보세요!</p>
          </M.InfoText>
          <M.RecBtn onClick={goWrite}></M.RecBtn>
        </M.Item>
        {/*하단바*/}
        <M.NavBar>
          {/*검색*/}
          <M.NavBtnContainer>
            <M.NavIcon
              style={{
                marginLeft: "25px",
              }}
            >
              <img src="/images/SearchIcon.svg" onClick={goSearch} />
            </M.NavIcon>
            <M.NavText
              style={{
                marginLeft: "28px",
              }}
            >
              검색
            </M.NavText>
          </M.NavBtnContainer>
          {/*AI 심리 분석*/}
          <M.NavBtnContainer>
            <M.NavIcon>
              <img src="/images/AIIcon.svg" onClick={goAI} />
            </M.NavIcon>
            <M.NavText
              style={{
                fontSize: "11px",
                marginLeft: "20px",
                marginTop: "-3px",
              }}
            >
              AI 심리 분석
            </M.NavText>{" "}
          </M.NavBtnContainer>
          {/*홈*/}
          <M.NavBtnContainer>
            <M.NavIcon
              style={{
                fontSize: "11px",
                marginLeft: "10px",
                marginTop: "-25px",
              }}
            >
              <img src="/images/HomeIcon.svg" onClick={goHome} />
            </M.NavIcon>
          </M.NavBtnContainer>
          {/*내 기록*/}
          <M.NavBtnContainer>
            <M.NavIcon
              style={{
                marginLeft: "63px",
              }}
            >
              <img src="/images/RecordIcon.svg" onClick={goRecord} />
            </M.NavIcon>
            <M.NavText
              style={{
                marginLeft: "60px",
              }}
            >
              내 기록
            </M.NavText>
          </M.NavBtnContainer>
          {/*마이페이지*/}
          <M.NavBtnContainer>
            <M.NavIcon
              style={{
                marginLeft: "45px",
              }}
            >
              <img src="/images/MyPageIcon.svg" onClick={goMyPage} />
            </M.NavIcon>
            <M.NavText>마이페이지</M.NavText>
          </M.NavBtnContainer>
        </M.NavBar>
        {/*하단바*/}
      </M.Container>
    </>
  );
}
