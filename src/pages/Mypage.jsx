import React from "react";
import * as MP from "../styles/styledMypage";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function Mypage() {
  const navigate = useNavigate();
  const [profileImg, setProfileImg] = useState("");
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState([]);
  const [totalItems, setTotalItems] = useState(0); // 전체 데이터 수

  const [page, setPage] = useState(1); // 현재 페이지

  useEffect(() => {
    const fetchData = async () => {
      try {
        // API 호출
        const token = localStorage.getItem("token");

        if (!token) {
          alert("로그인 후 이용하세요.");
          return;
        }

        const response = await axios.get(`http://127.0.0.1:8000/scraps/all/`, {
          headers: { Authorization: `Token ${token}` },
        });

        const allData = response.data;
        setContent(response.data);

        setContent(allData); //현재 페이지 데이터 설정
      } catch (error) {
        console.error("스크랩한 전시 조회 실패 :", error);
      }
    };
    fetchData(); // useEffect에서 fetchData 함수 호출
  }, [page]);

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
          {content.map((e) => (
            <MP.ScrapContainer key={e.id}>
              <MP.ImgBox onClick={() => goContentIntro(e.data)}>
                <img src={e.image} alt="ExhibitPoster"></img>
              </MP.ImgBox>
              <MP.ExhibitionIntroduce onClick={() => goContentIntro(e.data)}>
                <div id="Title">{e.title}</div>
                <div id="Date">{e.period}</div>
              </MP.ExhibitionIntroduce>
            </MP.ScrapContainer>
          ))}
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
