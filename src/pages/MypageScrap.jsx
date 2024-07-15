import React from "react";
import * as MPS from "../styles/styledMypageScrap";
import { useNavigate } from "react-router-dom";

const MypageScrap = () => {
  const navigate = useNavigate();

  const goMyPage = () => {
    navigate(`/mypage`);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <MPS.Container>
      <MPS.Bar>
        <MPS.BackBtn onClick={goBack}></MPS.BackBtn>
        <img id="museum" src="/images/Group.svg" alt="museum" />
      </MPS.Bar>
      <MPS.Image>
        <img id="bigcircle" src="/images/BlackCirclePurple.svg" alt="circle" />
      </MPS.Image>
      <MPS.Name>
        <div id="detail">고독한 예술가</div>
      </MPS.Name>
      <MPS.Select>
        <MPS.Record>
          <img
            id="photo"
            src="/images/WriteBtn.svg"
            alt="writebtn"
            onClick={goMyPage}
          />
          <div id="detail">내 기록</div>
        </MPS.Record>
        <MPS.Scrap>
          <img id="photo" src="/images/BookMarkBtn.svg" alt="bookmarkbtn" />
          <div id="detail">스크랩</div>
        </MPS.Scrap>
      </MPS.Select>
      <MPS.BigBox>
        <MPS.S1 />
        <MPS.S2 />
        <MPS.S3 />
      </MPS.BigBox>
    </MPS.Container>
  );
};

export default MypageScrap;
