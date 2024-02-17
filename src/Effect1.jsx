import React, { useState } from "react";
import './styles/Home.scss';
import t from './images/background.jpg';

const Effect1 = () => {
  const [blurAmount, setBlurAmount] = useState(10);

  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const distanceFromCenter = Math.sqrt(
      (mouseX - window.innerWidth / 2) ** 2 +
      (mouseY - window.innerHeight / 2) ** 2
    );

    // Set the blur to zero when mouse is inside the area
    const newBlurAmount = distanceFromCenter <= 100 ? 0 : 10 - distanceFromCenter / 50;
    setBlurAmount(newBlurAmount);
  };

  const handleMouseLeave = () => {
    setBlurAmount(10);
  };

  return (
    <div className="container">
      <div
        className={`container-effect`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={t}
          alt=""
          className="background-image-effect"
          style={{ filter: `blur(${blurAmount}px)`, height: '100%', width: '100%' }}
        />
        <div className="content-effect">
          <h1>Your Content Goes Here</h1>
          <p>Some additional text or elements.</p>
        </div>
      </div>
    </div>
  );
};

export default Effect1;
