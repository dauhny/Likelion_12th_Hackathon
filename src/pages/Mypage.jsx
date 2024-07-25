import React from "react";
import * as MP from "../styles/styledMypage";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function Mypage() {
  const navigate = useNavigate();
  const [profileImg, setProfileImg] = useState("");
  const [nickname, setNickname] = useState("");

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
      } catch (error) {
        console.error("프로필 실패 :", error);
      }
    };
    fetchData();
  }, []);

  //전시 상세 조회

  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  const goMypageRevise = () => {
    navigate(`/mypagerevise`);
  };

  const goContentIntro = (id) => {
    navigate(`/contentintro?id=${id}`);
    window.scrollTo(0, 0);
  };

  const goLogin = () => {
    navigate(`/login`);
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
      <MP.Container>
        <MP.BackBtn onClick={goBack}></MP.BackBtn>
        <MP.PageTitle>마이페이지</MP.PageTitle>
        <MP.Item>
          <MP.profile>
            <div
              id="background"
              style={{
                width: "75px",
                height: "75px",
                fill: "#3D3A3A",
              }}
            />
            <img src={profileImg} alt="profile"></img>
          </MP.profile>
          <MP.name>{nickname}</MP.name>
          <MP.edit onClick={goMypageRevise}>
            <div id="text1">프로필 편집</div>
          </MP.edit>
          <MP.logout onClick={goLogin}>
            <div id="text2">로그아웃</div>
          </MP.logout>
          <MP.scrap>
            <img src="/images/Scrap.svg" alt="scrap"></img>
            <div id="ScrapText">스크랩한 전시</div>
          </MP.scrap>
          <MP.ImgBox onClick={goContentIntro}>
            <img src="/images/ForeverismIntro.svg" alt="ExhibitPoster"></img>
          </MP.ImgBox>
          <MP.ExhibitionIntroduce onClick={goContentIntro}>
            <div id="Title">포에버리즘 : 우리를 세상의 끝으로 </div>
            <div id="Date">2024/07/25</div>
            <MP.Trash id="remove">
              <img src="/images/Trash.svg" alt="remove"></img>
            </MP.Trash>
          </MP.ExhibitionIntroduce>
          {/*하단바*/}
          <MP.NavBar>
            {/*검색*/}
            <MP.NavBtnContainer>
              <MP.NavIcon
                style={{
                  marginLeft: "25px",
                }}
              >
                <img src="/images/SearchIcon.svg" onClick={goSearch} />
              </MP.NavIcon>
              <MP.NavText
                style={{
                  marginLeft: "28px",
                }}
              >
                검색
              </MP.NavText>
            </MP.NavBtnContainer>
            {/*AI 심리 분석*/}
            <MP.NavBtnContainer>
              <MP.NavIcon>
                <img src="/images/AIIcon.svg" onClick={goAI} />
              </MP.NavIcon>
              <MP.NavText
                style={{
                  fontSize: "11px",
                  marginLeft: "20px",
                  marginTop: "-3px",
                }}
              >
                AI 심리 분석
              </MP.NavText>{" "}
            </MP.NavBtnContainer>
            {/*홈*/}
            <MP.NavBtnContainer>
              <MP.NavIcon
                style={{
                  fontSize: "11px",
                  marginLeft: "10px",
                  marginTop: "-25px",
                }}
              >
                <img src="/images/HomeIcon.svg" onClick={goHome} />
              </MP.NavIcon>
            </MP.NavBtnContainer>
            {/*내 기록*/}
            <MP.NavBtnContainer>
              <MP.NavIcon
                style={{
                  marginLeft: "63px",
                }}
              >
                <img src="/images/RecordIcon.svg" onClick={goRecord} />
              </MP.NavIcon>
              <MP.NavText
                style={{
                  marginLeft: "60px",
                }}
              >
                내 기록
              </MP.NavText>
            </MP.NavBtnContainer>
            {/*마이페이지*/}
            <MP.NavBtnContainer>
              <MP.NavIcon
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
              </MP.NavIcon>
              <MP.NavText
                style={{
                  color: "#A259FF",
                }}
              >
                마이페이지
              </MP.NavText>
            </MP.NavBtnContainer>
          </MP.NavBar>
          {/*하단바*/}
        </MP.Item>
      </MP.Container>
    </>
  );
}
