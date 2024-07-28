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
  const [commentText, setCommentText] = useState("");
  const [profileImg, setProfileImg] = useState("");

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const usercode = localStorage.getItem("usercode");

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
        setIsScrapped(response.data.isScrapped);

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

        const userResponse = await axios.get(
          `http://127.0.0.1:8000/user/${usercode}`,
          {
            headers: { Authorization: `Token ${token}` },
          }
        );
        console.log("프로필 사진:", userResponse.data.profile);
        setProfileImg(userResponse.data.profile);
      } catch (error) {
        console.error("프로필 실패 :", error);
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
        : `http://127.0.0.1:8000/scraps/${data}/`;

      const method = isScrapped ? "delete" : "post";

      const response = await axios({
        method,
        url,
        headers: { Authorization: `Token ${token}` },
      });

      console.log("스크랩 성공:", response.data);
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

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  //댓글 생성
  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("로그인 후 이용하세요.");
        return;
      }

      const response = await axios.post(
        `http://127.0.0.1:8000/datas/${id}/comments`,
        { comment: commentText },
        {
          headers: { Authorization: `Token ${token}` },
        }
      );

      setComments((prevComments) => [response.data, ...prevComments]);
      setCommentText("");
    } catch (error) {
      console.error("댓글 등록 실패:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

  //댓글 삭제
  const handleCommentDelete = async (commentId) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("로그인 후 이용하세요.");
        return;
      }

      await axios.delete(
        `http://127.0.0.1:8000/datas/${id}/comments/${commentId}`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );

      setComments((prevComments) =>
        prevComments.filter((comment) => comment.id !== commentId)
      );
      alert("댓글이 삭제되었습니다.");

      // 페이지 새로고침
      window.location.reload();
    } catch (error) {
      alert("자신의 댓글만 삭제할 수 있습니다.");
      console.error("댓글 삭제 실패:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  const goMusicCommunity = (id) => {
    navigate(`/musiccommunity?id=${id}`);
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

  //공유하기
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
          <C.goRecBtn onClick={() => goMusicCommunity(id)} />
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
            코멘트 ({comments.length})
          </C.InfoText>
          <C.CommentInputContainer>
            <C.ProfileImg>
              <img src={profileImg} alt="Profile Img" />
            </C.ProfileImg>
            <C.CommentInput
              placeholder="전시에 대한 코멘트를 남겨보세요."
              value={commentText}
              onChange={handleCommentChange}
            />
            <C.CommentBtn onClick={handleCommentSubmit}>
              <img src="/images/CommentBtn.svg" />
            </C.CommentBtn>
          </C.CommentInputContainer>
          {comments.map((e) => (
            <C.CommentContainer key={e.id}>
              <C.CommentContent>{e.comment}</C.CommentContent>
              <C.CommentDate>{e.createdAt}</C.CommentDate>
              <C.DeleteBtn onClick={() => handleCommentDelete(e.id)} />
              <C.CommentNickname>{e.nickname} • </C.CommentNickname>
              <C.CommentProfile>
                <img
                  src={`http://127.0.0.1:8000${e.profile}`}
                  alt="Comment Profile"
                />
              </C.CommentProfile>
              <C.CommentLine />
            </C.CommentContainer>
          ))}{" "}
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
