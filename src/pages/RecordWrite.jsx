import React from "react";
import * as RW from "../styles/styledRecordWrite";
import { useNavigate } from "react-router-dom";

export function RecordWrite() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  const goMyRecordDetail = () => {
    navigate(`/myrecorddetail`);
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
          <RW.record onClick={goMyRecordDetail}>
            <div id="text">공유하기</div>
          </RW.record>
          <RW.imgButton>
            <div id="image">
              <img src="/images/Image.svg" />
            </div>
            <div id="text">이미지 선택</div>
          </RW.imgButton>
          <RW.img>
            <div id="photo">
              <img src="/images/Photo.svg" />
            </div>
            <div id="text">이미지를 추가해 보세요</div>
          </RW.img>
          <RW.date>
            <div id="text">2024-07-19</div>
          </RW.date>
          <RW.PinkBlur></RW.PinkBlur>
          <RW.title>
            <div id="text">전시 제목이 들어갑니다.</div>
          </RW.title>
          <RW.content>
            <div id="text">내용이 들어갑니다.</div>
          </RW.content>
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
