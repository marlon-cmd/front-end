import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Education() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
      <br></br>
      <br></br>
    <Container>
      <Row>
        <Col>
        <Image src="https://scontent.fmnl34-1.fna.fbcdn.net/v/t39.30808-6/434292311_820970890077232_951551983904731018_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE-f4hQxkmAtQex8Jn4o0Q9aPrws6XPboZo-vCzpc9uhjdXWXJQTB0xBtNKYdawfBYn7nFPWWRT40pNk8HA2i-a&_nc_ohc=8secoElhNyMQ7kNvgHm9Q4n&_nc_zt=23&_nc_ht=scontent.fmnl34-1.fna&_nc_gid=A7BU2HsTr4ogySHnBXZBtHN&oh=00_AYAc2zDBF-jzJa32QPX5lA2XXjE9bvUuFja7lWaKlLDR5g&oe=676157A7" rounded
        style={{width: '450px',
         height: '430px', 
         marginTop: '85px', 
         marginLeft: '50px',
         borderRadius: '10px', 
         boxShadow: '0px 6px 20px rgba(255, 223, 126, 0.2)'
         }} />
        <p style={{ display: 'flex', marginTop: '10px', color: '#333', justifyContent: 'center', fontWeight: 'bold', fontSize: '25px' }}>
        <a
        href="https://www.google.com/maps/place/Pasacao+Central+School/@13.5137918,123.040113,17z/data=!4m14!1m7!3m6!1s0x33a227b7244a3fb5:0xca59c67846ce4dd2!2sPasacao+Central+School!8m2!3d13.5137866!4d123.0426879!16s%2Fg%2F1q64r12kh!3m5!1s0x33a227b7244a3fb5:0xca59c67846ce4dd2!8m2!3d13.5137866!4d123.0426879!16s%2Fg%2F1q64r12kh?entry=ttu&g_ep=EgoyMDI0MTIxMC4wIKXMDSoASAFQAw%3D%3D"  // Google Maps location
        target="_blank"  // Opens in a new tab
       rel="noopener noreferrer"  // Security best practice
       style={{ textDecoration: 'underline', color: 'black' }}>   
       Pasacao Central School
       </a>
       </p>
        <p style={{ display: 'flex',marginTop: '-10px', color: 'black', justifyContent: 'center', fontWeight: 'bold', fontSize: '25px' }}>
        Year 2011 - 2017 </p>
        </Col>
        <Col>
        <Image src="https://scontent.fmnl34-1.fna.fbcdn.net/v/t39.30808-6/407919426_872305511350249_3175460796480009489_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEazDOi8OUet76TH_pv8ikhrXDkdSrXNvCtcOR1Ktc28IOq8ExWIky3rNT-GvFx1rVKUBO3LTe3FE_vOYrmZWki&_nc_ohc=PkMfbdhXDLMQ7kNvgHZQ_5g&_nc_zt=23&_nc_ht=scontent.fmnl34-1.fna&_nc_gid=AmQFLLzhJZrCLTxv-jfTIe1&oh=00_AYDmT6geyfHwyUzElYG8iueu7CyWLxyAyST3bopNZdHS7g&oe=676162C3" rounded
        style={{width: '450px', height: '430px', marginTop: '85px', marginLeft: '50px', objectFix: 'cover', borderRadius: '10px', boxShadow: '0px 6px 20px rgba(255, 223, 126, 0.2)'}} />
        <p style={{ display: 'flex', marginTop: '10px', color: '#333', justifyContent: 'center', fontWeight: 'bold', fontSize: '25px' }}>
        <a
        href="https://www.google.com/maps/place/Pasacao+Municipal+High+School/@13.5379893,122.9549225,13z/data=!4m10!1m2!2m1!1spasacao+national+high+school!3m6!1s0x33a22711b069ed15:0x73546700611ae823!8m2!3d13.5242387!4d123.0448841!15sChxwYXNhY2FvIG5hdGlvbmFsIGhpZ2ggc2Nob29skgELaGlnaF9zY2hvb2zgAQA!16s%2Fg%2F11jr59k4zk?entry=ttu&g_ep=EgoyMDI0MTIxMC4wIKXMDSoASAFQAw%3D%3D"  // Google Maps location
        target="_blank"  // Opens in a new tab
       rel="noopener noreferrer"  // Security best practice
       style={{ textDecoration: 'underline', color: 'black' }}>   
       Pasacao National High School
       </a>
       </p>
        <p style={{ display: 'flex',marginTop: '-10px', color: 'black', justifyContent: 'center', fontWeight: 'bold', fontSize: '25px' }}>
        Year 2017 - 2023 </p>
        </Col>
      </Row>
      </Container>
      </div>
  );
}


export default Education;
