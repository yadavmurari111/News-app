import React, {FunctionComponent, useEffect, useState} from 'react';
import {IVideoNewsInterface} from './video-news.interface';
import VideoNewsTemplate from './video-news.template';
import fetchYouTubeVideoIds, {SampleVideoIdData} from './video-news.service';

const VideoNewsComponent: FunctionComponent<IVideoNewsInterface> = ({
  componentId,
}: IVideoNewsInterface) => {
  const [videoIds, setVideoIds] = useState([]);
  useEffect(() => {
    fetchYouTubeVideoIds().then(response => {
      setVideoIds(response);
    });
  }, []);

  return (
    <VideoNewsTemplate
      videoIds={videoIds.length > 0 ? videoIds : SampleVideoIdData}
      componentId={componentId}
    />
  );
};
export default VideoNewsComponent;
