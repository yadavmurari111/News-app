import React, {FunctionComponent, useEffect} from 'react';
import UserHomeTemplate from './user-home.template';
import {IUserHomeInterface} from './user-home.interface';
import {getHomeNewsData} from './user-home.service';
import {useState} from 'react/index';
import {getSearchNewsData} from '../search-news/search-news.service';

const UserHomeComponent: FunctionComponent<IUserHomeInterface> = ({
  componentId,
}: IUserHomeInterface) => {
  console.log(componentId);
  const [homeFeedData, setHomeFeedData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  useEffect(() => {
    setLoading(true);
    getHomeNewsData().then(response => {
      console.log('home screen mounted and api hit');
      setHomeFeedData(response);
      setLoading(false);
    });
  }, []);

  const onSearchButtonPress = (searchText: string, index: number) => {
    console.log('onSearchButtonPress clicked');
    setLoading(true);
    setSelectedCategoryIndex(index);
    getSearchNewsData(searchText).then(res => {
      setLoading(false);
      setHomeFeedData(res);
    });
  };

  return (
    <UserHomeTemplate
      onSwitchNewsCategory={onSearchButtonPress}
      homeFeedData={homeFeedData}
      componentId={componentId}
      loading={loading}
      selectedCategoryIndex={selectedCategoryIndex}
    />
  );
};
export default UserHomeComponent;
