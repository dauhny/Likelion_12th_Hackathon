import React from "react";
import * as MPR from "../styles/styledMypageRevise";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

export function MypageRevise() {
  const navigate = useNavigate();
  const [profileImg, setProfileImg] = useState("");
  const [nickname, setNickname] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  //프로필 불러오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const usercode = localStorage.getItem("usercode");

        if (!token) {
          alert("로그인 후 이용하세요.");
          return;
        }

        const userResponse = await axios.get(
          `http://127.0.0.1:8000/user/${usercode}`,
          {
            headers: { Authorization: `Token ${token}` },
          }
        );
        setProfileImg(userResponse.data.profile);
        setNickname(userResponse.data.nickname);
        setName(userResponse.data.name);
        setBirthDate(userResponse.data.birthdate);
        setEmail(userResponse.data.email);
        setPhone(userResponse.data.phone);
        setUsername(userResponse.data.username);
      } catch (error) {
        console.error("프로필 조회 실패 :", error);
      }
    };
    fetchData();
  }, []);

  // 이미지 업로드 input의 onChange

  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();

  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  //하단바
  const goSearch = () => {
    navigate(`/search`);
    window.scrollTo(0, 0);
  };

  const goAI = () => {
    navigate(`/ai`);
    window.scrollTo(0, 0);
  };

  const goHome = () => {
    navigate(`/home`);
    window.scrollTo(0, 0);
  };

  const goRecord = () => {
    navigate(`/record`);
    window.scrollTo(0, 0);
  };

  const goMyPage = () => {
    navigate(`/mypage`);
    window.scrollTo(0, 0);
  };

  //하단바 끝

  return (
    <>
      <MPR.Container>
        <MPR.BackBtn onClick={goBack}></MPR.BackBtn>
        <MPR.PageTitle>프로필 편집</MPR.PageTitle>
        <MPR.Item>
          <MPR.profile>
            <div
              id="background"
              style={{
                width: "75px",
                height: "75px",
                fill: "#3D3A3A",
              }}
            />
            <img src={imgFile ? imgFile : profileImg} alt="profile"></img>
            <div
              id="backgroundBlack"
              style={{
                width: "26px",
                height: "26px",
                background: "#121212",
                borderRadius: "10px 0px 10px 10px",
                marginLeft: "160px",
                marginTop: "-21px",
                position: "relative",
                zIndex: "3",
              }}
            />
            <div
              id="backgroundPurple"
              style={{
                width: "21px",
                height: "21px",
                background: "#121212",
                borderRadius: "10px 0px 10px 10px",
                marginLeft: "163px",
                marginTop: "-23px",
                position: "relative",
                zIndex: "3",
                border: "1px solid #A259FF",
              }}
            />
            <MPR.PostImgLabel htmlFor="profileImg">
              <img
                src="/images/ProfileEdit.svg"
                alt="profile-edit"
                style={{
                  width: "11px",
                  height: "11px",
                  marginLeft: "169px",
                  marginTop: "-18px",
                  zIndex: "3",
                  position: "absolute",
                  cursor: "pointer",
                }}
              />
            </MPR.PostImgLabel>
            <MPR.PostImgInput
              type="file"
              accept="image/*"
              onChange={saveImgFile}
              ref={imgRef}
              id="profileImg"
            />
          </MPR.profile>
          <MPR.name>{nickname}</MPR.name>
          <MPR.informationText>
            정보
            <img src="/images/WhiteArrow.svg" alt="profile"></img>
          </MPR.informationText>
          <MPR.InputContainer>
            <MPR.InputLabel>아이디</MPR.InputLabel>
            <MPR.UserInputShort
              type="text"
              placeholder={username}
            ></MPR.UserInputShort>
            <MPR.InputLabel>이름</MPR.InputLabel>
            <MPR.Name type="text" placeholder={name}></MPR.Name>
            <MPR.InputLabel>생년월일</MPR.InputLabel>
            <MPR.SelectBirth
              type="text"
              placeholder={birthdate}
            ></MPR.SelectBirth>
            <MPR.InputLabel>이메일</MPR.InputLabel>
            <MPR.Email type="email" placeholder={email}></MPR.Email>
          </MPR.InputContainer>
          <MPR.changeText>
            변경
            <img src="/images/WhiteArrow.svg" alt="profile"></img>
            <div id="background" />
          </MPR.changeText>
          <MPR.InputContainer>
            <MPR.InputLabel>닉네임</MPR.InputLabel>
            <MPR.NickName
              type="text"
              placeholder="닉네임을 입력하세요."
            ></MPR.NickName>
            <MPR.InputLabel>휴대번호</MPR.InputLabel>
            <MPR.PhoneNumber
              type="tel"
              placeholder="전화번호를 입력하세요."
            ></MPR.PhoneNumber>
            <MPR.Complete onClick={goMyPage}>변경사항 저장하기</MPR.Complete>
          </MPR.InputContainer>

          {/*하단바*/}
          <MPR.NavBar>
            {/*검색*/}
            <MPR.NavBtnContainer>
              <MPR.NavIcon
                style={{
                  marginLeft: "25px",
                }}
              >
                <img src="/images/SearchIcon.svg" onClick={goSearch} />
              </MPR.NavIcon>
              <MPR.NavText
                style={{
                  marginLeft: "28px",
                }}
              >
                검색
              </MPR.NavText>
            </MPR.NavBtnContainer>
            {/*AI 심리 분석*/}
            <MPR.NavBtnContainer>
              <MPR.NavIcon>
                <img src="/images/AIIcon.svg" onClick={goAI} />
              </MPR.NavIcon>
              <MPR.NavText
                style={{
                  fontSize: "11px",
                  marginLeft: "20px",
                  marginTop: "-3px",
                }}
              >
                AI 심리 분석
              </MPR.NavText>{" "}
            </MPR.NavBtnContainer>
            {/*홈*/}
            <MPR.NavBtnContainer>
              <MPR.NavIcon
                style={{
                  fontSize: "11px",
                  marginLeft: "10px",
                  marginTop: "-25px",
                }}
              >
                <img src="/images/HomeIcon.svg" onClick={goHome} />
              </MPR.NavIcon>
            </MPR.NavBtnContainer>
            {/*내 기록*/}
            <MPR.NavBtnContainer>
              <MPR.NavIcon
                style={{
                  marginLeft: "63px",
                }}
              >
                <img src="/images/RecordIcon.svg" onClick={goRecord} />
              </MPR.NavIcon>
              <MPR.NavText
                style={{
                  marginLeft: "60px",
                }}
              >
                내 기록
              </MPR.NavText>
            </MPR.NavBtnContainer>
            {/*마이페이지*/}
            <MPR.NavBtnContainer>
              <MPR.NavIcon
                style={{
                  marginLeft: "45px",
                  color: "#A259FF",
                }}
              >
                <img
                  src="/images/MyPageIcon.svg"
                  onClick={goMyPage}
                  style={{
                    color: "#A259FF",
                  }}
                />
              </MPR.NavIcon>
              <MPR.NavText
                style={{
                  color: "#A259FF",
                }}
              >
                마이페이지
              </MPR.NavText>
            </MPR.NavBtnContainer>
          </MPR.NavBar>
          {/*하단바*/}
        </MPR.Item>
      </MPR.Container>
    </>
  );
}
