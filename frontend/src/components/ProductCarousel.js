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
    <div
      style={{
        marginTop: '20px', 
        padding: '10px',   
      }}
    >
      <Carousel pause="hover" className="bg-dark" style={{ borderRadius: '10px' }}>
        {images.map((image) => (
          <Carousel.Item key={image.id}>
            <div
              style={{
                backgroundImage: `url(${image.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '400px', 
                borderRadius: '10px', 
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', 
              }}
            ></div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousal;
