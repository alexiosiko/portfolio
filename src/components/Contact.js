import { Col, Container, Image, Row } from "react-bootstrap";
import Phone from './../resources/phone.png';
import Marker from './../resources/marker.png'
import Email from './../resources/email.png'
import './Contact.css';

export default function Contact() {
	const imageStyle = { width: "30px", height: "30px", display: 'flex', justifyContent: 'flex-end' };
	const rowStyle = { marginRight: 200, marginTop: 50 };
	return (
		<Container className="hidden" style={{ marginTop: 300, paddingBottom: 500 }}  >
			<h1>Contact</h1>
			<hr className="mt-5 mb-5"  />
			<Row style={rowStyle}>
				<Col style={{ display: 'flex', justifyContent: 'end'}}>
					<Image src={Marker} style={imageStyle} /></Col>
				<Col>
				<h5 style={{ textAlign: 'left'}}>Joyce & Boundary, Vancouver</h5></Col>
			</Row>
			<Row style={rowStyle}>
				<Col style={{ display: 'flex', justifyContent: 'end'}}>
					<Image src={Phone} style={imageStyle} /></Col>
				<Col><h5 style={{ textAlign: 'left'}}>778-251-0290</h5></Col>
			</Row>
			<Row style={rowStyle}>
				<Col style={{ display: 'flex', justifyContent: 'end'}}>
					<Image src={Email} style={imageStyle} /></Col>
				<Col><h5 style={{ textAlign: 'left'}}>alexiosiko@hotmail.com</h5></Col>
			</Row>
		</Container>
	);
}