// import './App.css';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Mypage from './Mypage';
import Header from '@core/components/Header';

function InitPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col">
        <Link to="/home">Home : 이미지 바로 생성하기!</Link>
        <Link to="/about">About : 사이트 소개!</Link>
        <Link to="/gallery">Gallery : 생성된 이미지 모음!</Link>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <div className="mx-10">
        <BrowserRouter basename="/oneclick-front">
          <Routes>
            <Route path="/" Component={InitPage} />
            <Route path="/home" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/gallery" Component={Gallery} />
            <Route path="/mypage" Component={Mypage} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
