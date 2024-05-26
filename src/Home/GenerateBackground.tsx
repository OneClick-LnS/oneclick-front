import { useState } from 'react';
import TextInputBox from './textInputBox';

function GenerateBackground() {
  //DragDrop or 직접 버튼 눌러서 업로드 한 파일 상태 저장
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false); // 추가된 상태

  // 구현할 InputDragDrop에서 파일이 선택될 때 상태를 업데이트 한다.
  const handleFileSelect = (file: File | null) => {
    setFile(file);
    // console.log(file);
    setIsSubmitted(false); // 파일이 변경되면 다시 false로 설정
  };
  // Submit 버튼 클릭 시 상태 변경
  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <>
      <h1 className="text-5xl my-10">Generate Background</h1>
      <p className="my-5">배경을 생성해 보세요!</p>
      <TextInputBox></TextInputBox>
      {
        <div>
          <div className="flex justify-between gap-4">
            <div className="w-1/2 bg-white p-5 rounded-md shadow-lg">
              <p>사진 1</p>
            </div>
            <div className="w-1/2 bg-white p-5 rounded-md shadow-lg">
              <p>사진 2</p>
            </div>
            <div className="w-1/2 bg-white p-5 rounded-md shadow-lg">
              <p>사진 3</p>
            </div>
            <div className="w-1/2 bg-white p-5 rounded-md shadow-lg">
              <p>사진 4</p>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default GenerateBackground;
