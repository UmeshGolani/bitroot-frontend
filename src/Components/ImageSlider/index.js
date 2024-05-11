import React, { useState } from 'react';
import './style.css'; // Assuming you have a separate CSS file for styling

function ImageSlider({srcUrl}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <img src={srcUrl} alt="Your Image" className={isHovered ? "blurred" : ""} />
      {isHovered && <p className="text">Learn More</p>}
    </div>
  );
}

export default ImageSlider;
