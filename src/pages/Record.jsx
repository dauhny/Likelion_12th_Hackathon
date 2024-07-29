import React from "react";
import * as R from "../styles/styledRecord";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "react-js-pagination";
import { motion } from "framer-motion";

export function Record() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1); // 현재 페이지
  const itemsCountPerPage = 5; // 페이지당 항목 수
  const [totalItems, setTotalItems] = useState(0); // 전체 데이터 수

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const [review, setReview] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // API 호출
        const token = localStorage.getItem("token");

        if (!token) {
          alert("로그인 후 이용하세요.");
          return;
        }

        const response = await axios.get(`http://127.0.0.1:8000/myposts/`, {
          headers: { Authorization: `Token ${token}` },
        });

        const allData = response.data;
        setReview(response.data);

        //총 데이터 개수 추정
        const totalItems = allData.length;
        const startIndex = (page - 1) * itemsCountPerPage;
        const endIndex = startIndex + itemsCountPerPage;
        const paginatedData = allData.slice(startIndex, endIndex);

        setReview(paginatedData); //현재 페이지 데이터 설정
        setTotalItems(totalItems); //총 데이터 개수 설정
      } catch (error) {
        console.error("후기글 조회 실패 :", error);
      }
    };
    fetchData(); // useEffect에서 fetchData 함수 호출
  }, [page]);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  const goRecordWrite = () => {
    navigate(`/recordwrite`);
  };

  const goMyRecordDetail = (id) => {
    navigate(`/myrecorddetail?id=${id}`);
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
      <R.Container>
        <R.BackBtn onClick={goBack}></R.BackBtn>{" "}
        <R.PageTitle>나의 기록</R.PageTitle>{" "}
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          transition={{ duration: 0.3 }}
          style={{ width: "100%", height: "100%" }} // 컨테이너 전체를 사용하는 애니메이션
        >
          <R.Item>
            <R.record onClick={goRecordWrite}>
              <div id="text">기록하기</div>
            </R.record>
            {review.map((e) => (
              <R.ReviewContainer onClick={() => goMyRecordDetail(e.id)}>
                <R.ImgBox onClick={() => goMyRecordDetail(e.id)}>
                  <img src={e.img} alt="ExhibitPoster"></img>
                </R.ImgBox>
                <R.ExhibitionIntroduce onClick={() => goMyRecordDetail(e.id)}>
                  <div id="Title">{e.title}</div>
                  <div id="Date">{e.createdAt2}</div>
                  <R.Trash id="remove">
                    <img src={"/images/Trash.svg"} alt="remove"></img>
                  </R.Trash>
                </R.ExhibitionIntroduce>
              </R.ReviewContainer>
            ))}
            <R.PinkBlur></R.PinkBlur>{" "}
          </R.Item>{" "}
        </motion.div>
        {/*하단바*/}
        <R.NavBar>
          {/*검색*/}
          <R.NavBtnContainer>
            <R.NavIcon
              style={{
                marginLeft: "25px",
              }}
            >
              <img src="/images/SearchIcon.svg" onClick={goSearch} />
            </R.NavIcon>
            <R.NavText
              style={{
                marginLeft: "28px",
              }}
            >
              검색
            </R.NavText>
          </R.NavBtnContainer>
          {/*AI 심리 분석*/}
          <R.NavBtnContainer>
            <R.NavIcon>
              <img src="/images/AIIcon.svg" onClick={goAI} />
            </R.NavIcon>
            <R.NavText
              style={{
                fontSize: "11px",
                marginLeft: "20px",
                marginTop: "-3px",
              }}
            >
              AI 심리 분석
            </R.NavText>{" "}
          </R.NavBtnContainer>
          {/*홈*/}
          <R.NavBtnContainer>
            <R.NavIcon
              style={{
                fontSize: "11px",
                marginLeft: "10px",
                marginTop: "-25px",
              }}
            >
              <img src="/images/HomeIcon.svg" onClick={goHome} />
            </R.NavIcon>
          </R.NavBtnContainer>
          {/*내 기록*/}
          <R.NavBtnContainer>
            <R.NavIcon
              style={{
                marginLeft: "63px",
              }}
            >
              <img src="/images/RecordIcon.svg" onClick={goRecord} />
            </R.NavIcon>
            <R.NavText
              style={{
                marginLeft: "60px",
              }}
            >
              내 기록
            </R.NavText>
          </R.NavBtnContainer>
          {/*마이페이지*/}
          <R.NavBtnContainer>
            <R.NavIcon
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
            </R.NavIcon>
            <R.NavText
              style={{
                color: "#A259FF",
              }}
            >
              마이페이지
            </R.NavText>
          </R.NavBtnContainer>
        </R.NavBar>
        {/*하단바*/}
      </R.Container>
    </>
  );
}

const pageTransition = {
  initial: { x: "100%" }, // 오른쪽에서 시작
  animate: { x: "0%" }, // 가운데로 이동
  exit: { x: "-100%" }, // 왼쪽으로 이동
};
