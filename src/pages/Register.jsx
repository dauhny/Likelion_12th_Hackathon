import React from "react";
import * as R from "../styles/styledRegister";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [birthdate, setBirthDate] = useState("");

  const goWelcome = () => {
    navigate(`/welcome`);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/user/", {
        username,
        password,
        email,
        nickname,
        phoneNumber,
        name,
        birthdate,
      });
      console.log("회원가입 성공:", response.data);
      goWelcome(); // 성공적으로 가입된 후 홈으로 이동
    } catch (error) {
      console.error("에러입니다", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

  return (
    <>
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
          ></R.UserInputShort>
          <R.CheckId>중복체크</R.CheckId>
          <br></br>
          <R.InputLabel>비밀번호</R.InputLabel>
          <R.UserInput
            type="password"
            placeholder="비밀번호를 입력하세요."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></R.UserInput>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <R.InputLabel>이름</R.InputLabel>
          <R.Name
            type="text"
            placeholder="이름을 입력하세요."
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></R.Name>
          <br></br>
          <R.InputLabel>닉네임</R.InputLabel>
          <R.NickName
            type="text"
            placeholder="닉네임을 입력하세요."
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          ></R.NickName>
          <R.CheckNickName>중복체크</R.CheckNickName>
          <R.InputLabel>생년월일</R.InputLabel>
          <R.SelectBirth
            type="date"
            value={birthdate}
            onChange={(e) => setBirthDate(e.target.value)}
          ></R.SelectBirth>
          <R.InputLabel>이메일</R.InputLabel>
          <R.Email
            type="email"
            placeholder="선택 입력"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></R.Email>
          <R.InputLabel>전화번호</R.InputLabel>
          <R.PhoneNumber
            type="tel"
            placeholder="전화번호를 입력하세요."
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></R.PhoneNumber>
          <R.Complete onClick={goWelcome}>가입하기</R.Complete>
        </R.InputContainer>
      </R.Container>
    </>
  );
}
