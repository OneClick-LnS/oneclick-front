import logo from '@core/assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className="header-bar">
        <div className="flex items-center justify-between p-6 border-b-2 border-black">
          <Link to="/">
            <img src={logo} width={300} />
            {/* 로고 임시로 숨김 */}
            <span className="text-[#396edf] italic font-size text-5xl font-black hidden">
              ONECLICK
            </span>
          </Link>
          <div className="flex space-x-6 text-sm">
            <Link className="text-[#000000] hover:text-[#005fa3]" to="/home">
              Home
            </Link>
            <Link className="text-[#000000] hover:text-[#005fa3]" to="/about">
              About
            </Link>
            <Link className="text-[#000000] hover:text-[#005fa3]" to="/gallery">
              Gallery
            </Link>
            <Link className="text-[#000000] hover:text-[#005fa3]" to="/mypage">
              My Page
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
