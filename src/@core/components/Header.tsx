import logo from '@core/assets/logo.svg';

export default function Header() {
  return (
    <>
      <header className="header-bar">
        <div className="flex items-center justify-between p-6 border-b-2 border-black">
          <a href="/">
            <img src={logo} width={300} />
            {/* 로고 임시로 숨김 */}
            <span className="text-[#396edf] italic font-size text-5xl font-black hidden">
              ONECLICK
            </span>
          </a>
          <div className="flex space-x-6 text-sm">
            <a className="text-[#000000] hover:text-[#005fa3]" href="/home">
              Home
            </a>
            <a className="text-[#000000] hover:text-[#005fa3]" href="/about">
              About
            </a>
            <a className="text-[#000000] hover:text-[#005fa3]" href="/gallery">
              Gallery
            </a>
            {/* <a className="text-[#000000] hover:text-[#005fa3]" href="mypage">
              My Page
            </a> */}
          </div>
        </div>
      </header>
    </>
  );
}
