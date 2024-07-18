import React from "react";
import * as W from "../styles/styledWrite";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export function Write() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const goMyPage = () => {
    navigate(`/mypage`);
  };

  const goIdea = () => {
    navigate(`/idea`);
  };

  const goBack = () => {
    navigate(-1);
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
      goIdea();
    } catch (error) {
      console.error("Error fetching data:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

  return (
    <>
      <W.Container>
        <W.TopBar>
          <W.BackBtn onClick={goBack} />
          <W.GroupSmall>
            <img src="/images/GroupSmall.svg" alt="GroupSmall" />
          </W.GroupSmall>
          <W.MyPage onClick={goMyPage} />
        </W.TopBar>
        <W.ProfileContainer>
          <W.UserInput>포에버리즘 : 우리의 세상의 끝으로</W.UserInput>
        </W.ProfileContainer>
        <W.BigContainer>
          <W.Container1>
            <W.InformationInput
              type="text"
              placeholder="작품 이름 혹은 번호(필수아님)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></W.InformationInput>
            <W.ButtonContainer>
              <img id="detail" src="/images/Plus.svg" alt="Plus" />
            </W.ButtonContainer>
          </W.Container1>
          <W.CommentContainer>
            <W.CommentInput
              type="text"
              placeholder="나의 감상을 기록하고 정리한 것을 타인과 공유하면서 새로운 시각을 발견하고 영감을 얻어보아요!!"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></W.CommentInput>
          </W.CommentContainer>
          <W.Container2>
            <W.InsertBtn>삽입</W.InsertBtn>
            <W.ShareBtn onClick={handlePost}>공유</W.ShareBtn>
          </W.Container2>
        </W.BigContainer>
        <W.img>
          <img id="detail" src="/images/Edit.svg" alt="Edit" />
        </W.img>
        <W.Help>
          <div id="detail">
            어려우신가요?
            <br /> 타인의 해석도 궁금하다면 참고해보세요!!
          </div>
        </W.Help>
        <W.Idea>
          <img
            id="Ideabtn"
            src="/images/Idea.svg"
            alt="Idea"
            onClick={goIdea}
          />
        </W.Idea>
        <W.Ideation>
          <div id="detail">아이데이션</div>
        </W.Ideation>
      </W.Container>
    </>
  );
}
