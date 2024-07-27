import React from "react";
import * as MRD from "../styles/styledMyRecordDetail";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function MyRecordDetail() {
  const navigate = useNavigate();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [viewAt, setViewAt] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // API 호출
        const token = localStorage.getItem("token");

        if (!token) {
          alert("로그인 후 이용하세요.");
          return;
        }

        const response = await axios.get(`http://127.0.0.1:8000/posts/${id}`, {
          headers: { Authorization: `Token ${token}` },
        });
        setTitle(response.data.title);
        setContent(response.data.content);
        setCreatedAt(response.data.createdAt);
        setImg(response.data.img);
        setViewAt(response.data.viewAt);
      } catch (error) {
        console.error("후기글 조회 실패 :", error);
      }
    };
    fetchData(); // useEffect에서 fetchData 함수 호출
  }, [id]);

  //삭제 버튼
  const deletePost = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("로그인 후 이용하세요.");
        return;
      }

      await axios.delete(`http://127.0.0.1:8000/posts/${id}/`, {
        headers: { Authorization: `Token ${token}` },
      });

      alert("기록이 삭제되었습니다.");
      navigate("/record");
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("삭제 실패:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

  //수정 페이지로 이동
  const modifyPost = () => {
    navigate(`/recordwrite?id=${id}`);
  };

  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  const goReviewCommunity = () => {
    navigate(`/reviewcommunity`);
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
      <MRD.Container>
        <MRD.BackBtn onClick={goBack}></MRD.BackBtn>
        <MRD.PageTitle>나의 기록</MRD.PageTitle>
        <MRD.Item>
          <MRD.firstBox>
            <MRD.date>
              <div id="text">{viewAt}</div>
            </MRD.date>
            <MRD.modify onClick={modifyPost}>
              <div id="text">수정</div>
            </MRD.modify>
            <MRD.remove onClick={deletePost}>
              <div id="text">삭제</div>
            </MRD.remove>
          </MRD.firstBox>
          <MRD.title>{title}</MRD.title>
          <MRD.img>
            <img src={img ? img : "/images/LikeBtn.svg"} alt="exhibition"></img>
          </MRD.img>
          <MRD.PinkBlur></MRD.PinkBlur>
          <MRD.content>
            <div id="text">{content}</div>
          </MRD.content>
          <MRD.help>
            <div id="text1">어려우신가요?</div>
            <div id="text2">다른 사람의 기록을 둘러보세요!</div>
          </MRD.help>
          <MRD.idea>
            <img src="/images/Idea.svg" alt="idea"></img>
          </MRD.idea>
          <MRD.ideation onClick={goReviewCommunity}>
            <div id="text">아이데이션</div>
            <div id="arrow">
              <img src="/images/IdeationArrow.svg" />
            </div>
          </MRD.ideation>
          <MRD.PinkBlur2></MRD.PinkBlur2>
          {/*하단바*/}
          <MRD.NavBar>
            {/*검색*/}
            <MRD.NavBtnContainer>
              <MRD.NavIcon
                style={{
                  marginLeft: "25px",
                }}
              >
                <img src="/images/SearchIcon.svg" onClick={goSearch} />
              </MRD.NavIcon>
              <MRD.NavText
                style={{
                  marginLeft: "28px",
                }}
              >
                검색
              </MRD.NavText>
            </MRD.NavBtnContainer>
            {/*AI 심리 분석*/}
            <MRD.NavBtnContainer>
              <MRD.NavIcon>
                <img src="/images/AIIcon.svg" onClick={goAI} />
              </MRD.NavIcon>
              <MRD.NavText
                style={{
                  fontSize: "11px",
                  marginLeft: "20px",
                  marginTop: "-3px",
                }}
              >
                AI 심리 분석
              </MRD.NavText>{" "}
            </MRD.NavBtnContainer>
            {/*홈*/}
            <MRD.NavBtnContainer>
              <MRD.NavIcon
                style={{
                  fontSize: "11px",
                  marginLeft: "10px",
                  marginTop: "-25px",
                }}
              >
                <img src="/images/HomeIcon.svg" onClick={goHome} />
              </MRD.NavIcon>
            </MRD.NavBtnContainer>
            {/*내 기록*/}
            <MRD.NavBtnContainer>
              <MRD.NavIcon
                style={{
                  marginLeft: "63px",
                  color: "#A259FF",
                }}
              >
                <img src="/images/RecordIcon.svg" onClick={goRecord} />
              </MRD.NavIcon>
              <MRD.NavText
                style={{
                  marginLeft: "60px",
                  color: "#A259FF",
                }}
              >
                내 기록
              </MRD.NavText>
            </MRD.NavBtnContainer>
            {/*마이페이지*/}
            <MRD.NavBtnContainer>
              <MRD.NavIcon
                style={{
                  marginLeft: "45px",
                }}
              >
                <img
                  src="/images/MyPageIcon.svg"
                  onClick={goMyPage}
                  style={{}}
                />
              </MRD.NavIcon>
              <MRD.NavText style={{}}>마이페이지</MRD.NavText>
            </MRD.NavBtnContainer>
          </MRD.NavBar>
          {/*하단바*/}
        </MRD.Item>
      </MRD.Container>
    </>
  );
}
