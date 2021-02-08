import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';

const KEY = 'AIzaSyCdOlji8F4OpeGEyENXmueH7Y-vl5emN_4'


class App extends React.Component {
	state = {videos: [], selectedVideo: null}

	onTermSubmit = async term => {
      const response = await youtube.get("/search", {
        params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: KEY
        }
      })
      this.setState({videos: response.data.items})
    }

    onVideoSelect = (video) => {
      this.setState({selectedVideo: video})
    }

    componentDidUpdate() {
      return this.state.selectedVideo
    }

    contentRendered() {
    	if (this.state.selectedVideo != null) {
    	  return <VideoPlayer video={this.componentDidUpdate()}/>
    	}
    }

	render () {
	  return (
	  	<div className="ui container">
		    <SearchBar onFormSubmit={this.onTermSubmit}/>
		    {this.contentRendered()}
		    <VideoList onVideoSelect = {this.onVideoSelect} videos={this.state.videos}/>
		    
	    </div>
	  ) 
	}
}

export default App;