import React, {FunctionComponent, useState} from 'react';
import {ISearchNewsInterface} from './search-news.interface';
import SearchNewsTemplate from './search-news.template';
import {getSearchNewsData} from './search-news.service';

const SearchNewsComponent: FunctionComponent<ISearchNewsInterface> = ({
  componentId,
}: ISearchNewsInterface) => {
  const [searchText, setSearchText] = useState('');
  const [searchData, setSearchData] = useState<any>([]);

  const onSearchButtonPress = () => {
    console.log('search clicked');
    getSearchNewsData(searchText).then(res => setSearchData(res));
  };

  return (
    <SearchNewsTemplate
      searchText={searchText}
      searchData={searchData}
      getSearchText={setSearchText}
      componentId={componentId}
      onSearchButtonPress={onSearchButtonPress}
    />
  );
};
export default SearchNewsComponent;
