import React, {FunctionComponent, useCallback, useState} from 'react';
import {Button, FlatList, useWindowDimensions, View} from 'react-native';
import AppHeaderComponent from '../../components/app-header/app-header.component';
import {
  IVideoNewsItemInterface,
  IVideoNewsTemplateInterface,
} from './video-news.interface';
import YoutubePlayer from 'react-native-youtube-iframe';
import {styles} from './video-news.styles';
import LabelComponent from '../../components/typography/label/label.component';
import {ETypographyVariant} from '../../components/typography/label/model/label.interface';
import {presetBase} from '../../utils/color';

const VideoNewsTemplate: FunctionComponent<IVideoNewsTemplateInterface> = ({
  componentId,
  videoIds,
}: IVideoNewsTemplateInterface) => {
  const renderVideoItem = ({item}) => {
    return <VideoItem componentId={componentId} videoId={item} />;
  };

  return (
    <View style={styles.container}>
      <AppHeaderComponent componentId={componentId} />
      <FlatList
        data={videoIds}
        renderItem={renderVideoItem}
        ListFooterComponent={listFooterComponent}
      />
    </View>
  );
};

const VideoItem: FunctionComponent<IVideoNewsItemInterface> = ({
  videoId,
}: IVideoNewsItemInterface) => {
  const {width} = useWindowDimensions();
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state: string) => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  return (
    <View style={styles.videoItemContainer}>
      <View>
        <YoutubePlayer
          width={width}
          height={200}
          play={playing}
          videoId={videoId}
          onChangeState={onStateChange}
        />
      </View>
      <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying} />
    </View>
  );
};

export const listFooterComponent = () => {
  return (
    <View style={{paddingVertical: 50, flex: 1, alignItems: 'center'}}>
      <LabelComponent
        color={presetBase.colors.black}
        variant={ETypographyVariant.SMALL_SEMIBOLD}>
        This is all we have for you now!
      </LabelComponent>
    </View>
  );
};

export default VideoNewsTemplate;
