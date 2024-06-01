import React from 'react';

interface PinProps {
  imageUrl: string;
  caption: string;
  height?: string;
}

const Pin: React.FC<PinProps> = ({ imageUrl, caption, height }) => {
  return (
    <div>
      <img
        src={`https://picsum.photos/id/${imageUrl}/200/${height}`}
        alt="Pin"
        className="rounded-lg block w-full"
        style={{ height: `${height}px` }}
      />
      <div className="p-2">
        <p className="text-base text-gray-700">{caption}</p>
      </div>
    </div>
  );
};

function Gallery() {
  let pins: PinProps[] = [];
  pins = [];

  for (let i = 1; i <= 20; i++) {
    pins.push({
      imageUrl: `${30 + i}`,
      caption: `이미지 예시 ${30 + i}`,
      height: getRandomNumber(),
    });
  }

  function getRandomNumber() {
    const min = 3; // 150에 가까운 50의 배수
    const max = 11; // 550에 가까운 50의 배수

    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min) * 50;

    return randomNumber.toString();
  }

  const divideArrayIntoParts = (array: PinProps[], parts: number) => {
    const result: PinProps[][] = Array.from({ length: parts }, () => []);
    array.forEach((item, index) => {
      result[index % parts].push(item);
    });
    return result;
  };
  const dividedPins = divideArrayIntoParts(pins, 3);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-20">
        {dividedPins.map((part, index) => (
          <div key={index} className="grid gap-4">
            {part.map((pin, idx) => (
              <Pin
                key={idx}
                imageUrl={pin.imageUrl}
                caption={pin.caption}
                height={pin.height}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery;
