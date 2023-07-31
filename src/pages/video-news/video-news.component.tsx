import React, {FunctionComponent, useEffect, useState} from 'react';
import {IVideoNewsInterface} from './video-news.interface';
import VideoNewsTemplate from './video-news.template';
import fetchYouTubeVideoIds from './video-news.service';

const VideoNewsComponent: FunctionComponent<IVideoNewsInterface> = ({
  componentId,
}: IVideoNewsInterface) => {
  console.log(componentId);
  const data = [
    'yr_COent3wY',
    '8CCI_M_Mnes',
    '_HGQZlK08gQ',
    'Hz2F_S3Tl0Y',
    'lqiOEwbB93w',
    'Ovzx0F9es-g',
    '69CFHCkIjXw',
    'Xuf3VtSTAPY',
    'VXcA6Fw7J60',
    'JlRgzWpaXQ4',
  ];
  const [videoIds, setVideoIds] = useState([]);
  useEffect(() => {
    // fetchYouTubeVideoIds().then(response => {
    //   setVideoIds(response);
    //   console.log('home screen mounted and api hitted', response);
    // });
  }, []);

  const onNavigation = (data: any) => {
    // Navigation.push(componentId, {
    //   component: {
    //     passProps: {data},
    //     name: ROUTE_NAME.EXERCISE_LIST,
    //     options: {topBar: {visible: true, title: {text: data.title}}},
    //   },
    // }).then();
  };

  return <VideoNewsTemplate videoIds={data} componentId={componentId} />;
};
export default VideoNewsComponent;
