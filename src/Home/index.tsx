import removeImg from '@core/assets/removeBackground/remove-background-example.svg';
import uploadImg from '@core/assets/removeBackground/background-upload.svg';
import plusBtn from '@core/assets/removeBackground/plus-btn.svg';
import { useEffect, useState } from 'react';
import DragDrop2 from '@core/components/DragDrop2';

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

  useEffect(() => {}, [file]);

  return (
    <>
      <h1 className="text-5xl my-10">Remove Background</h1>
      <p className="my-5">배경을 제거해 보세요!</p>
      <div className="flex items-center justify-between">
        <img width={'47%'} src={removeImg} />
        <div style={{ width: '47%', position: 'relative' }}>
          {file ? (
            <>
              <img width={'100%'} src={URL.createObjectURL(file)} />
              <div
                className={`container flex flex-col items-center`}
                style={{ position: 'absolute', top: '35%' }}
              >
                <label className="flex items-center gap-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                  <input type="file" className="" accept="image/*"></input>
                  <img width={'15%'} src={plusBtn} />
                  <span>select another image</span>
                </label>
                <span>Or drop an image here</span>
              </div>
              <button>확인</button>
            </>
          ) : (
            <>
              <img width={'100%'} src={uploadImg} />
              <div
                className={`container flex flex-col items-center`}
                style={{ position: 'absolute', top: '35%' }}
              >
                <label className="flex items-center gap-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                  <input type="file" className="" accept="image/*"></input>
                  <img width={'15%'} src={plusBtn} />
                  <span>start from a photo</span>
                </label>
                <span>Or drop an image here</span>
              </div>
            </>
          )}
        </div>
      </div>
      <DragDrop2 onChangeFile={handleFileSelect} />

      <img
        src={file ? URL.createObjectURL(file) : ''}
        className={file ? '' : 'hidden'}
      />
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
