import React, {FunctionComponent, useEffect} from 'react';
import UserHomeTemplate from './user-home.template';
import {IUserHomeInterface} from './user-home.interface';
import {getHomeNewsData} from './user-home.service';
import {useState} from 'react/index';

const UserHomeComponent: FunctionComponent<IUserHomeInterface> = ({
  componentId,
}: IUserHomeInterface) => {
  console.log(componentId);
  const [homeFeedData, setHomeFeedData] = useState<any>([]);

  useEffect(() => {
    getHomeNewsData().then(response => {
      console.log('home screen mounted and api hitted');
      setHomeFeedData(response.articles);
    });
  }, []);

  return (
    <UserHomeTemplate homeFeedData={homeFeedData} componentId={componentId} />
  );
};
export default UserHomeComponent;
