import React from "react";
import * as A from "../styles/styledAIRecordList";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

////sdfsf
export function AIRecordList() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  const goAIResult = () => {
    navigate(`/airesult`);
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

  // 체크 표시 클릭하면 체크 완료
  const [imageSrc, setImageSrc] = useState("/images/NotCheck.svg");

  const handleImageClick = () => {
    setImageSrc((prevSrc) =>
      prevSrc === "/images/NotCheck.svg"
        ? "/images/Check.svg"
        : "/images/NotCheck.svg"
    );
  };

  //힘들다
  return (
    <>
      <A.Container>
        <A.BackBtn onClick={goBack}></A.BackBtn>
        <A.Item>
          <A.IntroText>나의 기록</A.IntroText>
          <A.Choice>분석하고 싶은 기록을 선택하세요.</A.Choice>
          <A.Comment>
            AI 상담사가 기록을 통해 당신의 감정과 심리를 분석합니다.
          </A.Comment>
          <A.ImgBox>
            <img src="/images/ForeverismIntro.svg" alt="ExhibitPoster"></img>
          </A.ImgBox>
          <A.ExhibitionIntroduce>
            <div id="Title">포에버리즘 : 우리를 세상의 끝으로 </div>
            <div id="Date">2024/07/25</div>
            <A.CheckBox id="NotCheck" onClick={handleImageClick}>
              <img src={imageSrc} alt="CheckStatus"></img>
            </A.CheckBox>
          </A.ExhibitionIntroduce>
          <A.Analysis onClick={goAIResult}>
            <div id="choice">
              <img src="/images/WhiteCheck.svg" />
            </div>
            <div id="text">선택한 기록 분석</div>
          </A.Analysis>
          {/*하단바*/}
          <A.NavBar>
            {/*검색*/}
            <A.NavBtnContainer>
              <A.NavIcon
                style={{
                  marginLeft: "25px",
                }}
              >
                <img src="/images/SearchIcon.svg" onClick={goSearch} />
              </A.NavIcon>
              <A.NavText
                style={{
                  marginLeft: "28px",
                }}
              >
                검색
              </A.NavText>
            </A.NavBtnContainer>
            {/*AI 심리 분석*/}
            <A.NavBtnContainer>
              <A.NavIcon>
                <img src="/images/AIIcon.svg" onClick={goAI} />
              </A.NavIcon>
              <A.NavText
                style={{
                  fontSize: "11px",
                  marginLeft: "20px",
                  marginTop: "-3px",
                  color: "#A259FF",
                }}
              >
                AI 심리 분석
              </A.NavText>{" "}
            </A.NavBtnContainer>
            {/*홈*/}
            <A.NavBtnContainer>
              <A.NavIcon
                style={{
                  fontSize: "11px",
                  marginLeft: "10px",
                  marginTop: "-25px",
                }}
              >
                <img src="/images/HomeIcon.svg" onClick={goHome} />
              </A.NavIcon>
            </A.NavBtnContainer>
            {/*내 기록*/}
            <A.NavBtnContainer>
              <A.NavIcon
                style={{
                  marginLeft: "63px",
                }}
              >
                <img src="/images/RecordIcon.svg" onClick={goRecord} />
              </A.NavIcon>
              <A.NavText
                style={{
                  marginLeft: "60px",
                }}
              >
                내 기록
              </A.NavText>
            </A.NavBtnContainer>
            {/*마이페이지*/}
            <A.NavBtnContainer>
              <A.NavIcon
                style={{
                  marginLeft: "45px",
                }}
              >
                <img src="/images/MyPageIcon.svg" onClick={goMyPage} />
              </A.NavIcon>
              <A.NavText>마이페이지</A.NavText>
            </A.NavBtnContainer>
          </A.NavBar>
          {/*하단바*/}
        </A.Item>
      </A.Container>
    </>
  );
}
