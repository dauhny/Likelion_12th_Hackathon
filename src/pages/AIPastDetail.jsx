import React from "react";
import * as A from "../styles/styledAIPastDetail";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";

export function AIPastDetail() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
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
      <A.Container>
        <A.BackBtn onClick={goBack}></A.BackBtn>
        <A.Item>
          <A.IntroText>분석 상세</A.IntroText>
          <A.Introduce></A.Introduce>
          <A.Content>
            <div id="Title">포에버리즘 : 우리를 세상의 끝으로</div>
            <div id="Date">2024. 07. 25 관람</div>
          </A.Content>

          <A.Consumer>
            <div id="profile">
              <img src="/images/ProfileImg.svg" />
            </div>
            <div id="text">
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, five centuries, but also the leap into
              electronic typesetting, five centuries, but also the leap
            </div>
          </A.Consumer>
          <A.Result>감정 분석 결과</A.Result>
          <PieChart
            style={{
              width: "160px",
              height: "160px",
              marginLeft: "70px",
              marginTop: "37px",
              borderRadius: "0px",
            }}
            data={[
              {
                value: 49,
                fill: "linear-gradient(180deg, #6F4F98 0%, #251A32 100%)",
                name: "name1",
              },
              {
                value: 24,
                color: "#9D7DC7",
                name: "name2",
              },

              {
                value: 15,
                color: "#C9ADED",
                name: "name3",
              },

              {
                value: 12,
                color: "#fff",
                name: "name4",
              },
            ]}
            reveal={100}
            lineWidth={40}
            background="#f3f3f3"
            lengthAngle={360}
            rounded
            animate
            label={({ dataEntry }) => "감정상태 분석"}
            labelStyle={{
              fontSize: "6px",
              fill: "#33333",
            }}
            labelPosition={0}
          />
          <A.Purple>
            <div id="purple1">
              <img src="/images/Purple1.svg"></img>
            </div>
            <div id="gray">분노 49%</div>
            <div
              id="PercentPurple1"
              style={{
                width: "105px",
                height: "22px",
                borderRadius: "9.919px",
                background: "linear-gradient(90deg, #6F4F98 0%, #251A32 100%)",
                boxShadow: "0px 3.968px 3.968px 0px rgba(0, 0, 0, 0.25) inset",
                marginLeft: "70px",
                marginTop: "-22px",
              }}
            />
          </A.Purple>
          <A.Purple2>
            <div id="purple2">
              <img src="/images/Purple2.svg"></img>
            </div>
            <div id="gray">불안 24%</div>
            <div
              id="PercentPurple2"
              style={{
                width: "67px",
                height: "22px",
                borderRadius: "9.919px",
                background: "linear-gradient(180deg, #9D7DC7 0%, #4D3D61 100%)",
                boxShadow: "0px 3.968px 3.968px 0px rgba(0, 0, 0, 0.25) inset",
                marginLeft: "70px",
                marginTop: "-22px",
              }}
            />
          </A.Purple2>
          <A.Purple3>
            <div id="purple3">
              <img src="/images/Purple3.svg"></img>
            </div>
            <div id="gray">슬픔 15%</div>
            <div
              id="PercentPurple3"
              style={{
                width: "32px",
                height: "22px",
                borderRadius: "9.919px",
                background: "linear-gradient(180deg, #C9ADED 0%, #726387 100%)",
                boxShadow: "0px 3.968px 3.968px 0px rgba(0, 0, 0, 0.25) inset",
                marginLeft: "70px",
                marginTop: "-22px",
              }}
            />
          </A.Purple3>
          <A.Purple4>
            <div id="purple4">
              <img src="/images/Purple4.svg"></img>
            </div>
            <div id="gray">행복 12%</div>
            <div
              id="PercentPurple4"
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "9.919px",
                background: "linear-gradient(180deg, #EBE2F7 0%, #BAB3C4 100%)",
                boxShadow: "0px 3.968px 3.968px 0px rgba(0, 0, 0, 0.25) inset",
                marginLeft: "70px",
                marginTop: "-22px",
              }}
            />
          </A.Purple4>
          <A.AItext>
            고독한 예술가 님의 감정 분석 결과를 알려드리겠습니다. 고독한 예술가
            님은 행복을 40%, 불안감을 24%, 행복을 15%, 분노를 12% 느끼고
            있습니다. 고독한 예술가 님과 비슷한 감정을 느끼는 사람이 20%정도
            분포하고 있고 불안감을 해소하기 위한 방안으로 BACK TO THE FUTURE
            전시를 추천드립니다.
          </A.AItext>
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
