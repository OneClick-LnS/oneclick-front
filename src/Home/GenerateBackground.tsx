import { useState } from 'react';
import TextInputBox from './textInputBox';
import removeImg from '@core/assets/removeBackground/remove-background-example.svg';
import uploadImg from '@core/assets/removeBackground/background-upload.svg';
import plusBtn from '@core/assets/removeBackground/plus-btn.svg';
import DragDrop from '@core/components/DragDrop';

function ResultImages() {
  return (
    <>
      <div className="flex justify-between gap-4 h-1/2 text-center">
        <div className="w-1/2 bg-white p-5 rounded-md shadow-lg">
          결과 사진 1
        </div>
        <div className="w-1/2 bg-white p-5 rounded-md shadow-lg">
          결과 사진 2
        </div>
      </div>
      <div className="flex justify-between gap-4 h-1/2  text-center">
        <div className="w-1/2 bg-white p-5 rounded-md shadow-lg">
          결과 사진 3
        </div>
        <div className="w-1/2 bg-white p-5 rounded-md shadow-lg">
          결과 사진 4
        </div>
      </div>
    </>
  );
}

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
      <p className="my-5">
        배경을 생성해 보세요!
        <br></br> 원하는 주제의 배경이 나오도록 추가 텍스트를 입력할 수 있어요!
      </p>
      {file ? (
        <>
          <div className="flex items-stretch justify-between">
            <div
              style={{
                width: '47%',
                position: 'relative',
                backgroundImage: `url(${URL.createObjectURL(file)})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              <DragDrop onChangeFile={handleFileSelect} />
            </div>
            <img width={'47%'} src={removeImg} className="rounded-md" />
          </div>

          <div className="mt-3 flex justify-end items-stretch gap-4">
            <div className="flex items-center gap-4 bg-blue-500 text-white font-bold py-2 px-4 rounded">
              <span>file name : {file.name}</span>
            </div>
            <button
              onClick={handleUpload}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            >
              Submit
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-stretch justify-between">
            <div
              style={{
                width: '47%',
                position: 'relative',
                backgroundImage: `url(${uploadImg})`,
              }}
            >
              <DragDrop onChangeFile={handleFileSelect} />
              <div
                className={`container flex flex-col items-center`}
                style={{ position: 'absolute', top: '35%' }}
              >
                <div className="flex items-center gap-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                  <img width={'15%'} src={plusBtn} />
                  <span>start from a photo</span>
                </div>
                <span>Or drop an image here</span>
              </div>
            </div>
            <div style={{ width: '47%', height: '270px' }}>
              <ResultImages></ResultImages>
            </div>
          </div>
        </>
      )}
      <TextInputBox></TextInputBox>
    </>
  );
}

export default GenerateBackground;
