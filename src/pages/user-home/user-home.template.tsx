import React, {FunctionComponent} from 'react';
import {
  FlatList,
  ProgressBarAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import LabelComponent from '../../components/typography/label/label.component';
import {ETypographyVariant} from '../../components/typography/label/model/label.interface';
import {presetBase} from '../../utils/color';
import {IUserHomeTemplateInterface} from './user-home.interface';
import AppHeaderComponent from '../../components/app-header/app-header.component';
import NewsCardComponent from '../../components/news-card/news-card.component';

const category = [
  'Top News',
  'Breaking News',
  'Bollywood',
  'Cricket',
  'India',
  'National',
  'International',
  'Business',
  'Astrology',
  'Motivation',
  'Indian Politics',
];

const UserHomeTemplate: FunctionComponent<IUserHomeTemplateInterface> = ({
  loading,
  componentId,
  homeFeedData,
  selectedCategoryIndex,
  onSwitchNewsCategory,
}: IUserHomeTemplateInterface) => {
  console.log(homeFeedData, 'homeFeedData');

  const renderFeedItem = ({item}: any) => {
    return <NewsCardComponent componentId={componentId} props={item} />;
  };

  const listFooterComponent = () => {
    return (
      <View style={{paddingVertical: 50, flex: 1, alignItems: 'center'}}>
        {!loading ? (
          <LabelComponent
            color={presetBase.colors.black}
            variant={ETypographyVariant.SMALL_SEMIBOLD}>
            This is all we have for you now!
          </LabelComponent>
        ) : (
          <ProgressBarAndroid />
        )}
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: presetBase.colors.white}}>
      <View
        style={{
          borderBottomWidth: 0.2,
          borderBottomColor: presetBase.colors.grey40,
        }}>
        <AppHeaderComponent componentId={componentId} />
        <FlatList
          horizontal
          data={category}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={{paddingHorizontal: 8}}
              onPress={() => onSwitchNewsCategory(item, index)}>
              <LabelComponent
                color={presetBase.colors.black}
                variant={ETypographyVariant.MEDIUM_SEMIBOLD}>
                {item}
              </LabelComponent>
              <View
                style={{
                  height: 2,
                  backgroundColor:
                    selectedCategoryIndex === index
                      ? presetBase.colors.blueBase
                      : presetBase.colors.white,
                }}
              />
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={{marginVertical: 10}}>
        {!loading && (
          <FlatList
            data={homeFeedData}
            renderItem={renderFeedItem}
            ListFooterComponent={listFooterComponent}
          />
        )}
        {loading && <ProgressBarAndroid />}
      </View>
    </View>
  );
};

export default UserHomeTemplate;
