// import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Mypage from './Mypage';
import Header from '@core/components/Header';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
      {
        path: '/mypage',
        element: <Mypage />,
      },
    ],
    { basename: '/oneclick-front/' },
  );
  return (
    <>
      <div className="mx-10">
        <Header />
        <RouterProvider router={router} />
        {/* <BrowserRouter basename="/oneclick-front/">
          <Routes>
            <Route path="/home" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/gallery" Component={Gallery} />
            <Route path="/mypage" Component={Mypage} />
          </Routes>
        </BrowserRouter> */}
      </div>
    </>
  );
}

export default App;
