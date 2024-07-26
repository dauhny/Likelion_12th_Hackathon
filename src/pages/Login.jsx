import React from "react";
import * as L from "../styles/styledLogin";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const goHome = () => {
    navigate(`/home`);
    window.scrollTo(0, 0);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!validateInputs()) return;
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/rest-auth/login/",
        {
          username,
          password,
        }
      );

      //토큰 저장
      const token = response.data.token;
      localStorage.setItem("token", token);

      //usercode 저장
      const usercode = response.data.usercode;
      localStorage.setItem("usercode", usercode);

      console.log("로그인 성공:", response.data);
      goHome();
    } catch (error) {
      console.error("로그인 실패:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      } else {
        setErrorMessage("로그인에 실패했습니다. 네트워크를 확인해주세요.");
      }
    }
  };

  const validateInputs = () => {
    if (username.trim() === "") {
      setErrorMessage("아이디를 입력하세요.");
      return false;
    }

    if (password.trim() === "") {
      setErrorMessage("비밀번호를 입력하세요.");
      return false;
    }

    setErrorMessage("");
    return true;
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
        {errorMessage && <L.ErrorMessage>{errorMessage}</L.ErrorMessage>}
        <br></br>
        <L.Complete onClick={handleLogin}>완료</L.Complete>
      </L.Container>
    </>
  );
}
