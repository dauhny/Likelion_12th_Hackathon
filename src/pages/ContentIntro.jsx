import React from "react";
import * as C from "../styles/styledContentIntro";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export function ContentIntro() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  const goMusicCommunity = () => {
    navigate(`/musiccommunity`);
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

  //스크랩 버튼 스타일, 횟수 변경
  const [ScrapBtn, setScrapBtn] = useState("/images/ScrapBtnOff.svg");
  const [ScrapCnt, setScrapCnt] = useState(0);

  function ChangeScrap() {
    if (ScrapBtn === "/images/ScrapBtnOff.svg") {
      setScrapBtn("/images/ScrapBtnOn.svg");
      setScrapCnt(ScrapCnt + 1);
      alert("스크랩되었습니다.");
    } else {
      setScrapBtn("/images/ScrapBtnOff.svg");
      setScrapCnt(ScrapCnt - 1);
      alert("스크랩이 취소되었습니다.");
    }
  }

  return (
    <>
      <C.Container>
        <C.BackBtn onClick={goBack}></C.BackBtn>
        <C.Item>
          <C.ExhibitTitle>포에버리즘 : 우리를 세상의 끝으로</C.ExhibitTitle>
          <C.ExhibitPoster>
            <img src="/images/ForeverismIntro.svg" alt="ExhibitPoster" />
          </C.ExhibitPoster>
          <C.LocationIcon>
            <img src="/images/LocationIcon.svg" />
          </C.LocationIcon>
          <br /> <br />
          <C.LocationText>서울 종로구 세종대로 152 일민 미술관</C.LocationText>
          <C.CalendarIcon>
            <img src="/images/CalendarIcon.svg" />
          </C.CalendarIcon>
          <C.InfoText>전시 일정</C.InfoText>
          <C.ExhibitDetail>
            2024. 04. 12 ~ 2024. 06. 23
            <br />
            11:00 ~ 19:00
            <br /> 매주 월요일 휴무
          </C.ExhibitDetail>
          <C.BtnContainer>
            <C.ScrapBtn onClick={ChangeScrap}>
              <img src={ScrapBtn} alt="Scrap Button" />
              <h3>{ScrapCnt}</h3>
            </C.ScrapBtn>
            <C.ShareBtn>
              <img src="/images/ShareBtn.svg" />
            </C.ShareBtn>
          </C.BtnContainer>{" "}
          <C.InfoText style={{ margin: "80px 0 5px 20px" }}>
            이 전시와 함께하면 좋은 콘텐츠를 확인해보세요.
          </C.InfoText>
          <C.goRecBtn onClick={goMusicCommunity}>
            <img src="/images/goRecBtn.svg" />
          </C.goRecBtn>
          <C.PurpleBlur></C.PurpleBlur>
          <C.CommentIcon>
            <img src="/images/CommentIcon.svg" />
          </C.CommentIcon>
          <C.InfoText
            style={{
              marginLeft: "15px",
              marginTop: "-22px",
            }}
          >
            코멘트 (33)
          </C.InfoText>
          <C.CommentInputContainer>
            <C.ProfileImg>
              <img src="/images/ProfileImgComment.svg" />
            </C.ProfileImg>
            <C.CommentInput placeholder="전시에 대한 코멘트를 남겨보세요."></C.CommentInput>
            <C.CommentBtn>
              <img src="/images/CommentBtn.svg" />
            </C.CommentBtn>
          </C.CommentInputContainer>
          <C.CommentContent>" 제가 본 전시 중 최고였어요! "</C.CommentContent>
          <C.CommentDate>07/15</C.CommentDate>
          <C.CommentNickname>dauhny • </C.CommentNickname>
          <C.CommentProfile>
            <img src="/images/ProfileImg.svg" />
          </C.CommentProfile>
          <C.CommentLine></C.CommentLine>
          <C.PinkBlur></C.PinkBlur>
          {/*하단바*/}
          <C.NavBar>
            {/*검색*/}
            <C.NavBtnContainer>
              <C.NavIcon
                style={{
                  marginLeft: "25px",
                }}
              >
                <img src="/images/SearchIcon.svg" onClick={goSearch} />
              </C.NavIcon>
              <C.NavText
                style={{
                  marginLeft: "28px",
                }}
              >
                검색
              </C.NavText>
            </C.NavBtnContainer>
            {/*AI 심리 분석*/}
            <C.NavBtnContainer>
              <C.NavIcon>
                <img src="/images/AIIcon.svg" onClick={goAI} />
              </C.NavIcon>
              <C.NavText
                style={{
                  fontSize: "11px",
                  marginLeft: "20px",
                  marginTop: "-3px",
                }}
              >
                AI 심리 분석
              </C.NavText>{" "}
            </C.NavBtnContainer>
            {/*홈*/}
            <C.NavBtnContainer>
              <C.NavIcon
                style={{
                  fontSize: "11px",
                  marginLeft: "10px",
                  marginTop: "-25px",
                }}
              >
                <img src="/images/HomeIcon.svg" onClick={goHome} />
              </C.NavIcon>
            </C.NavBtnContainer>
            {/*내 기록*/}
            <C.NavBtnContainer>
              <C.NavIcon
                style={{
                  marginLeft: "63px",
                }}
              >
                <img src="/images/RecordIcon.svg" onClick={goRecord} />
              </C.NavIcon>
              <C.NavText
                style={{
                  marginLeft: "60px",
                }}
              >
                내 기록
              </C.NavText>
            </C.NavBtnContainer>
            {/*마이페이지*/}
            <C.NavBtnContainer>
              <C.NavIcon
                style={{
                  marginLeft: "45px",
                }}
              >
                <img src="/images/MyPageIcon.svg" onClick={goMyPage} />
              </C.NavIcon>
              <C.NavText>마이페이지</C.NavText>
            </C.NavBtnContainer>
          </C.NavBar>
          {/*하단바*/}
        </C.Item>
      </C.Container>
    </>
  );
}
