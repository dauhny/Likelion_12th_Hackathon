import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { ContentIntro } from "./pages/ContentIntro";
import { MusicCommunity } from "./pages/MusicCommunity";
import { BookCommunity } from "./pages/BookCommunity";
import { CommunityProfile } from "./pages/CommunityProfile";
import { MusicWrite } from "./pages/MusicWrite";
import { BookWrite } from "./pages/BookWrite";
import { ReviewCommunity } from "./pages/ReviewCommunity";
import Idea from "./pages/Idea";
import { Mypage } from "./pages/Mypage";
import MypageScrap from "./pages/MypageScrap";
import { Welcome } from "./pages/Welcome";
import { AI } from "./pages/AI";
import { AIRecordList } from "./pages/AIRecordList";
import { BookDetail } from "./pages/BookDetail";
import { MusicDetail } from "./pages/MusicDeatail";
import { Search } from "./pages/Search";
import { MypageRevise } from "./pages/MypageRevise";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contentintro" element={<ContentIntro />} />
        <Route path="/musiccommunity" element={<MusicCommunity />} />
        <Route path="/bookcommunity" element={<BookCommunity />} />
        <Route path="/communityprofile" element={<CommunityProfile />} />
        <Route path="/musicwrite" element={<MusicWrite />} />
        <Route path="/bookwrite" element={<BookWrite />} />
        <Route path="/reviewcommunity" element={<ReviewCommunity />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/mypagescrap" element={<MypageScrap />} />
        <Route path="/idea" element={<Idea />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/musicdetail" element={<MusicDetail />} />
        <Route path="/bookdetail" element={<BookDetail />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/airecordlist" element={<AIRecordList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/mypagerevise" element={<MypageRevise />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
