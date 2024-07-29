import React from "react";
import * as IC from "../styles/styledIntroduceCommunity";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export function IntroduceCommunity() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(`/home`);
  };

  return (
    <>
      <IC.Container>
        <IC.Item>
          <IC.text1>전시를 기록하고</IC.text1>
          <IC.text2>타인과</IC.text2>
          <IC.purple1>공유</IC.purple1>
          <IC.text3>하며</IC.text3>
          <IC.purple2>감상</IC.purple2>
          <IC.text4>을 키워보세요!</IC.text4>
          <IC.img>
            <img src="/images/IntroduceCommunityImg.svg" alt="img1"></img>
          </IC.img>
          <IC.button onClick={goHome}>
            <div id="text">Start</div>
            <div id="img">
              <img src="/images/PurpleArrow.svg" />
            </div>
          </IC.button>
        </IC.Item>
      </IC.Container>
    </>
  );
}
