import logo from '@core/assets/logo.svg';

export default function Header() {
  return (
    <>
      <header className="header-bar">
        <div className="container mx-auto flex items-center justify-between px-10 py-6 border-b-2 border-black">
          <a>
            <img src={logo} width={300} />
          </a>
          <div className="flex space-x-8 text-xl">
            <a className="text-[#000000] hover:text-[#005fa3]" href="#">
              Home
            </a>
            <a className="text-[#000000] hover:text-[#005fa3]" href="#">
              About
            </a>
            <a className="text-[#000000] hover:text-[#005fa3]" href="#">
              Gallery
            </a>
            <a className="text-[#000000] hover:text-[#005fa3]" href="#">
              My Page
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
