import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../images/i1.png';
import image2 from '../images/i2.png';
import image3 from '../images/i3.png';

const ProductCarousal = () => {
  const images = [
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
  ];

  return (
    <Carousel pause="hover" className="bg-dark">
      {images.map((image) => (
        <Carousel.Item key={image.id}>
          <div
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundSize: 'cover',   
              backgroundPosition: 'center', 
              backgroundRepeat: 'no-repeat',
              height: '300px',           
              width: '100%',             
            }}
          ></div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousal;
