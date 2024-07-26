import React from "react";
import * as W from "../styles/styledMusicWrite";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useRef } from "react";

export function MusicWrite() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  const goMusicCommunity = () => {
    navigate(`/musiccommunity`);
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

      const response = await axios.post(
        "http://127.0.0.1:8000/musics/",
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
    } catch (error) {
      console.error("음악 추천글 생성 실패:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();

  // 이미지 업로드 input의 onChange
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
