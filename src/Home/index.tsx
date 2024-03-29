import removeImg from '@core/assets/removeBackground/remove-background-example.svg';
import uploadImg from '@core/assets/removeBackground/background-upload.svg';
import plusBtn from '@core/assets/removeBackground/plus-btn.svg';
import { useEffect, useState } from 'react';
import DragDrop from '@core/components/DragDrop';

function RemoveBackground() {
  //DragDrop or 직접 버튼 눌러서 업로드 한 파일 상태 저장
  const [file, setFile] = useState<File | null>(null);

  // 구현할 InputDragDrop에서 파일이 선택될 때 상태를 업데이트 한다.
  const handleFileSelect = (file: File | null) => {
    setFile(file);
    console.log(file);
  };

  // 파일 업로드를 처리하는 로직
  const handleUpload = () => {
    if (file) {
      // Drag & Drop으로 가져온 파일 처리 로직 (API 호출 등)
    }
  };

  return (
    <>
      <h1 className="text-5xl my-10">Remove Background</h1>
      <p className="my-5">배경을 제거해 보세요!</p>

      {file ? (
        <>
          <div className="flex items-stretch justify-between">
            <img width={'47%'} src={removeImg} className="rounded-md" />
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
          </div>

          <div className="mt-3 flex justify-end items-stretch gap-4">
            <div className="flex items-center gap-4 bg-blue-500 text-white font-bold py-2 px-4 rounded">
              <span>file name : {file.name}</span>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
              Submit
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-stretch justify-between">
            <img width={'47%'} src={removeImg} className="rounded-md" />
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
          </div>
        </>
      )}
    </>
  );
}

export default function Home() {
  return (
    <>
      <RemoveBackground />
    </>
  );
}

function test() {
  return (
    <>
      <div className="container flex items-stretch gap-4">
        <div className="flex items-center gap-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
          <img width={'15%'} src={plusBtn} />
          <span>select another image</span>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
          확인
        </button>
      </div>
    </>
  );
}
