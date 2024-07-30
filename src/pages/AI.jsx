import React from "react";
import * as A from "../styles/styledAI";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export function AI() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  const goAIRecordList = () => {
    navigate(`/airecordlist`);
  };

  const goAIPast = () => {
    navigate(`/aipast`);
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
          <A.IntroText>AI 심리 분석</A.IntroText>
          <A.AIImg>
            <img src="/images/ChatGPT 2.svg" />
          </A.AIImg>
          <A.Analysis onClick={goAIRecordList}>
            <div id="folder">
              <img src="/images/Folder.svg" />
            </div>
            <div id="text">내 기록 분석하기</div>
          </A.Analysis>
          <A.Replay onClick={goAIPast}>
            <div id="past">
              <img src="/images/Past.svg" />
            </div>
            <div id="text2">지난 분석 다시 보기</div>
          </A.Replay>
        </A.Item>
      </A.Container>
    </>
  );
}
