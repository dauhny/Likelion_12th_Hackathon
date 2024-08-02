import React from "react";
import * as IA from "../styles/styledIntroduceAI";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export function IntroduceAI() {
  const navigate = useNavigate();

  const goIntroduceCommunity = () => {
    navigate(`/introducecommunity`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <IA.Container>
        <IA.Item>
          <IA.purple1>AI 감정 분석</IA.purple1>
          <IA.text1>을 통해</IA.text1>
          <IA.text2>자신의 감정을 파악하고</IA.text2>
          <IA.purple2>솔루션</IA.purple2>
          <IA.text3>을 제공받아 보세요!</IA.text3>
          <IA.img>
            <img src="/images/IntroduceAIImg.svg" alt="img1"></img>
          </IA.img>
          <IA.button onClick={goIntroduceCommunity}>
            <div id="text">Next</div>
            <div id="img">
              <img src="/images/PurpleArrow.svg" />
            </div>
          </IA.button>
        </IA.Item>
      </IA.Container>
    </>
  );
}
