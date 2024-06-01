import React from 'react';
import 'tailwindcss/tailwind.css';
import ButtonComponent from './button'; // ./button 이라고 작성하면 에러가 난다

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-6 text-white">
      <h1 className="text-5xl font-extrabold mb-8 animate-fade-in-down text-center text-gray-800">
        <div className="mt-5">간편한 이미지 배경 생성</div>
        <div className="mt-5">사진에 생명을 불어 넣어보세요!</div>
      </h1>
      <p className="text-xl mr-10 ml-10 mb-10 text-center max-w-4xl animate-fade-in-up bg-gray-300">
        "환영합니다! 이미지 편집의 새로운 시대를 여는 ONECLICK에 오신 것을
        환영합니다. 이제 단순한 배경 제거를 넘어, 사물에 딱 맞는 맞춤형 배경을
        자동으로 생성하는 혁신적인 솔루션을 경험해보세요."
      </p>
      {/* <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-8 animate-fade-in-left w-full max-w-4xl bg-gradient-to-r from-blue-400 to-blue-600 hover:animate-shake">
        <h2 className="text-4xl font-semibold mb-4">
          AI 기술을 통한 스마트한 이미지 편집
        </h2>
        <p className="text-lg">
          최첨단 AI 기술을 활용하여, 단순히 배경을 제거하는 것을 넘어 사진 속
          사물의 특성과 분위기를 분석합니다. 그리고 그에 어울리는 완벽한 배경을
          자동으로 생성하여, 마치 원래부터 그 자리에 있었던 것처럼 자연스럽고
          아름다운 이미지를 만들어냅니다.
        </p>
      </div> */}
      <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-8 animate-fade-in-right w-full max-w-4xl bg-gradient-to-r from-blue-400 to-blue-600 hover:animate-shake">
        <h2 className="text-4xl font-semibold mb-4">사용자 맞춤형 배경 생성</h2>
        <p className="text-lg">
          사용자에게 맞춤형 배경 스타일을 제공합니다. 자연경관에서부터 도시의
          풍경, 추상적인 예술작품까지, 원하는 분위기와 테마에 맞는 배경을 선택할
          수 있습니다. 이제 여러분의 창의력을 마음껏 발휘해보세요.
        </p>
      </div>
      <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-8 animate-fade-in-left w-full max-w-4xl bg-gradient-to-r from-blue-400 to-blue-600 hover:animate-shake">
        <h2 className="text-4xl font-semibold mb-4">
          편리하고 직관적인 인터페이스
        </h2>
        <p className="text-lg">
          사용자 친화적인 웹 및 모바일 인터페이스를 통해, 누구나 쉽게 이미지를
          업로드하고 원하는 배경을 적용할 수 있습니다. 간단한 클릭 몇 번만으로,
          전문가 수준의 이미지 편집이 가능합니다.
        </p>
      </div>
      <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-8 animate-fade-in-right w-full max-w-4xl bg-gradient-to-r from-blue-400 to-blue-600 hover:animate-shake">
        <h2 className="text-4xl font-semibold mb-4">누구보다 빠르게</h2>
        <p className="text-lg">
          더 이상 복잡한 이미지 편집 프로그램에 시간을 낭비하지 마세요. 우리의
          AI 솔루션이 여러분의 시간을 절약해드리며, 고품질의 이미지를 신속하게
          제공해드립니다.
        </p>
      </div>
      <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-8 animate-fade-in-left w-full max-w-4xl bg-gradient-to-r from-blue-400 to-blue-600 hover:animate-shake">
        <h2 className="text-4xl font-semibold mb-4">남들과는 다르게</h2>
        <p className="text-lg">
          전자상거래, 소셜 미디어, 마케팅, 광고 등 다양한 분야에서 우리의
          솔루션을 활용할 수 있습니다. 제품 사진의 품질을 높여 판매를 촉진하고,
          개인 사진을 더 멋지게 만들어보세요.
        </p>
      </div>
      <ButtonComponent />
    </div>
  );
};

export default About;
