import React from "react";
import * as A from "../styles/styledAI_Dark";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export function AI_Dark() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  const goAIRecordList_Dark = () => {
    navigate(`/airecordlist_dark`);
  };

  const goAIPast_Dark = () => {
    navigate(`/aipast_dark`);
  };

  return (
    <>
      <A.Container>
        <A.BackBtn onClick={goBack}></A.BackBtn>
        <A.Item>
          <A.IntroText>AI 심리 분석</A.IntroText>
          <A.AIImg>
            <img src="/images/Logo.svg" />
          </A.AIImg>
          <A.Analysis onClick={goAIRecordList_Dark}>
            <div id="folder">
              <img src="/images/Folder.svg" />
            </div>
            <div id="text">내 기록 분석하기</div>
          </A.Analysis>
          <A.Replay onClick={goAIPast_Dark}>
            <div id="past">
              <img src="/images/Past.svg" />
            </div>
            <div id="text2">지난 분석 다시 보기</div>
          </A.Replay>
          <A.PinkBlur></A.PinkBlur>
        </A.Item>
      </A.Container>
    </>
  );
}
