import React from "react";
import * as IA from "../styles/styledIntroduceApp";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export function IntroduceApp() {
  const navigate = useNavigate();

  const goIntroduceContent = () => {
    navigate(`/introducecontent`);
  };

  return (
    <>
      <IA.Container>
        <IA.Item>
          <IA.artheal>아트힐</IA.artheal>
          <IA.text1>은</IA.text1>
          <IA.text2>예술과 전시를 통해</IA.text2>
          <IA.artheal2>마음을 치유</IA.artheal2>
          <IA.text3>하고</IA.text3>
          <IA.artheal3>영감</IA.artheal3>
          <IA.text4>을 얻어가는 앱입니다.</IA.text4>
          <IA.img>
            <img src="/images/IntroduceAppImg.svg" alt="img1"></img>
          </IA.img>
          <IA.button onClick={goIntroduceContent}>
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
