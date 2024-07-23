import React from "react";
import * as RD from "../styles/styledReviewDetail";
import { useNavigate } from "react-router-dom";

export function ReviewDetail() {
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
      <RD.Container>
        <RD.BackBtn onClick={goBack}></RD.BackBtn>
        <RD.Item>
          <RD.IntroText>커뮤니티</RD.IntroText>
          <RD.profile>
            <img src="/images/ProfileImg.svg" alt="profile"></img>
            <div id="name">문학소녀</div>
            <div id="time">1시간 전</div>
          </RD.profile>
          <RD.firstBox>
            <RD.date>
              <div id="text">2024-07-11</div>
            </RD.date>
            <RD.scrap>
              <img src="/images/Scrap.svg" alt="scrap"></img>
              <div id="count">12</div>
            </RD.scrap>
            <RD.PinkBlur></RD.PinkBlur>
          </RD.firstBox>
          <RD.title>포에버리즘 : 우리를 세상의 끝으로</RD.title>
          <RD.img>
            <img src="/images/ImgReviewDetail.svg" alt="exhibition"></img>
          </RD.img>
          <RD.contentContainer>
            <div id="content">내용이 들어갑니다.</div>
          </RD.contentContainer>
          <RD.PinkBlur2></RD.PinkBlur2>
          {/*하단바*/}
          <RD.NavBar>
            {/*검색*/}
            <RD.NavBtnContainer>
              <RD.NavIcon
                style={{
                  marginLeft: "25px",
                }}
              >
                <img src="/images/SearchIcon.svg" onClick={goSearch} />
              </RD.NavIcon>
              <RD.NavText
                style={{
                  marginLeft: "28px",
                }}
              >
                검색
              </RD.NavText>
            </RD.NavBtnContainer>
            {/*AI 심리 분석*/}
            <RD.NavBtnContainer>
              <RD.NavIcon>
                <img src="/images/AIIcon.svg" onClick={goAI} />
              </RD.NavIcon>
              <RD.NavText
                style={{
                  fontSize: "11px",
                  marginLeft: "20px",
                  marginTop: "-3px",
                }}
              >
                AI 심리 분석
              </RD.NavText>{" "}
            </RD.NavBtnContainer>
            {/*홈*/}
            <RD.NavBtnContainer>
              <RD.NavIcon
                style={{
                  fontSize: "11px",
                  marginLeft: "10px",
                  marginTop: "-25px",
                }}
              >
                <img src="/images/HomeIcon.svg" onClick={goHome} />
              </RD.NavIcon>
            </RD.NavBtnContainer>
            {/*내 기록*/}
            <RD.NavBtnContainer>
              <RD.NavIcon
                style={{
                  marginLeft: "63px",
                  color: "#A259FF",
                }}
              >
                <img src="/images/RecordIcon.svg" onClick={goRecord} />
              </RD.NavIcon>
              <RD.NavText
                style={{
                  marginLeft: "60px",
                  color: "#A259FF",
                }}
              >
                내 기록
              </RD.NavText>
            </RD.NavBtnContainer>
            {/*마이페이지*/}
            <RD.NavBtnContainer>
              <RD.NavIcon
                style={{
                  marginLeft: "45px",
                }}
              >
                <img
                  src="/images/MyPageIcon.svg"
                  onClick={goMyPage}
                  style={{}}
                />
              </RD.NavIcon>
              <RD.NavText style={{}}>마이페이지</RD.NavText>
            </RD.NavBtnContainer>
          </RD.NavBar>
          {/*하단바*/}
        </RD.Item>
      </RD.Container>
    </>
  );
}
