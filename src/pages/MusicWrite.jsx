import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import * as W from "../styles/styledMusicWrite";

export function MusicWrite() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const musicId = queryParams.get("music_id");

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();

  // 기존 데이터 불러오기
  useEffect(() => {
    const fetchData = async () => {
      if (musicId) {
        try {
          const token = localStorage.getItem("token");

          if (!token) {
            alert("로그인 후 이용하세요.");
            return;
          }

          const response = await axios.get(
            `http://127.0.0.1:8000/datas/${id}/musics/${musicId}/`,
            {
              headers: { Authorization: `Token ${token}` },
            }
          );

          setTitle(response.data.title);
          setAuthor(response.data.author);
          setContent(response.data.content);
          setImgFile(response.data.image);
        } catch (error) {
          console.error("기존 데이터 불러오기 실패:", error);
        }
      }
    };

    fetchData();
  }, [id, musicId]);

  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  const goMusicCommunity = () => {
    navigate(`/musiccommunity?id=${id}`);
    window.scrollTo(0, 0);
  };

  const goMusicDetail = (musicId) => {
    navigate(`/musicdetail?id=${id}&music_id=${musicId}`);
    window.scrollTo(0, 0);
  };

  const handlePost = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("로그인 후 이용하세요.");
        return;
      }

      const formData = new FormData();
      formData.append("title", title);
      formData.append("author", author);
      formData.append("content", content);
      if (imgRef.current.files[0]) {
        formData.append("image", imgRef.current.files[0]);
      }

      let response;

      if (musicId) {
        response = await axios.patch(
          `http://127.0.0.1:8000/datas/${id}/musics/${musicId}/`,
          formData,
          {
            headers: {
              Authorization: `Token ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("음악 추천글 수정 성공:", response.data);
        goMusicDetail(musicId);
      } else {
        response = await axios.post(
          `http://127.0.0.1:8000/datas/${id}/musics/`,
          formData,
          {
            headers: {
              Authorization: `Token ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("음악 추천글 생성 성공:", response.data);
        goMusicCommunity();
      }
    } catch (error) {
      console.error("음악 추천글 생성 실패:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  return (
    <>
      <W.Container>
        <W.BackBtn onClick={goBack} />
        <W.PageTitle>추천글 작성</W.PageTitle>
        <W.Item>
          <W.ShareBtn onClick={handlePost}>공유하기</W.ShareBtn>
          <W.PostImgLabel htmlFor="profileImg">
            <img src="/images/PostImgBtn.svg" />
          </W.PostImgLabel>
          <W.PostImgInput
            type="file"
            accept="image/*"
            onChange={saveImgFile}
            ref={imgRef}
            id="profileImg"
          />
          <W.PostedImg>
            <img src={imgFile ? imgFile : "/images/BasicImg.svg"} />
          </W.PostedImg>
          <W.PostTitle
            placeholder="음악 제목을 입력하세요."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></W.PostTitle>
          <W.PostArtist
            placeholder="아티스트명을 입력하세요."
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></W.PostArtist>
          <W.PostContent
            placeholder="내용을 입력하세요."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></W.PostContent>
        </W.Item>
      </W.Container>
    </>
  );
}
