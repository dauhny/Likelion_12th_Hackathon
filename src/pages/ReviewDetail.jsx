import React from "react";
import * as RD from "../styles/styledReviewDetail";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function ReviewDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [viewAt, setViewAt] = useState("");
  const [profile, setProfile] = useState("");
  const [content, setContent] = useState("");
  const [username, setUserName] = useState("");

  const [likeBtn, setLikeBtn] = useState("/images/LikeBtn.svg");
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          alert("로그인 후 이용하세요.");
          return;
        }

        const response = await axios.get(`http://127.0.0.1:8000/posts/${id}`, {
          headers: { Authorization: `Token ${token}` },
        });

        setTitle(response.data.title);
        setUserName(response.data.username);
        setContent(response.data.content);
        setCreatedAt(response.data.createdAt);
        setImg(response.data.img);
        setViewAt(response.data.viewAt);
        setProfile(response.data.profile);
        setLikeCount(response.data.likeCount);
        setIsLiked(response.data.isLiked);

        // 로컬 스토리지에서 좋아요 상태 불러오기
        const storedIsLiked = localStorage.getItem("isLiked_" + id);
        setIsLiked(storedIsLiked === "true" || response.data.isLiked);
        setLikeBtn(
          storedIsLiked === "true" || response.data.isLiked
            ? "/images/LikeBtnOn.svg"
            : "/images/LikeBtn.svg"
        );
      } catch (error) {
        console.error("후기글 조회 실패 :", error);
      }
    };
    fetchData();
  }, [id]);

  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  // 하단바 네비게이션 함수들
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

  // 좋아요 버튼 핸들러
  const handleLike = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("로그인 후 이용하세요.");
        return;
      }

      const url = isLiked
        ? `http://127.0.0.1:8000/likes/${id}/delete/`
        : `http://127.0.0.1:8000/likes/${id}/`;

      const method = isLiked ? "delete" : "post";

      const response = await axios({
        method,
        url,
        headers: { Authorization: `Token ${token}` },
      });

      setIsLiked((prev) => {
        const newLikeStatus = !prev;
        localStorage.setItem("isLiked_" + id, newLikeStatus); // 상태를 로컬 스토리지에 저장
        setLikeCount((prevCount) =>
          newLikeStatus ? prevCount + 1 : prevCount - 1
        );
        setLikeBtn(
          newLikeStatus ? "/images/LikeBtnOn.svg" : "/images/LikeBtn.svg"
        );
        return newLikeStatus;
      });

      alert(isLiked ? "좋아요가 취소되었습니다." : "좋아요를 남겼습니다.");
    } catch (error) {
      console.error("좋아요 실패:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

  return (
    <>
      <RD.Container>
        <RD.BackBtn onClick={goBack}></RD.BackBtn>
        <RD.Item>
          <RD.IntroText>커뮤니티</RD.IntroText>
          <RD.ReviewContainer>
            <RD.profile>
              <img src={`http://127.0.0.1:8000${profile}`} alt="profile" />
              <div id="name">{username}</div>
              <div id="time">{createdAt}</div>
            </RD.profile>
            <RD.firstBox>
              <RD.date>
                <div id="text">{viewAt}</div>
              </RD.date>
              <RD.like onClick={handleLike}>
                <img src={likeBtn} alt="like" />
                <div id="count">{likeCount}</div>
              </RD.like>
              <RD.PinkBlur></RD.PinkBlur>
            </RD.firstBox>
            <RD.title>{title}</RD.title>
            <RD.img>
              <img src={img} alt="exhibition" />
            </RD.img>
            <RD.contentContainer>
              <div id="content">{content}</div>
            </RD.contentContainer>
          </RD.ReviewContainer>
          <RD.PinkBlur2></RD.PinkBlur2>
          {/* 하단바 */}
          <RD.NavBar>
            {/* 검색 */}
            <RD.NavBtnContainer>
              <RD.NavIcon
                style={{
                  marginLeft: "25px",
                }}
              >
                <img src="/images/SearchIcon.svg" onClick={goSearch} />
              </RD.NavIcon>
              <RD.NavText
                style={{
                  marginLeft: "28px",
                }}
              >
                검색
              </RD.NavText>
            </RD.NavBtnContainer>
            {/* AI 심리 분석 */}
            <RD.NavBtnContainer>
              <RD.NavIcon>
                <img src="/images/AIIcon.svg" onClick={goAI} />
              </RD.NavIcon>
              <RD.NavText
                style={{
                  fontSize: "11px",
                  marginLeft: "20px",
                  marginTop: "-3px",
                }}
              >
                AI 심리 분석
              </RD.NavText>
            </RD.NavBtnContainer>
            {/* 홈 */}
            <RD.NavBtnContainer>
              <RD.NavIcon
                style={{
                  fontSize: "11px",
                  marginLeft: "10px",
                  marginTop: "-25px",
                }}
              >
                <img src="/images/HomeIcon.svg" onClick={goHome} />
              </RD.NavIcon>
            </RD.NavBtnContainer>
            {/* 내 기록 */}
            <RD.NavBtnContainer>
              <RD.NavIcon
                style={{
                  marginLeft: "63px",
                  color: "#A259FF",
                }}
              >
                <img src="/images/RecordIcon.svg" onClick={goRecord} />
              </RD.NavIcon>
              <RD.NavText
                style={{
                  marginLeft: "60px",
                  color: "#A259FF",
                }}
              >
                내 기록
              </RD.NavText>
            </RD.NavBtnContainer>
            {/* 마이페이지 */}
            <RD.NavBtnContainer>
              <RD.NavIcon
                style={{
                  marginLeft: "45px",
                }}
              >
                <img src="/images/MyPageIcon.svg" onClick={goMyPage} />
              </RD.NavIcon>
              <RD.NavText>마이페이지</RD.NavText>
            </RD.NavBtnContainer>
          </RD.NavBar>
          {/* 하단바 끝 */}
        </RD.Item>
      </RD.Container>
    </>
  );
}
