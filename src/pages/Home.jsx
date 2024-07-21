import React from "react";
import * as H from "../styles/styledHome";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function Home() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1); // 현재 페이지
  const itemsCountPerPage = 3; // 페이지당 항목 수

  const goContentIntro = (id) => {
    navigate(`/contentintro?id=${id}`);
    window.scrollTo(0, 0);
  };

  const goReview = () => {
    navigate(`/review`);
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

  const [content, setContent] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // API 호출
        const response = await axios.get(`http://127.0.0.1:8000/data/`);
        const allData = response.data;
        setContent(response.data); // API 응답으로 받은 데이터를 state에 저장   const allData = response.data;

        //총 데이터 개수 추정
        const totalItems = allData.length;
        const startIndex = (page - 1) * itemsCountPerPage;
        const endIndex = startIndex + itemsCountPerPage;
        const paginatedData = allData.slice(startIndex, endIndex);

        setContent(paginatedData); //현재 페이지 데이터 설정
      } catch (error) {
        console.error("전시 상세 조회 실패 :", error);
      }
    };
    fetchData(); // useEffect에서 fetchData 함수 호출
  }, []);

  return (
    <>
      <H.Container>
        <H.Item>
          <br />
          <H.InfoTextPurple>New</H.InfoTextPurple>
          <br />
          <H.NewExhibit>
            <img src="/images/ReHersier.svg" />
          </H.NewExhibit>
          <H.InfoText>HOT 후기글</H.InfoText>
          <H.ReviewBtn onClick={goReview}>
            더보기 <img src="images/ExpandBtn.svg" />
          </H.ReviewBtn>
          <H.ReviewBox>
            <H.ProfileImg />
            <H.ReviewName>익명1</H.ReviewName>
            <H.ReviewDate>07/17</H.ReviewDate>
            <H.ReviewTitle>이 전시 꼭 보세요</H.ReviewTitle>
            <H.ReviewContent>힙노시스 전시 진짜 재밌네요...</H.ReviewContent>
            <H.LikeIcon />
            <H.LikeCnt>12</H.LikeCnt>
          </H.ReviewBox>
          <H.ReviewBox>
            <H.ProfileImg />
            <H.ReviewName>익명2</H.ReviewName>
            <H.ReviewDate>07/17</H.ReviewDate>
            <H.ReviewTitle>포에버리즘 다녀오신 분?</H.ReviewTitle>
            <H.ReviewContent>굿즈 어떤 거 사셨나요??</H.ReviewContent>
            <H.LikeIcon />
            <H.LikeCnt>12</H.LikeCnt>
          </H.ReviewBox>
          <H.InfoText>HOT 전시</H.InfoText>
          <H.ReviewBtn onClick={goSearch}>
            더보기 <img src="images/ExpandBtn.svg" />
          </H.ReviewBtn>
          {content.map((e) => (
            <H.ExhibitPoster key={e.id} onClick={() => goContentIntro(e.id)}>
              <img src={e.image} />
              <H.ExhibitInfo onClick={() => goContentIntro(e.id)}>
                <p id={"InfoP"}>
                  {e.title}
                  <br />
                  {e.period}
                  <br />
                  {e.place}
                </p>
              </H.ExhibitInfo>
              <br />
            </H.ExhibitPoster>
          ))}{" "}
        </H.Item>
        <H.PurpleBlur></H.PurpleBlur>

        {/*하단바*/}
        <H.NavBar>
          {/*검색*/}
          <H.NavBtnContainer>
            <H.NavIcon
              style={{
                marginLeft: "25px",
              }}
            >
              <img src="/images/SearchIcon.svg" onClick={goSearch} />
            </H.NavIcon>
            <H.NavText
              style={{
                marginLeft: "28px",
              }}
            >
              검색
            </H.NavText>
          </H.NavBtnContainer>
          {/*AI 심리 분석*/}
          <H.NavBtnContainer>
            <H.NavIcon>
              <img src="/images/AIIcon.svg" onClick={goAI} />
            </H.NavIcon>
            <H.NavText
              style={{
                fontSize: "11px",
                marginLeft: "20px",
                marginTop: "-3px",
              }}
            >
              AI 심리 분석
            </H.NavText>
          </H.NavBtnContainer>
          {/*홈*/}
          <H.NavBtnContainer>
            <H.NavIcon
              style={{
                fontSize: "11px",
                marginLeft: "10px",
                marginTop: "-25px",
              }}
            >
              <img src="/images/HomeIcon.svg" onClick={goHome} />
            </H.NavIcon>
          </H.NavBtnContainer>
          {/*내 기록*/}
          <H.NavBtnContainer>
            <H.NavIcon
              style={{
                marginLeft: "63px",
              }}
            >
              <img src="/images/RecordIcon.svg" onClick={goRecord} />
            </H.NavIcon>
            <H.NavText
              style={{
                marginLeft: "60px",
              }}
            >
              내 기록
            </H.NavText>
          </H.NavBtnContainer>
          {/*마이페이지*/}
          <H.NavBtnContainer>
            <H.NavIcon
              style={{
                marginLeft: "45px",
              }}
            >
              <img src="/images/MyPageIcon.svg" onClick={goMyPage} />
            </H.NavIcon>
            <H.NavText>마이페이지</H.NavText>
          </H.NavBtnContainer>
        </H.NavBar>
        {/*하단바*/}
      </H.Container>
    </>
  );
}
