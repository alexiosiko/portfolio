import Phone from './../resources/icons/phone.png';
import Marker from './../resources/icons/marker.png'
import Email from './../resources/icons/email.png'

export default function Contact() {
	const imageStyle = "mr-5"
	const rowStyle = "flex justify-center mt-12 text-1xl";
	return (
		<div style={{ marginTop: 300, paddingBottom: 500 }}  >
			<h1 className='text-5xl'>Info</h1>
			<hr className="mt-24 mb-24"  />
			<div className={`${rowStyle} mt-18 hide`}>
				<div>
					<img src={Marker} width={30} height={30} className={imageStyle} alt='contact' /></div>
				<div>
				<h5 style={{ textAlign: 'left'}}>Joyce & Boundary, Vancouver</h5></div>
			</div>
			<div className={`${rowStyle} hide`}>
				<div>
					<img src={Email} width={30} height={30} className={imageStyle} alt='contact' /></div>
				<div><h5 style={{ textAlign: 'left'}}>alexiosiko@hotmail.com</h5></div>
			</div>
			<div className={`${rowStyle} hide`}>
				<div>
					<img src={Phone} width={30} height={30} className={imageStyle} alt='contact' /></div>
				<div><h5 style={{ textAlign: 'left'}}>778-251-0290</h5></div>
			</div>

		</div>
	);
}