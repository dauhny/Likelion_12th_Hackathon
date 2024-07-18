import React from "react";
import * as MP from "../styles/styledMypage";
import { useNavigate } from "react-router-dom";

const Mypage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goMyPageScrap = () => {
    navigate(`/mypagescrap`);
  };

  return (
    <MP.Container>
      <MP.Bar>
        <MP.BackBtn onClick={goBack}></MP.BackBtn>
        <img id="museum" src="/images/Group.svg" alt="museum" />
      </MP.Bar>
      <MP.Image>
        <img id="bigcircle" src="/images/BlackCirclePurple.svg" alt="circle" />
      </MP.Image>
      <MP.Name>
        <div id="detail">고독한 예술가</div>
      </MP.Name>
      <MP.Select>
        <MP.Record>
          <img id="photo" src="/images/WriteBtn.svg" alt="writebtn" />
          <div id="detail">내 기록</div>
        </MP.Record>
        <MP.Scrap>
          <img
            id="photo"
            src="/images/BookMarkBtn.svg"
            alt="bookmarkbtn"
            onClick={goMyPageScrap}
          />
          <div id="detail">스크랩</div>
        </MP.Scrap>
      </MP.Select>
      <MP.BigBox>
        <MP.S1 />
        <MP.S2 />
        <MP.S3 />
      </MP.BigBox>
    </MP.Container>
  );
};

export default Mypage;
