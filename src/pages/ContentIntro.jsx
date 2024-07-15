import React from "react";
import * as C from "../styles/styledContentIntro";
import { useNavigate } from "react-router-dom";

export function ContentIntro() {
  return (
    <>
      <C.Container>
        <C.Item>
          <C.ExhibitTitle>포에버리즘 : 우리를 세상의 끝으로</C.ExhibitTitle>
          <C.ExhibitPoster>
            <img src="/images/ForeverismIntro.svg" alt="ExhibitPoster" />
          </C.ExhibitPoster>
          <C.LocationIcon>
            <img src="/images/LocationIcon.svg" />
          </C.LocationIcon>
          <br /> <br />
          <C.LocationText>서울 종로구 세종대로 152 일민 미술관</C.LocationText>
          <C.CalendarIcon>
            <img src="/images/CalendarIcon.svg" />
          </C.CalendarIcon>
          <C.InfoText>전시 일정</C.InfoText>
          <C.ExhibitDetail>
            2024. 04. 12 ~ 2024. 06. 23
            <br />
            11:00 ~ 19:00
            <br /> 매주 월요일 휴무
          </C.ExhibitDetail>
          <C.PurpleBlur></C.PurpleBlur>
        </C.Item>
      </C.Container>
    </>
  );
}
