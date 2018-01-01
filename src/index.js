import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YoutubeSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBCv3UJRYwqOqoKpNd6jKReCPGGdMF_Ot0';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      current: null,
    };

    this.onVideoChanged = this.onVideoChanged.bind(this);

    YoutubeSearch({ key: API_KEY, term: 'snowboards'}, videos => {
      this.setState({
        videos,
        current: videos[0],
      });
    });
  }

  onVideoChanged(video) {
    this.setState({ current: video });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.current} />
        <VideoList
          videos={this.state.videos}
          onVideoChanged={this.onVideoChanged} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
