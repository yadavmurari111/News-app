import React, {FunctionComponent} from 'react';
import {IAppHeaderInterface} from './app-header.interface';
import AppHeaderTemplate from './app-header.template';
import {Navigation} from 'react-native-navigation';
import ROUTE_NAME from '../../navigation/navigation-constants';
import {presetBase} from '../../utils/color';

const AppHeaderComponent: FunctionComponent<IAppHeaderInterface> = ({
  componentId,
}: IAppHeaderInterface) => {
  const onNavigation = () => {
    Navigation.push(componentId, {
      component: {
        passProps: {},
        name: ROUTE_NAME.APP_SETTINGS,
        options: {
          topBar: {
            visible: true,
            title: {text: 'Settings'},
          },
          bottomTabs: {visible: false},
        },
      },
    }).then();
  };

  return (
    <AppHeaderTemplate
      componentId={componentId}
      onSettingsIconPress={onNavigation}
    />
  );
};
export default AppHeaderComponent;
