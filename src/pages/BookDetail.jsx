import React from "react";
import * as M from "../styles/styledMusicDetail";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function BookDetail() {
  const navigate = useNavigate();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const bookId = queryParams.get("book_id");

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  const [profile, setProfile] = useState("");
  const [content, setContent] = useState("");
  const [nickname, setNickName] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // API 호출
        const token = localStorage.getItem("token");

        if (!token) {
          alert("로그인 후 이용하세요.");
          return;
        }

        const response = await axios.get(
          `http://127.0.0.1:8000/datas/${id}/books/${bookId}/`,
          {
            headers: { Authorization: `Token ${token}` },
          }
        );
        setTitle(response.data.title);
        setNickName(response.data.nickname);
        setContent(response.data.content);
        setCreatedAt(response.data.createdAt);
        setProfile(response.data.profile);
        setImage(response.data.image);
        setAuthor(response.data.author);
      } catch (error) {
        console.error("도서 추천글 조회 실패 :", error);
      }
    };
    fetchData();
  }, [id, bookId]);

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

  //삭제 버튼
  const deletePost = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("로그인 후 이용하세요.");
        return;
      }

      await axios.delete(`http://127.0.0.1:8000/datas/${id}/books/${bookId}/`, {
        headers: { Authorization: `Token ${token}` },
      });

      alert("도서 추천글이 삭제되었습니다.");
      goBookCommunity();
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("삭제 실패:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

  const goBookCommunity = () => {
    navigate(`/bookcommunity?id=${id}`);
    window.scrollTo(0, 0);
  };

  //수정 페이지로 이동
  const modifyPost = () => {
    navigate(`/bookwrite?id=${id}&book_id=${bookId}`);
  };

  return (
    <>
      <M.Container>
        <M.BackBtn onClick={goBack}></M.BackBtn>
        <M.ProfileImgBlack>
          <img src={`http://127.0.0.1:8000${profile}`} />
        </M.ProfileImgBlack>
        <M.InfoText>{nickname}</M.InfoText>
        <M.PostDate>{createdAt}</M.PostDate>{" "}
        <M.modify onClick={modifyPost}>
          <div id="text">수정</div>
        </M.modify>
        <M.remove onClick={deletePost}>
          <div id="text">삭제</div>
        </M.remove>
        <M.AlbumCover>
          <img src={image} alt="Music Image" />
        </M.AlbumCover>
        <M.MusicInfo>
          <p id={"songTitle"}>{title}</p>
          <br></br>
          <p id={"artist"}>{author}</p>
        </M.MusicInfo>
        <br />
        <M.UserText>{content}</M.UserText>
        {/*하단바*/}
        <M.NavBar>
          {/*검색*/}
          <M.NavBtnContainer>
            <M.NavIcon
              style={{
                marginLeft: "25px",
              }}
            >
              <img src="/images/SearchIcon.svg" onClick={goSearch} />
            </M.NavIcon>
            <M.NavText
              style={{
                marginLeft: "28px",
              }}
            >
              검색
            </M.NavText>
          </M.NavBtnContainer>
          {/*AI 심리 분석*/}
          <M.NavBtnContainer>
            <M.NavIcon>
              <img src="/images/AIIcon.svg" onClick={goAI} />
            </M.NavIcon>
            <M.NavText
              style={{
                fontSize: "11px",
                marginLeft: "20px",
                marginTop: "-3px",
              }}
            >
              AI 심리 분석
            </M.NavText>{" "}
          </M.NavBtnContainer>
          {/*홈*/}
          <M.NavBtnContainer>
            <M.NavIcon
              style={{
                fontSize: "11px",
                marginLeft: "10px",
                marginTop: "-25px",
              }}
            >
              <img src="/images/HomeIcon.svg" onClick={goHome} />
            </M.NavIcon>
          </M.NavBtnContainer>
          {/*내 기록*/}
          <M.NavBtnContainer>
            <M.NavIcon
              style={{
                marginLeft: "63px",
              }}
            >
              <img src="/images/RecordIcon.svg" onClick={goRecord} />
            </M.NavIcon>
            <M.NavText
              style={{
                marginLeft: "60px",
              }}
            >
              내 기록
            </M.NavText>
          </M.NavBtnContainer>
          {/*마이페이지*/}
          <M.NavBtnContainer>
            <M.NavIcon
              style={{
                marginLeft: "45px",
              }}
            >
              <img src="/images/MyPageIcon.svg" onClick={goMyPage} />
            </M.NavIcon>
            <M.NavText>마이페이지</M.NavText>
          </M.NavBtnContainer>
        </M.NavBar>
        {/*하단바*/}
      </M.Container>
    </>
  );
}
