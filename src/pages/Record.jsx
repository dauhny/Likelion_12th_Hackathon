import React from "react";
import * as R from "../styles/styledRecord";
import { useNavigate } from "react-router-dom";

export function Record() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  const goRecordWrite = () => {
    navigate(`/recordwrite`);
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
        <R.BackBtn onClick={goBack}></R.BackBtn>
        <R.Item>
          <R.IntroText>나의 기록</R.IntroText>
          <R.record onClick={goRecordWrite}>
            <div id="text">기록하기</div>
          </R.record>
          <R.ImgBox>
            <img src="/images/ForeverismIntro.svg" alt="ExhibitPoster"></img>
          </R.ImgBox>
          <R.ExhibitionIntroduce>
            <div id="Title">포에버리즘 : 우리를 세상의 끝으로 </div>
            <div id="Date">2024/07/25</div>
            <R.Trash id="remove">
              <img src="/images/Trash.svg" alt="remove"></img>
            </R.Trash>
          </R.ExhibitionIntroduce>
          <R.PinkBlur></R.PinkBlur>
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
        </R.Item>
      </R.Container>
    </>
  );
}
