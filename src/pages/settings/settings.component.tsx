import React, {FunctionComponent} from 'react';
import {ISettingsInterface} from './settings.interface';
import SettingsTemplate from './settings.template';

const SettingsComponent: FunctionComponent<ISettingsInterface> = ({
  componentId,
}: ISettingsInterface) => {
  console.log(componentId);
  const onNavigation = (data: any) => {
    // Navigation.push(componentId, {
    //   component: {
    //     passProps: {data},
    //     name: ROUTE_NAME.EXERCISE_LIST,
    //     options: {topBar: {visible: true, title: {text: data.title}}},
    //   },
    // }).then();
  };

  return <SettingsTemplate componentId={componentId} />;
};
export default SettingsComponent;
