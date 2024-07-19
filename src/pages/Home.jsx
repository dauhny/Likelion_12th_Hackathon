import React from "react";
import * as H from "../styles/styledHome";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  const goContentIntro = () => {
    navigate(`/contentintro`);
    window.scrollTo(0, 0);
  };

  const goAllExihibit = () => {
    navigate(`/allexhibit`);
    window.scrollTo(0, 0);
  };

  const goReview = () => {
    navigate(`/review`);
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
      <H.Container>
        <H.Item>
          <br />
          <H.InfoTextPurple>New</H.InfoTextPurple>
          <br />
          <H.NewExhibit>
            <img src="/images/ReHersier.svg" />
          </H.NewExhibit>
          <br /> <br />
          <br /> <br />
          <H.InfoText>HOT 후기글</H.InfoText>{" "}
          <H.ReviewBtn onClick={goReview}>
            더보기 <img src="images/ExpandBtn.svg" />
          </H.ReviewBtn>
          <H.ReviewBox>
            <H.ProfileImg />
            <H.ReviewName>익명1</H.ReviewName>
            <H.ReviewDate>07/17</H.ReviewDate>
            <H.ReviewTitle>이 전시 꼭 보세요</H.ReviewTitle>
            <H.ReviewContent>
              힙노시스 전시 진짜 재밌네요...
            </H.ReviewContent>{" "}
            <H.LikeIcon />
            <H.LikeCnt>12</H.LikeCnt>
          </H.ReviewBox>
          <H.ReviewBox>
            {" "}
            <H.ProfileImg />
            <H.ReviewName>익명2</H.ReviewName>
            <H.ReviewDate>07/17</H.ReviewDate>
            <H.ReviewTitle>포에버리즘 다녀오신 분?</H.ReviewTitle>
            <H.ReviewContent>굿즈 어떤 거 사셨나요??</H.ReviewContent>{" "}
            <H.LikeIcon />
            <H.LikeCnt>12</H.LikeCnt>
          </H.ReviewBox>
          <H.ReviewBox>
            {" "}
            <H.ProfileImg />
            <H.ReviewName>익명3</H.ReviewName>
            <H.ReviewDate>07/17</H.ReviewDate>
            <H.ReviewTitle>길을 못 찾겠어요..</H.ReviewTitle>
            <H.ReviewContent>
              예술의 전당 A gate가 어디인가요?
            </H.ReviewContent>{" "}
            <H.LikeIcon />
            <H.LikeCnt>12</H.LikeCnt>
          </H.ReviewBox>
          <br /> <br />
          <br /> <br />
          <H.InfoText>HOT 전시</H.InfoText>
          <H.ReviewBtn onClick={goAllExihibit}>
            더보기 <img src="images/ExpandBtn.svg" />
          </H.ReviewBtn>
          <H.ExhibitPoster>
            <img src="/images/Foreverism.svg" onClick={goContentIntro} />
            <H.ExhibitInfo>
              {" "}
              <p id={"InfoP"}>
                포에버리즘 : 우리를 세상의 끝으로
                <br />
                2024.04.12 ~ 24.06.23
                <br />
                일민미술관
              </p>
            </H.ExhibitInfo>{" "}
          </H.ExhibitPoster>
          <br />
          <br />
          <H.ExhibitPoster>
            <img src="/images/ReHercierPoster.svg" />
            <H.ExhibitInfo>
              {" "}
              <p id={"InfoP"}>
                Re - hercier
                <br />
                2024.05.10 ~ 24.05.23
                <br />
                스페이스 로라
              </p>
            </H.ExhibitInfo>{" "}
          </H.ExhibitPoster>
          <br />
          <br />
          <H.ExhibitPoster>
            <img src="/images/Hipgnosis.svg" alt="Hipgnosis" />
            <H.ExhibitInfo>
              <p id={"InfoP"}>
                힙노시스 : 롤 플레잉 스토리
                <br />
                2024.03.8 ~ 24.08.31
                <br />
                그라운드 시소 서촌
              </p>
            </H.ExhibitInfo>
          </H.ExhibitPoster>
          <H.PurpleBlur></H.PurpleBlur>{" "}
        </H.Item>

        {/*하단바*/}
        <H.NavBar>
          {/*검색*/}
          <H.NavBtnContainer>
            <H.NavIcon
              style={{
                marginLeft: "25px",
              }}
            >
              <img src="/images/SearchIcon.svg" onClick={goSearch} />
            </H.NavIcon>
            <H.NavText
              style={{
                marginLeft: "28px",
              }}
            >
              검색
            </H.NavText>
          </H.NavBtnContainer>
          {/*AI 심리 분석*/}
          <H.NavBtnContainer>
            <H.NavIcon>
              <img src="/images/AIIcon.svg" onClick={goAI} />
            </H.NavIcon>
            <H.NavText
              style={{
                fontSize: "11px",
                marginLeft: "20px",
                marginTop: "-3px",
              }}
            >
              AI 심리 분석
            </H.NavText>{" "}
          </H.NavBtnContainer>
          {/*홈*/}
          <H.NavBtnContainer>
            <H.NavIcon
              style={{
                fontSize: "11px",
                marginLeft: "10px",
                marginTop: "-25px",
              }}
            >
              <img src="/images/HomeIcon.svg" onClick={goHome} />
            </H.NavIcon>
          </H.NavBtnContainer>
          {/*내 기록*/}
          <H.NavBtnContainer>
            <H.NavIcon
              style={{
                marginLeft: "63px",
              }}
            >
              <img src="/images/RecordIcon.svg" onClick={goRecord} />
            </H.NavIcon>
            <H.NavText
              style={{
                marginLeft: "60px",
              }}
            >
              내 기록
            </H.NavText>
          </H.NavBtnContainer>
          {/*마이페이지*/}
          <H.NavBtnContainer>
            <H.NavIcon
              style={{
                marginLeft: "45px",
              }}
            >
              <img src="/images/MyPageIcon.svg" onClick={goMyPage} />
            </H.NavIcon>
            <H.NavText>마이페이지</H.NavText>
          </H.NavBtnContainer>
        </H.NavBar>
        {/*하단바*/}
      </H.Container>
    </>
  );
}
