import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const ButtonComponent: React.FC = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home'); // 변경된 경로로 이동
  };

  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      onClick={goToHome}
    >
      배경 생성하러 가기 👈🏻
    </button>
  );
};

export default ButtonComponent;
