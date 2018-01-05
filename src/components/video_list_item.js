import React, { Component } from 'react';

const VideoListItem = ({ video, onClick }) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li className='list-group-item' onClick={() => onClick(video)} >
      <div className='video-list media'>
        <div className='media-left'>
          <img src={imageUrl} className='media-object' />
        </div>
        <div className='media-body'>
          <div className='media-heading'>{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
