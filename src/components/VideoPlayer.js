import React from 'react';

const VideoPlayer = ({video}) => {
	console.log(video)
	const url = 'https://www.youtube.com/embed/'
	return <iframe src={`${url}${video.id.videoId}`} frameBorder="0"></iframe>

}

export default VideoPlayer;