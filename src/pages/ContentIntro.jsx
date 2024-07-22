import React, { useState, useEffect } from "react";
import * as C from "../styles/styledContentIntro";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export function ContentIntro() {
  const navigate = useNavigate();
  const [content, setContent] = useState([]);
  const [scrapBtn, setScrapBtn] = useState("/images/ScrapBtnOff.svg");
  const [scrapCount, setScrapCount] = useState(0);
  const [data, setData] = useState();
  const [isScrapped, setIsScrapped] = useState(false);
  const [comments, setComments] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          alert("로그인 후 이용하세요.");
          return;
        }

        const response = await axios.get(`http://127.0.0.1:8000/data/${id}`, {
          headers: { Authorization: `Token ${token}` },
        });

        const fetchedData = response.data;
        setContent([fetchedData]);
        setData(fetchedData.id);
        setScrapCount(fetchedData.scrapCount);
        setIsScrapped(fetchedData.isScrapped);
        setScrapBtn(
          fetchedData.isScrapped
            ? "/images/ScrapBtnOn.svg"
            : "/images/ScrapBtnOff.svg"
        );

        const commentsResponse = await axios.get(
          `http://127.0.0.1:8000/datas/${id}/comments`,
          {
            headers: { Authorization: `Token ${token}` },
          }
        );
        setComments(commentsResponse.data);
      } catch (error) {
        console.error("댓글 조회 실패 :", error);
      }
    };
    fetchData();
  }, [id]);

  const handleScrap = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("로그인 후 이용하세요.");
        return;
      }

      const url = isScrapped
        ? `http://127.0.0.1:8000/scraps/${data}/delete/`
        : "http://127.0.0.1:8000/scraps/";

      const method = isScrapped ? "delete" : "post";

      // API 호출 시 data와 user 정보를 전달하지 않음
      const response = await axios({
        method,
        url,
        headers: { Authorization: `Token ${token}` },
      });

      console.log("스크랩 성공:", response.data);
      // 스크랩 상태와 버튼 이미지를 업데이트
      setIsScrapped((prev) => !prev);
      setScrapCount((prevCount) =>
        isScrapped ? prevCount - 1 : prevCount + 1
      );
      setScrapBtn(
        isScrapped ? "/images/ScrapBtnOff.svg" : "/images/ScrapBtnOn.svg"
      );

      alert(
        isScrapped
          ? "스크랩이 취소되었습니다."
          : "스크랩되었습니다. 마이페이지에서 확인하세요."
      );
    } catch (error) {
      console.error("스크랩 실패:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  const goMusicCommunity = () => {
    navigate(`/musiccommunity`);
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

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었습니다.");
    } catch (err) {
      console.log(err);
    }
  };

  const handlePageUrl = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <>
      <C.Container>
        <C.BackBtn onClick={goBack}></C.BackBtn>
        <C.PageTitle>전시 상세</C.PageTitle>

        <C.Item>
          {content.map((e) => (
            <C.ExhibitContainer key={e.id}>
              <C.ExhibitTitle>{e.title}</C.ExhibitTitle>
              <C.ExhibitPoster onClick={() => handlePageUrl(e.pageUrl)}>
                <img src={e.image} alt="ExhibitPoster" />
              </C.ExhibitPoster>
              <C.LocationIcon>
                <img src="/images/LocationIcon.svg" />
              </C.LocationIcon>
              <br /> <br />
              <C.LocationText>{e.place}</C.LocationText>
              <C.CalendarIcon>
                <img src="/images/CalendarIcon.svg" />
              </C.CalendarIcon>
              <C.InfoText>전시 일정</C.InfoText>
              <C.ExhibitDetail>
                {e.period}
                <br />
                {e.time}
              </C.ExhibitDetail>
              <C.BtnContainer>
                <C.ScrapBtn onClick={handleScrap}>
                  <img src={scrapBtn} alt="Scrap Button" />
                  <h3>{scrapCount}</h3>
                </C.ScrapBtn>
                <C.ShareBtn onClick={() => handleCopyClipBoard(e.pageUrl)}>
                  <img src="/images/ShareBtn.svg" />
                </C.ShareBtn>
              </C.BtnContainer>
            </C.ExhibitContainer>
          ))}
          <C.InfoText style={{ margin: "80px 0 5px 20px" }}>
            이 전시와 함께하면 좋은 콘텐츠를 확인해보세요.
          </C.InfoText>
          <C.goRecBtn onClick={goMusicCommunity} />
          <C.PurpleBlur />
          <C.CommentIcon>
            <img src="/images/CommentIcon.svg" />
          </C.CommentIcon>
          <C.InfoText
            style={{
              marginLeft: "15px",
              marginTop: "-22px",
            }}
          >
            코멘트 (33)
          </C.InfoText>
          <C.CommentInputContainer>
            <C.ProfileImg>
              <img src="/images/ProfileImgComment.svg" />
            </C.ProfileImg>
            <C.CommentInput placeholder="전시에 대한 코멘트를 남겨보세요."></C.CommentInput>
            <C.CommentBtn>
              <img src="/images/CommentBtn.svg" />
            </C.CommentBtn>
          </C.CommentInputContainer>
          {comments.map((e) => (
            <C.CommentContainer key={e.id}>
              <C.CommentContent>{e.comment}</C.CommentContent>
              <C.CommentDate>{e.createdAt}</C.CommentDate>
              <C.DeleteBtn />
              <C.CommentNickname>{e.username} • </C.CommentNickname>
              <C.CommentProfile>
                <img src={e.profile} />
              </C.CommentProfile>
              <C.CommentLine />
            </C.CommentContainer>
          ))}
          <C.PinkBlur />
          {/* 하단바 */}
          <C.NavBar>
            {/* 검색 */}
            <C.NavBtnContainer>
              <C.NavIcon
                style={{
                  marginLeft: "25px",
                }}
              >
                <img src="/images/SearchIcon.svg" onClick={goSearch} />
              </C.NavIcon>
              <C.NavText
                style={{
                  marginLeft: "28px",
                }}
              >
                검색
              </C.NavText>
            </C.NavBtnContainer>
            {/* AI 심리 분석 */}
            <C.NavBtnContainer>
              <C.NavIcon>
                <img src="/images/AIIcon.svg" onClick={goAI} />
              </C.NavIcon>
              <C.NavText
                style={{
                  fontSize: "11px",
                  marginLeft: "20px",
                  marginTop: "-3px",
                }}
              >
                AI 심리 분석
              </C.NavText>{" "}
            </C.NavBtnContainer>
            {/* 홈 */}
            <C.NavBtnContainer>
              <C.NavIcon
                style={{
                  fontSize: "11px",
                  marginLeft: "10px",
                  marginTop: "-25px",
                }}
              >
                <img src="/images/HomeIcon.svg" onClick={goHome} />
              </C.NavIcon>
            </C.NavBtnContainer>
            {/* 내 기록 */}
            <C.NavBtnContainer>
              <C.NavIcon
                style={{
                  marginLeft: "63px",
                }}
              >
                <img src="/images/RecordIcon.svg" onClick={goRecord} />
              </C.NavIcon>
              <C.NavText
                style={{
                  marginLeft: "60px",
                }}
              >
                내 기록
              </C.NavText>
            </C.NavBtnContainer>
            {/* 마이페이지 */}
            <C.NavBtnContainer>
              <C.NavIcon
                style={{
                  marginLeft: "45px",
                }}
              >
                <img src="/images/MyPageIcon.svg" onClick={goMyPage} />
              </C.NavIcon>
              <C.NavText>마이페이지</C.NavText>
            </C.NavBtnContainer>
          </C.NavBar>
          {/* 하단바 끝 */}
        </C.Item>
      </C.Container>
    </>
  );
}
