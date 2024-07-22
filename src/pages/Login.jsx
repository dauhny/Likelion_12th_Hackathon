import React from "react";
import * as L from "../styles/styledLogin";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const goHome = () => {
    navigate(`/home`);
    window.scrollTo(0, 0);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      // API 호출 시 사용자 입력 데이터 전달
      const response = await axios.post(
        "http://127.0.0.1:8000/rest-auth/login/",
        {
          username,
          password,
        }
      );

      //토큰 저장
      const token = response.data.key;
      localStorage.setItem("token", token);

      console.log("로그인 성공:", response.data);
      goHome();
    } catch (error) {
      console.error("로그인 실패:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

  return (
    <>
      <L.Container>
        <L.Group>
          <img src="/images/Group.svg" alt="Group" />
        </L.Group>
        <L.Ellipse549></L.Ellipse549>
        <br />
        <br />
        <br />
        <br />
        <L.InputContainer>
          <L.InputLabel>아이디</L.InputLabel>
          <L.UserInput
            type="text"
            placeholder="아이디를 입력하세요."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></L.UserInput>
          <br></br>
          <L.InputLabel>비밀번호</L.InputLabel>
          <L.UserInput
            type="password"
            placeholder="비밀번호를 입력하세요."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></L.UserInput>
        </L.InputContainer>
        <br></br>
        <L.Complete onClick={handleLogin}>완료</L.Complete>
      </L.Container>
    </>
  );
}
