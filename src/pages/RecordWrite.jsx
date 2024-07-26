import React from "react";
import * as RW from "../styles/styledRecordWrite";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useRef } from "react";

export function RecordWrite() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [viewAt, setViewAt] = useState("");

  //기록글 생성
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
      formData.append("viewAt", viewAt);
      formData.append("content", content);
      if (imgRef.current.files[0]) {
        formData.append("img", imgRef.current.files[0]);
      }

      const response = await axios.post(
        "http://127.0.0.1:8000/posts/",
        formData,
        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("기록글 생성 성공:", response.data);
      goReviewCommunity();
    } catch (error) {
      console.error("기록글 생성 실패:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };
  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  const goReviewCommunity = () => {
    navigate(`/reviewcommunity`);
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
      <RW.Container>
        <RW.BackBtn onClick={goBack}></RW.BackBtn>
        <RW.Item>
          <RW.IntroText>기록하기</RW.IntroText>
          <RW.record onClick={handlePost}>
            <div id="text">공유하기</div>
          </RW.record>
          <RW.PostImgLabel htmlFor="profileImg">
            <img src="/images/Image.svg" />
          </RW.PostImgLabel>
          <RW.PostImgInput
            type="file"
            accept="image/*"
            onChange={saveImgFile}
            ref={imgRef}
            id="profileImg"
          />
          <RW.PostedImg>
            <img src={imgFile ? imgFile : "/images/Photo.svg"} />
          </RW.PostedImg>
          <RW.date
            type="date"
            value={viewAt}
            onChange={(e) => setViewAt(e.target.value)}
          />
          <RW.PinkBlur></RW.PinkBlur>
          <RW.title
            placeholder="관람한 전시명을 입력하세요."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <RW.content
            placeholder="전시에 대해 자유롭게 기록해보세요."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <RW.PinkBlur2></RW.PinkBlur2>
          {/*하단바*/}
          <RW.NavBar>
            {/*검색*/}
            <RW.NavBtnContainer>
              <RW.NavIcon
                style={{
                  marginLeft: "25px",
                }}
              >
                <img src="/images/SearchIcon.svg" onClick={goSearch} />
              </RW.NavIcon>
              <RW.NavText
                style={{
                  marginLeft: "28px",
                }}
              >
                검색
              </RW.NavText>
            </RW.NavBtnContainer>
            {/*AI 심리 분석*/}
            <RW.NavBtnContainer>
              <RW.NavIcon>
                <img src="/images/AIIcon.svg" onClick={goAI} />
              </RW.NavIcon>
              <RW.NavText
                style={{
                  fontSize: "11px",
                  marginLeft: "20px",
                  marginTop: "-3px",
                }}
              >
                AI 심리 분석
              </RW.NavText>{" "}
            </RW.NavBtnContainer>
            {/*홈*/}
            <RW.NavBtnContainer>
              <RW.NavIcon
                style={{
                  fontSize: "11px",
                  marginLeft: "10px",
                  marginTop: "-25px",
                }}
              >
                <img src="/images/HomeIcon.svg" onClick={goHome} />
              </RW.NavIcon>
            </RW.NavBtnContainer>
            {/*내 기록*/}
            <RW.NavBtnContainer>
              <RW.NavIcon
                style={{
                  marginLeft: "63px",
                  color: "#A259FF",
                }}
              >
                <img src="/images/RecordIcon.svg" onClick={goRecord} />
              </RW.NavIcon>
              <RW.NavText
                style={{
                  marginLeft: "60px",
                  color: "#A259FF",
                }}
              >
                내 기록
              </RW.NavText>
            </RW.NavBtnContainer>
            {/*마이페이지*/}
            <RW.NavBtnContainer>
              <RW.NavIcon
                style={{
                  marginLeft: "45px",
                }}
              >
                <img
                  src="/images/MyPageIcon.svg"
                  onClick={goMyPage}
                  style={{}}
                />
              </RW.NavIcon>
              <RW.NavText style={{}}>마이페이지</RW.NavText>
            </RW.NavBtnContainer>
          </RW.NavBar>
          {/*하단바*/}
        </RW.Item>
      </RW.Container>
    </>
  );
}
