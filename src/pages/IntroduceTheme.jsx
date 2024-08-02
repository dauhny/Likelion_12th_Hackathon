import React from "react";
import * as IC from "../styles/styledIntroduceTheme";
import { useNavigate, useLocation } from "react-router-dom";
export function IntroduceTheme() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(`/home`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <IC.Container>
        <IC.Item>
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
