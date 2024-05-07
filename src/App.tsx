// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Mypage from './Mypage';
import Header from '@core/components/Header';

function App() {
  return (
    <>
      <div className="mx-10">
        <Header />
        <BrowserRouter>
          <Routes>
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
