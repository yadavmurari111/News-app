import React, {FunctionComponent} from 'react';
import {
  Button,
  FlatList,
  ProgressBarAndroid,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {presetBase} from '../../utils/color';
import AppHeaderComponent from '../../components/app-header/app-header.component';
import {ISearchNewsTemplateInterface} from './search-news.interface';
import {styles} from './search-news.styles';
import NewsCardComponent from '../../components/news-card/news-card.component';

const SearchNewsTemplate: FunctionComponent<ISearchNewsTemplateInterface> = ({
  componentId,
  loading,
  searchText,
  searchData,
  getSearchText,
  onSearchButtonPress,
}: ISearchNewsTemplateInterface) => {
  console.log(searchData, 'searchData-- in template');

  const renderSearchItem = ({item}: any) => {
    return <NewsCardComponent componentId={componentId} props={item} />;
  };

  return (
    <View style={styles.container}>
      <AppHeaderComponent componentId={componentId} />
      <View style={styles.searchContainer}>
        <View style={styles.searchInputBox}>
          <TextInput
            placeholder="Search News"
            placeholderTextColor={presetBase.colors.grey60}
            onChangeText={getSearchText}
            value={searchText}
            numberOfLines={1}
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: presetBase.colors.orangeBase,
            padding: 12,
            borderRadius: 12,
          }}
          onPress={onSearchButtonPress}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
      {!loading && <FlatList data={searchData} renderItem={renderSearchItem} />}
      {loading && <ProgressBarAndroid />}
    </View>
  );
};
export default SearchNewsTemplate;
