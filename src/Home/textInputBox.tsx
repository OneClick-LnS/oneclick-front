import { useState } from 'react';

function TextInputBox() {
  const [text, setText] = useState(''); // 텍스트 입력 상태 관리

  const handleInputChange = (event) => {
    setText(event.target.value); // 입력된 텍스트 상태 업데이트
  };

  const handleSendClick = () => {
    console.log('입력된 텍스트:', text); // 입력된 텍스트 출력
    setText(''); // 전송 후 입력 박스 초기화
  };

  return (
    <div className="bg-white p-5 rounded-md shadow-lg">
      {/* 텍스트 입력 박스 */}
      <input
        type="text"
        value={text} // 입력된 텍스트 상태
        onChange={handleInputChange} // 텍스트가 변경될 때 상태 업데이트
        className="border border-gray-300 rounded px-3 py-2 w-full" // 입력 박스 스타일
        placeholder="텍스트를 입력하세요..."
      />
      {/* 입력 버튼 */}
      <div className="flex justify-end">
        <button
          onClick={handleSendClick} // 입력 버튼 클릭 이벤트
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
        >
          입력
        </button>
      </div>
    </div>
  );
}

export default TextInputBox;
