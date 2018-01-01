import React, { Component } from 'react';

class VideoListItem extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.props.onClick(this.props.video)
  }

  render() {
    const imageUrl = this.props.video.snippet.thumbnails.default.url;

    return (
      <li className='list-group-item' onClick={this.onClick} >
        <div className='video-list media'>
          <div className='media-left'>
            <img src={imageUrl} className='media-object' />
          </div>
          <div className='media-body'>
            <div className='media-heading'>{this.props.video.snippet.title}</div>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoListItem;
