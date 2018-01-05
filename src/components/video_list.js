import React, { Component } from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({ videos, onVideoChanged }) => {
  const videoItems = videos.map(video => {
    return <VideoListItem
      video={video}
      key={video.id.videoId}
      onClick={onVideoChanged} />;
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
