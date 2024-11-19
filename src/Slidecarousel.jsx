import React from 'react';
import { Carousel } from 'react-bootstrap';

function Slidecarousel() {
  return (
    <Carousel  className="d-flex flex-column align-items-center" style={{ width: '90%',maxWidth: '600%', height: 'auto', marginTop: '20px auto', objectFit: 'contain'}}>
      <Carousel.Item>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          className="d-block w-100"
          src="https://scontent.fmnl34-1.fna.fbcdn.net/v/t39.30808-6/465757639_1619323342260479_5737901227482618242_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG2ueI-yRGaHaXI2I7pwoHwO4Pw771tbFc7g_DvvW1sVz-7xBqIvsrg4AEVLFj0659xDsdAaDFnQtpuyJLaQxib&_nc_ohc=FRcMB3i3IVEQ7kNvgE5-xxC&_nc_zt=23&_nc_ht=scontent.fmnl34-1.fna&_nc_gid=APQu1uetP1PtJBdvXMIUWFz&oh=00_AYBdBd66IoJZ8jhAoEtphW4aoo2tmxf3mRDPpU5WHYetFQ&oe=6742627D"
          alt="First slide" 
          style={{
            objectFit: 'contain', // Ensures proper aspect ratio
            height: 'auto', // Let height adjust dynamically
            maxHeight: '500px', // Optional: Limit height
          }}
        />
        </div>
        <Carousel.Caption>
          <h3>Playing Volleybal</h3>
          <p>I love to play volleyball. My current position is Setter.</p> 
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.braveheartdigitalmarketing.com/wp-content/uploads/2020/08/social-media-logos2.jpg"
          alt="Second slide"
          style={{
            objectFit: 'contain', // Ensures proper aspect ratio
            height: 'auto', // Let height adjust dynamically
            maxHeight: '500px', // Optional: Limit height
          }}
        />
        <Carousel.Caption>
          <h3>Media </h3>
          <p>Spending time on media to relax</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://onecms-res.cloudinary.com/image/upload/s--BBjncZ4e--/f_auto,q_auto/c_fill,g_auto,h_622,w_830/v1/mediacorp/tdy/image/2021/12/09/pexels-anastasia-shuraeva-4406681.jpg?itok=q-VZunFL"
          alt="Third slide"
          style={{
            objectFit: 'contain', // Ensures proper aspect ratio
            height: 'auto', // Let height adjust dynamically
            maxHeight: '500px', // Optional: Limit height
          }}
        />
        <Carousel.Caption>
          <h3>Binge Watching</h3>
          <p>I'm an movie avid, Loves to watch movies on my free time.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slidecarousel;