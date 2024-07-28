import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { ContentIntro } from "./pages/ContentIntro";
import { MusicCommunity } from "./pages/MusicCommunity";
import { BookCommunity } from "./pages/BookCommunity";
import { CommunityProfile } from "./pages/CommunityProfile";
import { Write } from "./pages/Write";
import See from "./pages/See";
import Idea from "./pages/Idea";
import { Mypage } from "./pages/Mypage";
import { MypageReverse } from "./pages/MypageReverse";
import { Welcome } from "./pages/Welcome";
import { CommunityDetail, MusicDetail } from "./pages/MusicDeatail";
import { AI } from "./pages/AI";
import { AIRecordList } from "./pages/AIRecordList";
import { AIPastDetail } from "./pages/AIPastDetail";
import { AIResult } from "./pages/AIResult";
import { AIPast } from "./pages/AIPast";
import { Record } from "./pages/Record";
import { RecordWrite } from "./pages/RecordWrite";
import { MyRecordDetail } from "./pages/MyRecordDetail";
import { ReviewCommunity } from "./pages/ReviewCommunity";
import { ReviewDetail } from "./pages/ReviewDetail";
import { IntroduceApp } from "./pages/IntroduceApp";
import { IntroduceContent } from "./pages/IntroduceContent";
import { IntroduceAI } from "./pages/IntroduceAI";
import { IntroduceCommunity } from "./pages/IntroduceCommunity";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/rest-auth/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contentintro" element={<ContentIntro />} />
        <Route path="/musiccommunity" element={<MusicCommunity />} />
        <Route path="/bookcommunity" element={<BookCommunity />} />
        <Route path="/communityprofile" element={<CommunityProfile />} />
        <Route path="/write" element={<Write />} />
        <Route path="/see" element={<See />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/mypagereverse" element={<MypageReverse />} />
        <Route path="/idea" element={<Idea />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/communitydetail" element={<CommunityDetail />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/airecordlist" element={<AIRecordList />} />
        <Route path="/aipastdetail" element={<AIPastDetail />} />
        <Route path="/airesult" element={<AIResult />} />
        <Route path="/aipast" element={<AIPast />} />
        <Route path="/record" element={<Record />} />
        <Route path="/recordwrite" element={<RecordWrite />} />
        <Route path="/myrecorddetail" element={<MyRecordDetail />} />
        <Route path="/reviewcommunity" element={<ReviewCommunity />} />
        <Route path="/reviewdetail" element={<ReviewDetail />} />
        <Route path="/introduceapp" element={<IntroduceApp />} />
        <Route path="/introducecontent" element={<IntroduceContent />} />
        <Route path="/introduceai" element={<IntroduceAI />} />
        <Route path="/introducecommunity" element={<IntroduceCommunity />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
