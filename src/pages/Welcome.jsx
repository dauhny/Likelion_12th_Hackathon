import React from "react";
import * as M from "../styles/styledWelcome";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function Welcome() {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate(`/login`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <M.Container>
        <M.Group>
          <img src="/images/Group.svg" alt="Group" />
        </M.Group>
        <M.Ellipse549></M.Ellipse549>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <M.InfoText>환영합니다.</M.InfoText>
        <M.StartBtn onClick={goLogin}>로그인 하러 가기 -></M.StartBtn>
        <br />
      </M.Container>
    </>
  );
}
