import YouTube from 'react-youtube';
import './VideoPlayer.css';
export default function VideoPlayer({ videoId, handleCloseVideo }) {
	const opts = {
		width: '100%',  // Set the desired width of the video
	}
	return (
	<div className='video-player-container'>
      	<YouTube videoId={videoId} opts={opts} onReady={(e) => e.target.playVideo()} />
		<button onClick={handleCloseVideo}>Close</button>
	</div>)
}