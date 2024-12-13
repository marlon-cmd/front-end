import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Container, Row, Col, } from 'react-bootstrap';

function Slidecarousel() {
  return (
    <div>
      <Container style={{fontFamily: 'Roboto, sans-serif'}}>
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={4} className="text-center mb-4">
            <img
              src="https://scontent.fmnl34-1.fna.fbcdn.net/v/t39.30808-6/465757639_1619323342260479_5737901227482618242_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG2ueI-yRGaHaXI2I7pwoHwO4Pw771tbFc7g_DvvW1sVz-7xBqIvsrg4AEVLFj0659xDsdAaDFnQtpuyJLaQxib&_nc_ohc=qL71UpBeRUsQ7kNvgGGzFve&_nc_zt=23&_nc_ht=scontent.fmnl34-1.fna&_nc_gid=Aa8-jkK-xt_WRmoy1iqnK5C&oh=00_AYD9bVWPIWX1bJAWtyXc4nZOMk5aWsKBTRgIpzzA-H-KCw&oe=67615DBD"
              alt="Volleyball"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '400px',
                borderRadius: '10px',
                boxShadow: '0px 6px 20px rgba(255, 223, 126, 0.2)',
              }}
            />
            <h3 style={{fontWeight: 'bold'}}>Playing Volleyball</h3>
            <p style={{fontWeight: 'bold'}}>I love to play volleyball. My current position is Setter.</p>
          </Col>

          <Col xs={12} md={4} className="text-center mb-4">
            <img
              src="https://www.braveheartdigitalmarketing.com/wp-content/uploads/2020/08/social-media-logos2.jpg"
              alt="Media"
              style={{
                width: '100%',
                height: '358px',
                borderRadius: '10px',
                boxShadow: '0px 6px 20px rgba(255, 223, 126, 0.2)',
              }}
            />
            <h3 style={{fontWeight: 'bold'}}>Media</h3>
            <p style={{fontWeight: 'bold'}}>Spending time on media to relax.</p>
          </Col>

          <Col xs={12} md={4} className="text-center mb-4">
            <img
              src="https://onecms-res.cloudinary.com/image/upload/s--BBjncZ4e--/f_auto,q_auto/c_fill,g_auto,h_622,w_830/v1/mediacorp/tdy/image/2021/12/09/pexels-anastasia-shuraeva-4406681.jpg?itok=q-VZunFL"
              alt="Binge Watching"
              style={{
                width: '100%',
                height: '358px',
                borderRadius: '10px',
                boxShadow: '0px 6px 20px rgba(255, 223, 126, 0.2)',
              }}
            />
            <h3 style={{fontWeight: 'bold'}}>Binge Watching</h3>
            <p style={{fontWeight: 'bold'}}>I'm an avid movie lover. I love to watch movies in my free time.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Slidecarousel;