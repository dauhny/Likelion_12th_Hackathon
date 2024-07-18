import React from "react";
import * as W from "../styles/styledBookWrite";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useRef } from "react";

export function BookWrite() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  const goBookCommunity = () => {
    navigate(`/bookcommunity`);
    window.scrollTo(0, 0);
  };

  const handlePost = async (event) => {
    event.preventDefault();
    try {
      // API 호출 시 사용자 입력 데이터 전달
      const response = await axios.post("http://127.0.0.1:8000/posts/", {
        title,
        content,
      });
      console.log("후기글 생성 성공:", response.data);
      goBookCommunity();
    } catch (error) {
      console.error("후기글 생성 실패:", error);
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
          <W.ShareBtn onClick={goBookCommunity}>공유하기</W.ShareBtn>
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
          <W.PostTitle placeholder="책 제목을 입력하세요."></W.PostTitle>
          <W.PostArtist placeholder="작가명을 입력하세요."></W.PostArtist>
          <W.PostContent placeholder="내용을 입력하세요."></W.PostContent>
        </W.Item>
      </W.Container>
    </>
  );
}
