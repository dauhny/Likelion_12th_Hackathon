import React from "react";
import * as M from "../styles/styledMain";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export function Main() {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate(`/login`);
    window.scrollTo(0, 0);
  };
  const goRegister = () => {
    navigate(`/register`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <M.Container>
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          transition={{ duration: 0.3 }}
        >
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
        </motion.div>
      </M.Container>
    </>
  );
}

const pageTransition = {
  initial: { x: "100%" }, // 오른쪽에서 시작
  animate: { x: "0%" }, // 가운데로 이동
  exit: { x: "-100%" }, // 왼쪽으로 이동
};
