// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Header from '@core/components/Header';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/home" Component={Home} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
