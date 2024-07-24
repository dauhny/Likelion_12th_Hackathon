import React from "react";
import * as RC from "../styles/styledReviewCommunity";
import { useNavigate } from "react-router-dom";

export function ReviewCommunity() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  const goReviewDetail = () => {
    navigate(`/reviewdetail`);
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
      <RC.Container>
        <RC.BackBtn onClick={goBack}></RC.BackBtn>{" "}
        <RC.PageTitle>커뮤니티</RC.PageTitle>
        <RC.Item>
          <RC.searchBox>
            <RC.search
              type="text"
              placeholder="참고할 전시를 검색해 보세요."
            ></RC.search>
            <RC.searchImg>
              <img src="/images/SearchIconPurple.svg" alt="search"></img>
            </RC.searchImg>
          </RC.searchBox>
          <RC.ticket>
            <img src="/images/Ticket.svg" alt="ticket"></img>
            <RC.profileContainer onClick={goReviewDetail}>
              <img src="/images/ProfileImg.svg" alt="profile"></img>
              <div id="name">문학소녀</div>
              <div id="time">1시간 전</div>
              <div id="line"></div>
            </RC.profileContainer>
            <RC.contentContainer onClick={goReviewDetail}>
              <div id="title">작품 제목이 들어갑니다.</div>
              <div id="content">내용이 들어갑니다.</div>
              <img src="/images/Scrap.svg" alt="scrap"></img>
              <div id="count">12</div>
            </RC.contentContainer>
          </RC.ticket>
          <RC.PinkBlur></RC.PinkBlur>
          {/*하단바*/}
          <RC.NavBar>
            {/*검색*/}
            <RC.NavBtnContainer>
              <RC.NavIcon
                style={{
                  marginLeft: "25px",
                }}
              >
                <img src="/images/SearchIcon.svg" onClick={goSearch} />
              </RC.NavIcon>
              <RC.NavText
                style={{
                  marginLeft: "28px",
                }}
              >
                검색
              </RC.NavText>
            </RC.NavBtnContainer>
            {/*AI 심리 분석*/}
            <RC.NavBtnContainer>
              <RC.NavIcon>
                <img src="/images/AIIcon.svg" onClick={goAI} />
              </RC.NavIcon>
              <RC.NavText
                style={{
                  fontSize: "11px",
                  marginLeft: "20px",
                  marginTop: "-3px",
                }}
              >
                AI 심리 분석
              </RC.NavText>{" "}
            </RC.NavBtnContainer>
            {/*홈*/}
            <RC.NavBtnContainer>
              <RC.NavIcon
                style={{
                  fontSize: "11px",
                  marginLeft: "10px",
                  marginTop: "-25px",
                }}
              >
                <img src="/images/HomeIcon.svg" onClick={goHome} />
              </RC.NavIcon>
            </RC.NavBtnContainer>
            {/*내 기록*/}
            <RC.NavBtnContainer>
              <RC.NavIcon
                style={{
                  marginLeft: "63px",
                  color: "#A259FF",
                }}
              >
                <img src="/images/RecordIcon.svg" onClick={goRecord} />
              </RC.NavIcon>
              <RC.NavText
                style={{
                  marginLeft: "60px",
                  color: "#A259FF",
                }}
              >
                내 기록
              </RC.NavText>
            </RC.NavBtnContainer>
            {/*마이페이지*/}
            <RC.NavBtnContainer>
              <RC.NavIcon
                style={{
                  marginLeft: "45px",
                }}
              >
                <img
                  src="/images/MyPageIcon.svg"
                  onClick={goMyPage}
                  style={{}}
                />
              </RC.NavIcon>
              <RC.NavText style={{}}>마이페이지</RC.NavText>
            </RC.NavBtnContainer>
          </RC.NavBar>
          {/*하단바*/}
        </RC.Item>
      </RC.Container>
    </>
  );
}
