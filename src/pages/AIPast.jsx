import React, { useState, useEffect } from "react";
import * as A from "../styles/styledAIPast";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

export function AIPast() {
  const navigate = useNavigate();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const [data, setData] = useState([]); // 데이터 배열

  const [page, setPage] = useState(1);
  const itemsCountPerPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          alert("로그인 후 이용하세요.");
          return;
        }

        const response = await axios.get(
          `http://127.0.0.1:8000/analysis-results/`,
          {
            headers: { Authorization: `Token ${token}` },
          }
        );

        setData(response.data || []);
      } catch (error) {
        console.error("후기글 조회 실패 :", error);
      }
    };

    fetchData();
  }, [page]);

  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  const goAIPastDetail = (id) => {
    navigate(`/aipastdetail?id=${id}`);
  };

  // 하단바
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
      <A.Container>
        <A.BackBtn onClick={goBack}></A.BackBtn>
        <A.PageTitle>지난 분석</A.PageTitle>{" "}
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          transition={{ duration: 0.3 }}
          style={{ width: "100%", height: "100%" }} // 컨테이너 전체를 사용하는 애니메이션
        >
          <A.Item>
            {data.map((item, index) => (
              <A.RecordContainer key={index}>
                <A.PurpleBox>
                  <div
                    id="purplebox"
                    style={{
                      width: "81px",
                      height: "96px",
                      borderRadius: "10px 0px 0px 10px",
                      background:
                        "linear-gradient(180deg, #C0B0D5 0%, #9286A2 50%)",
                      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                      marginTop: "35px",
                      marginLeft: "-25px",
                    }}
                  />
                  <A.GrayBox>
                    <div
                      id="graybox"
                      style={{
                        width: "61px",
                        height: "78px",
                        borderRadius: "20px 5px 5px 5px",
                        background:
                          "linear-gradient(180deg, rgba(98, 98, 98, 0.55) 0%, rgba(200, 200, 200, 0.55) 100%)",
                        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.17)",
                        marginTop: "-88px",
                        marginLeft: "-11px",
                      }}
                    />
                    <div id="greencheck">
                      <img src="/images/GreenCheck.svg" alt="Green Check"></img>
                    </div>
                    <div id="text">분석 완료</div>
                    <A.ImgBox>
                      <img
                        src={item.post.img || "/images/default-image.png"}
                        alt="Review Image"
                      ></img>
                    </A.ImgBox>
                  </A.GrayBox>
                </A.PurpleBox>
                <A.ExhibitionIntroduce onClick={() => goAIPastDetail(item.id)}>
                  <div id="Title">{item.post.title}</div>
                  <div id="Date">
                    {item.post.createdAt2}에 다녀온 {item.post.title} 전시
                    기록에 대한 <br />
                    AI 분석을 마쳤어요. 회원님의 심리 상태를 알려드릴게요.
                  </div>
                </A.ExhibitionIntroduce>
              </A.RecordContainer>
            ))}
          </A.Item>{" "}
        </motion.div>
        {/* 하단바 */}
        <A.NavBar>
          {/* 검색 */}
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
          {/* AI 심리 분석 */}
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
          {/* 홈 */}
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
          {/* 내 기록 */}
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
          {/* 마이페이지 */}
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
      </A.Container>
    </>
  );
}

const pageTransition = {
  initial: { x: "100%" }, // 오른쪽에서 시작
  animate: { x: "0%" }, // 가운데로 이동
  exit: { x: "-100%" }, // 왼쪽으로 이동
};
