import React, { useState, useEffect, useRef } from "react";
import * as RW from "../styles/styledRecordWrite";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export function RecordWrite() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [viewAt, setViewAt] = useState("");
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();
  const [contentLength, setContentLength] = useState(0); // 글자 수 상태

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const token = localStorage.getItem("token");

          if (!token) {
            alert("로그인 후 이용하세요.");
            return;
          }

          const response = await axios.get(
            `http://127.0.0.1:8000/posts/${id}/`,
            {
              headers: { Authorization: `Token ${token}` },
            }
          );

          setTitle(response.data.title);
          setContent(response.data.content);
          setViewAt(response.data.viewAt);
          setImgFile(response.data.img);
        } catch (error) {
          console.error("기록글 조회 실패:", error);
        }
      };

      fetchData();
    }
  }, [id]);

  // 글자 수 업데이트
  useEffect(() => {
    setContentLength(content.length);
    if (content.length > 700) {
      alert("300자 이내로 작성해주세요.");
      setContent(content.slice(0, 700));
    }
  }, [content]);

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

      if (id) {
        const response = await axios.patch(
          `http://127.0.0.1:8000/posts/${id}/`,
          formData,
          {
            headers: {
              Authorization: `Token ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("기록글 수정 성공:", response.data);
      } else {
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
      }

      goRecord();
    } catch (error) {
      console.error("기록글 처리 실패:", error);
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

  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

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

  return (
    <>
      <RW.Container>
        <RW.BackBtn onClick={goBack}></RW.BackBtn>
        <RW.Item>
          <RW.IntroText>{id ? "기록 수정하기" : "기록하기"}</RW.IntroText>
          <RW.record onClick={handlePost}>
            <div id="text">{id ? "수정하기" : "공유하기"}</div>
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

          <RW.ContentLength>
            <div id="text">({contentLength}/300)</div>
          </RW.ContentLength>

          <RW.PinkBlur2></RW.PinkBlur2>
          <RW.NavBar>
            <RW.NavBtnContainer>
              <RW.NavIcon style={{ marginLeft: "25px" }}>
                <img src="/images/SearchIcon.svg" onClick={goSearch} />
              </RW.NavIcon>
              <RW.NavText style={{ marginLeft: "28px" }}>검색</RW.NavText>
            </RW.NavBtnContainer>
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
              </RW.NavText>
            </RW.NavBtnContainer>
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
            <RW.NavBtnContainer>
              <RW.NavIcon style={{ marginLeft: "63px", color: "#A259FF" }}>
                <img src="/images/RecordIcon.svg" onClick={goRecord} />
              </RW.NavIcon>
              <RW.NavText style={{ marginLeft: "60px", color: "#A259FF" }}>
                내 기록
              </RW.NavText>
            </RW.NavBtnContainer>
            <RW.NavBtnContainer>
              <RW.NavIcon style={{ marginLeft: "45px" }}>
                <img src="/images/MyPageIcon.svg" onClick={goMyPage} />
              </RW.NavIcon>
              <RW.NavText>마이페이지</RW.NavText>
            </RW.NavBtnContainer>
          </RW.NavBar>
        </RW.Item>
      </RW.Container>
    </>
  );
}
