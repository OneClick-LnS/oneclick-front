import { ChangeEvent, useState } from 'react';

interface DragDropProps {
  onChangeFile: (file: File | null) => void;
  description?: string;
}

// Drag & Drop 컴포넌트 : 업로드 된 file 정보를 props로 받은 onChangeFile 함수에 전달
const DragDrop = ({ onChangeFile }: DragDropProps) => {
  // 사용자가 파일을 드래그 중임을 상태로 관리
  // UI 변경을 위해 사용
  const [dragOver, setDragOver] = useState<boolean>(false);

  // 드래그 중인 요소가 목표 지점 진입할때
  const handleDragEnter = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(true);
  };

  // 드래그 중인 요소가 목표 지점을 벗어날때
  const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
  };

  // 드래그 중인 요소가 목표 지점에 위치할때
  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // 드래그 중인 요소가 목표 지점에서 드롭될때
  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);

    // 드래그되는 데이터 정보와 메서드를 제공하는 dataTransfer 객체 사용
    if (e.dataTransfer) {
      const file = e.dataTransfer.files[0];
      onChangeFile(file);
    }
  };

  // Drag & Drop이 아닌 클릭 이벤트로 업로드되는 기능도 추가
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    onChangeFile(file);

    // input 요소의 값 초기화
    //e.target.value = '';
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full absolute z-10">
      <label
        className={`w-full h-full flex-col gap-3 border-2 ${
          dragOver
            ? 'border-blue-500 bg-blue-100 opacity-50 text-blue-500 font-semibold'
            : 'border-gray-300'
        } rounded-md flex items-center justify-center cursor-pointer`}
        htmlFor="fileUpload"
        // Label에 드래그 앤 드랍 이벤트 추가
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      ></label>
      <input
        id="fileUpload"
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleChange}
      ></input>
    </div>
  );
};
export default DragDrop;
