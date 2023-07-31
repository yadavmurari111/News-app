import React, {FunctionComponent, useState} from 'react';
import {ISearchNewsInterface} from './search-news.interface';
import SearchNewsTemplate from './search-news.template';
import {getSearchNewsData} from './search-news.service';
import {Keyboard} from 'react-native';

const SearchNewsComponent: FunctionComponent<ISearchNewsInterface> = ({
  componentId,
}: ISearchNewsInterface) => {
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchData, setSearchData] = useState<any>([]);

  const onSearchButtonPress = () => {
    Keyboard.dismiss(); //dismiss the keyboard after search
    setLoading(true);
    getSearchNewsData(searchText).then(res => {
      setSearchData(res);
      setLoading(false);
    });
  };

  return (
    <SearchNewsTemplate
      loading={loading}
      searchText={searchText}
      searchData={searchData}
      getSearchText={setSearchText}
      componentId={componentId}
      onSearchButtonPress={onSearchButtonPress}
    />
  );
};
export default SearchNewsComponent;
