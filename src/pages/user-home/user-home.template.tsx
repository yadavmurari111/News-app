import React, {FunctionComponent} from 'react';
import {FlatList, View} from 'react-native';
import LabelComponent from '../../components/typography/label/label.component';
import {ETypographyVariant} from '../../components/typography/label/model/label.interface';
import {presetBase} from '../../utils/color';
import {IUserHomeTemplateInterface} from './user-home.interface';
import AppHeaderComponent from '../../components/app-header/app-header.component';
import NewsCardComponent from '../../components/news-card/news-card.component';
import {listFooterComponent} from '../video-news/video-news.template';

const UserHomeTemplate: FunctionComponent<IUserHomeTemplateInterface> = ({
  componentId,
  homeFeedData,
}: IUserHomeTemplateInterface) => {
  console.log(homeFeedData, 'homeFeedData');
  const renderFeedItem = ({item}) => {
    return <NewsCardComponent componentId={componentId} props={item} />;
  };

  return (
    <View style={{flex: 1, backgroundColor: presetBase.colors.white}}>
      <AppHeaderComponent componentId={componentId} />
      <View style={{marginVertical: 10}}>
        <FlatList
          data={homeFeedData}
          renderItem={renderFeedItem}
          ListFooterComponent={listFooterComponent}
        />
      </View>
    </View>
  );
};

export default UserHomeTemplate;
