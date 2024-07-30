import React from "react";
import * as A from "../styles/styledAIPast_Dark";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export function AIPast_Dark() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  const goAIPastDetail_Dark = () => {
    navigate(`/aipastdetail_dark`);
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
      <A.Container>
        <A.BackBtn onClick={goBack}></A.BackBtn>
        <A.Item>
          <A.IntroText>지난 분석</A.IntroText>
          <A.PurpleBox>
            <div
              id="purplebox"
              style={{
                width: "81px",
                height: "96px",
                borderRadius: "10px 0px 0px 10px",
                background: "linear-gradient(180deg, #C0B0D5 0%, #9286A2 50%)",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                marginTop: "35px",
                marginLeft: "-25px",
              }}
            />
            <A.GrayBox>
              <div
                id="graybox"
                style={{
                  width: "61px",
                  height: "78px",
                  borderRadius: "20px 5px 5px 5px",
                  background: "linear-gradient(0deg, #A259FF 0%, #613599 100%)",
                  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.17)",
                  marginTop: "-88px",
                  marginLeft: "-11px",
                }}
              />
              <div id="greencheck">
                <img src="/images/GreenCheck.svg"></img>
              </div>
              <div id="text">분석 완료</div>
              <A.ImgBox>
                <img
                  src="/images/ForeverismIntro.svg"
                  alt="ExhibitPoster"
                ></img>
              </A.ImgBox>
            </A.GrayBox>
          </A.PurpleBox>
          <A.ExhibitionIntroduce onClick={goAIPastDetail_Dark}>
            <div id="Title">포에버리즘 : 우리를 세상의 끝으로 </div>
            <div id="Date">
              2024/07/25에 다녀온 포에버리즘 전시 기록에 대한 <br />
              AI 분석을 마쳤어요. 회원님의 심리 상태를 알려드릴게요.
            </div>
          </A.ExhibitionIntroduce>
          <A.PinkBlur></A.PinkBlur>
          {/*하단바*/}
          <A.NavBar>
            {/*검색*/}
            <A.NavBtnContainer>
              <A.NavIcon
                style={{
                  marginLeft: "25px",
                }}
              >
                <img src="/images/SearchIcon.svg" onClick={goSearch} />
              </A.NavIcon>
              <A.NavText
                style={{
                  marginLeft: "28px",
                }}
              >
                검색
              </A.NavText>
            </A.NavBtnContainer>
            {/*AI 심리 분석*/}
            <A.NavBtnContainer>
              <A.NavIcon>
                <img src="/images/AIIcon.svg" onClick={goAI} />
              </A.NavIcon>
              <A.NavText
                style={{
                  fontSize: "11px",
                  marginLeft: "20px",
                  marginTop: "-3px",
                  color: "#A259FF",
                }}
              >
                AI 심리 분석
              </A.NavText>{" "}
            </A.NavBtnContainer>
            {/*홈*/}
            <A.NavBtnContainer>
              <A.NavIcon
                style={{
                  fontSize: "11px",
                  marginLeft: "10px",
                  marginTop: "-25px",
                }}
              >
                <img src="/images/HomeIcon.svg" onClick={goHome} />
              </A.NavIcon>
            </A.NavBtnContainer>
            {/*내 기록*/}
            <A.NavBtnContainer>
              <A.NavIcon
                style={{
                  marginLeft: "63px",
                }}
              >
                <img src="/images/RecordIcon.svg" onClick={goRecord} />
              </A.NavIcon>
              <A.NavText
                style={{
                  marginLeft: "60px",
                }}
              >
                내 기록
              </A.NavText>
            </A.NavBtnContainer>
            {/*마이페이지*/}
            <A.NavBtnContainer>
              <A.NavIcon
                style={{
                  marginLeft: "45px",
                }}
              >
                <img src="/images/MyPageIcon.svg" onClick={goMyPage} />
              </A.NavIcon>
              <A.NavText>마이페이지</A.NavText>
            </A.NavBtnContainer>
          </A.NavBar>
          {/*하단바*/}
        </A.Item>
      </A.Container>
    </>
  );
}
