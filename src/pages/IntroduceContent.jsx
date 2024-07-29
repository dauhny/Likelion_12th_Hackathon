import React from "react";
import * as IC from "../styles/styledIntroduceContent";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export function IntroduceContent() {
  const navigate = useNavigate();

  const goIntroduceAI = () => {
    navigate(`/introduceai`);
  };

  return (
    <>
      <IC.Container>
        <IC.Item>
          <IC.text1>전시와 관련된</IC.text1>
          <IC.purple1>콘텐츠를 공유</IC.purple1>
          <IC.text2>하고</IC.text2>
          <IC.purple2>영감</IC.purple2>
          <IC.text3>을 찾아보아요!</IC.text3>
          <IC.img>
            <img src="/images/IntroduceContentImg.svg" alt="img1"></img>
          </IC.img>
          <IC.button onClick={goIntroduceAI}>
            <div id="text">Next</div>
            <div id="img">
              <img src="/images/PurpleArrow.svg" />
            </div>
          </IC.button>
        </IC.Item>
      </IC.Container>
    </>
  );
}
