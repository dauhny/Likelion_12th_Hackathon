import React from "react";
import * as R from "../styles/styledRegister";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const goWelcome = () => {
    navigate(`/welcome`);
    window.scrollTo(0, 0);
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    if (!validateInputs()) return;
    try {
      const response = await axios.post("http://127.0.0.1:8000/user/", {
        username,
        password,
        password_confirm,
        email,
        nickname,
        phone,
        name,
        birthdate,
      });
      console.log("회원가입 성공:", response.data);
      goWelcome(); // 성공적으로 가입된 후 홈으로 이동
    } catch (error) {
      console.error("회원가입 실패", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

  // 유효성 검사
  const validateInputs = () => {
    if (username.trim() === "") {
      setErrorMessage("아이디를 입력하세요.");
      return false;
    }

    if (password.trim() === "") {
      setErrorMessage("비밀번호를 입력하세요.");
      return false;
    }

    if (password.length < 8) {
      setErrorMessage("비밀번호가 8글자 미만입니다. 다시 입력하세요.");
      return false;
    }

    if (!/[A-Za-z]/.test(password) || !/\d/.test(password)) {
      setErrorMessage(
        "비밀번호는 문자와 숫자 조합만 가능합니다. 다시 입력하세요."
      );
      return false;
    }

    if (/^\d+$/.test(password)) {
      setErrorMessage("숫자로만 이루어져 있습니다. 다시 입력하세요.");
      return false;
    }

    if (["11111111", "12345678", "password", "qwerty"].includes(password)) {
      setErrorMessage("이 비밀번호는 너무 흔합니다. 다시 입력하세요.");
      return false;
    }

    if (password !== password_confirm) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
      return false;
    }

    if (name.trim() === "") {
      setErrorMessage("이름을 입력하세요.");
      return false;
    }

    if (nickname.trim() === "") {
      setErrorMessage("이메일을 입력하세요.");
      return false;
    }

    if (email.trim() === "") {
      setErrorMessage("이메일을 입력하세요.");
      return false;
    }

    if (!email.includes("@")) {
      setErrorMessage("유효한 이메일 주소를 입력하세요.");
      return false;
    }

    if (phone.trim() === "") {
      setErrorMessage("전화번호를 입력하세요.");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  return (
    <R.Container>
      <R.Group>
        <img src="/images/Group.svg" alt="Group" />
      </R.Group>
      <R.Ellipse549></R.Ellipse549>
      <br />
      <br />
      <br />
      <br />
      <br />
      <R.InputContainer>
        <R.InputLabel>아이디</R.InputLabel>
        <R.UserInputShort
          type="text"
          placeholder="아이디를 입력하세요."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <R.CheckId>중복체크</R.CheckId>
        <br />
        <R.InputLabel>비밀번호</R.InputLabel>
        <R.UserInput
          type="password"
          placeholder="비밀번호를 입력하세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <R.InputLabel>비밀번호 확인</R.InputLabel>
        <R.UserInput
          type="password"
          placeholder="비밀번호를 입력하세요."
          value={password_confirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <br />
        <br />
        <br />
        <br />
        <R.InputLabel>이름</R.InputLabel>
        <R.Name
          type="text"
          placeholder="이름을 입력하세요."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <R.InputLabel>닉네임</R.InputLabel>
        <R.NickName
          type="text"
          placeholder="닉네임을 입력하세요."
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <R.CheckNickName>중복체크</R.CheckNickName>
        <R.InputLabel>생년월일</R.InputLabel>
        <R.SelectBirth
          type="date"
          value={birthdate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <R.InputLabel>이메일</R.InputLabel>
        <R.Email
          type="email"
          placeholder="선택 입력"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <R.InputLabel>전화번호</R.InputLabel>
        <R.PhoneNumber
          type="tel"
          placeholder="전화번호를 입력하세요."
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errorMessage && <R.ErrorMessage>{errorMessage}</R.ErrorMessage>}
        <R.Complete onClick={handleRegister}>가입하기</R.Complete>
      </R.InputContainer>
    </R.Container>
  );
}
