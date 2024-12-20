import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll('.image-box');
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight - 50) {
          item.classList.add('visible');
        } else {
          item.classList.remove('visible');
        }
      });
    };

    setTimeout(() => setShowTitle(true), 500);
    setTimeout(() => setShowText(true), 1000);
    setTimeout(() => setShowBanner(true), 3000);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = [
    { src: '/images/nomer_1.png', text: 'Narhoz University announces early enrollment for international applicants! If you already have a high school diploma, you can submit your documents and start studying in January 2025.' },
    { src: '/images/nomer_2.png', text: 'Documents are accepted through the university\'s admissions office. For any additional questions, you can write to admission@narxoz.kz to get more information.' },
    { src: '/images/nomer_3.png', text: 'The "TEO Game" team of Narxoz University demonstrated a high level of preparation and won first place in the "American Parliamentary Format" (APF) category. The winning students are Ergalym Aytjanov and Bakdaulet Seysenbay.' },
    { src: '/images/nomer_4.png', text: 'A memorandum of cooperation was signed between Narxoz University and the Republican Youth Public Association "Kazakhstan KVN Union" (RYYPA).' },
    { src: '/images/nomer_5.png', text: 'Talgat Kuanyshev, with over 30 years of experience in Kazakhstan\'s financial sector, has successfully managed financial institutions such as ATFBank JSC, Kassa Nova Bank JSC, ATF Leasing JSC, and ForteBank JSC.' },
    { src: '/images/nomer_6.png', text: 'The autumn aesthetics of Narxoz showcase the harmony between the city and nature. The uniqueness of the season and its special atmosphere inspire students and faculty to embark on new initiatives and creativity.' },
  ];

  return (
    <div className="about-us">
      {showTitle && <h1 className="narxoz-title">NARXOZ UNIVERSITY</h1>}
      {showText && (
        <div className="keyboard-animation">
          <p className="animated-text">
            Narxoz University is the leading private university in Kazakhstan.
          </p>
        </div>
      )}
      {showBanner && (
        <div className="banner">
          <img
            src="/images/narxoz.png"
            alt="Narxoz University Banner"
            className="banner-image"
          />
        </div>
      )}
      <Container>
        <Row>
          {content.map((item, index) => (
            <Col key={index} md={6} className="mb-4">
              <div className={`image-box ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="image-container">
                  <img
                    src={item.src}
                    alt={`Image ${index + 1}`}
                    className="image"
                  />
                </div>
                <p className="text">{item.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
