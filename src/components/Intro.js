import Github from './../resources/icons/github.png';
import Resume from './../resources/icons/resume.png';
import ResumePdf from './../resources/files/resume.pdf';

import './Intro.css';

export default function Intro() {
	return (
		<div>
			{/* <img className='m-auto mt-64 mb-24 hide' src={Face} width={200} height={200} alt='face' /> */}
			<div className='mt-64'></div>
			<div className='flex justify-center hide ' style={{ fontSize: 120}} >
				<h1>
					Hi, I'm 
					
				</h1>
				<h1 className=' bg-gradient-to-r from-blue-300 to-purple-400 text-transparent bg-clip-text' style={{ marginLeft: 25}}>
					Alexi
					
				</h1>
			</div>
			<h3 className='text-3xl max-w-4xl m-auto mt-24  hide' style={{ lineHeight: '2.5rem' }}>
				I have worked on my own developing with many<br /> tools such as React-Native, Next.js 13, Unity ... 
				<br />
				<br />
				I design and code beautifully simple <br /> things,  and I love what I do.
			</h3>
			<div className='flex justify-center mt-8 hide'> 
				<img  width={50} height={50} onClick={() => window.open("https://github.com/alexiosiko", '_blank')} src={Github} className='m-2 icon cursor-pointer' alt='github'/>
				<img  width={50} height={50} onClick={() => window.open(ResumePdf, '_blank')} src={Resume} className='m-2 icon cursor-pointer'alt='resume'/>
			</div>
		</div>
	)
}