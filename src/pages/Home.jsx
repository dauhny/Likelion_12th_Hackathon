import React from "react";
import * as H from "../styles/styledHome";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function Home() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1); // 현재 페이지
  const itemsCountPerPage = 3; // 페이지당 항목 수
  const newItemCountPerPage = 1;

  const goContentIntro = (id) => {
    navigate(`/contentintro?id=${id}`);
    window.scrollTo(0, 0);
  };

  const goReviewDetail = (id) => {
    navigate(`/reviewdetail?id=${id}`);
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
  const [review, setReview] = useState([]);
  const [newcontent, setNewContent] = useState([]);

  //최신 전시
  useEffect(() => {
    const fetchData = async () => {
      try {
        // API 호출
        const response = await axios.get(`http://127.0.0.1:8000/data/`);
        const allData = response.data;

        const sortedData = allData.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );

        const startIndex = (page - 1) * newItemCountPerPage;
        const endIndex = startIndex + newItemCountPerPage;
        const paginatedData = sortedData.slice(startIndex, endIndex);

        setNewContent(sortedData[0]);
      } catch (error) {
        console.error("최신 전시 조회 실패 :", error);
      }
    };
    fetchData(); // useEffect에서 fetchData 함수 호출
  }, []);

  //HOT 전시
  useEffect(() => {
    const fetchData = async () => {
      try {
        // API 호출
        const response = await axios.get(`http://127.0.0.1:8000/data/`);
        const allData = response.data;
        const sortedData = allData.sort((a, b) => b.scrapCount - a.scrapCount);

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

  //hot 후기글
  useEffect(() => {
    const fetchData = async () => {
      try {
        // API 호출
        const token = localStorage.getItem("token");

        if (!token) {
          alert("로그인 후 이용하세요.");
          return;
        }

        const response = await axios.get(`http://127.0.0.1:8000/posts/`, {
          headers: { Authorization: `Token ${token}` },
        });

        const allData = response.data;
        const sortedData = allData.sort((a, b) => b.likeCount - a.likeCount);

        //총 데이터 개수 추정
        const totalItems = sortedData.length;
        const startIndex = (page - 1) * itemsCountPerPage;
        const endIndex = startIndex + itemsCountPerPage;
        const paginatedData = allData.slice(startIndex, endIndex);

        setReview(paginatedData); //현재 페이지 데이터 설정
      } catch (error) {
        console.error("후기글 조회 실패 :", error);
      }
    };
    fetchData(); // useEffect에서 fetchData 함수 호출
  }, []);

  return (
    <>
      <H.Container>
        <H.Item>
          <br />
          {newcontent ? (
            <H.NewExhibitContainer>
              <H.InfoTextPurple>New</H.InfoTextPurple>
              <br />
              <H.NewExhibit onClick={() => goContentIntro(newcontent.id)}>
                <img src={newcontent.image} />
              </H.NewExhibit>{" "}
            </H.NewExhibitContainer>
          ) : (
            <p>최신 전시가 없습니다.</p>
          )}
          <H.InfoText>HOT 후기글</H.InfoText>
          <H.ReviewBtn onClick={goReview}>
            더보기 <img src="images/ExpandBtn.svg" />
          </H.ReviewBtn>{" "}
          {review.map((e) => (
            <H.ReviewBox key={e.id} onClick={() => goReviewDetail(e.id)}>
              <H.ProfileImg>
                <img src={`http://127.0.0.1:8000${e.profile}`} alt="profile" />
              </H.ProfileImg>
              <H.ReviewName>{e.nickname}</H.ReviewName>
              <H.ReviewDate>{e.createdAt2}</H.ReviewDate>
              <H.ReviewTitle>{e.title}</H.ReviewTitle>
              <H.ReviewContent>{e.content}</H.ReviewContent>
              <H.ReviewImg>
                <img src={e.img} alt="Review Image" />
              </H.ReviewImg>
              <H.LikeIcon />
              <H.LikeCnt>{e.likeCount}</H.LikeCnt>
            </H.ReviewBox>
          ))}
          \<H.InfoText>HOT 전시</H.InfoText>
          <H.ReviewBtn onClick={goSearch}>
            더보기 <img src="images/ExpandBtn.svg" />
          </H.ReviewBtn>
          {content.map((e) => (
            <H.ExhibitPoster key={e.id} onClick={() => goContentIntro(e.id)}>
              <img src={e.image} />
              <H.ExhibitInfo key={e.id} onClick={() => goContentIntro(e.id)}>
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
