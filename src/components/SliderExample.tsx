import React from 'react';
import Slider from './Slider';

const SliderExample: React.FC = () => {
  const slides = [
    {
      title: 'Slide 1',
      description: 'This is the first slide',
      bgColor: 'bg-blue-500',
    },
    {
      title: 'Slide 2',
      description: 'This is the second slide',
      bgColor: 'bg-green-500',
    },
    {
      title: 'Slide 3',
      description: 'This is the third slide',
      bgColor: 'bg-purple-500',
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Slider
        items={slides.map((slide, index) => (
          <div
            key={index}
            className={`${slide.bgColor} h-[400px] rounded-lg flex items-center justify-center text-white p-8`}
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
              <p className="text-xl">{slide.description}</p>
            </div>
          </div>
        ))}
        className="rounded-lg shadow-xl"
        showDots={true}
        showArrows={true}
        autoPlay={true}
        interval={3000}
      />
    </div>
  );
};

export default SliderExample; 