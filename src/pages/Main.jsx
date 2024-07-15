import React from "react";
import * as M from "../styles/styledMain";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function Main() {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate(`/rest-auth/login`);
  };
  const goRegister = () => {
    navigate(`/register`);
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
        <M.Login onClick={goLogin}>로그인</M.Login>
        <br />
        <M.Register onClick={goRegister}>회원가입</M.Register>
      </M.Container>
    </>
  );
}
