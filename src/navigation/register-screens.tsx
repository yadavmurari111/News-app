import ROUTE_NAME from './navigation-constants';
import {Navigation} from 'react-native-navigation';
import UserHomeComponent from '../pages/user-home/user-home.component';

import {ComponentProvider} from 'react-native';
import SettingsComponent from '../pages/settings/settings.component';
import VideoNewsComponent from '../pages/video-news/video-news.component';
import SearchNewsComponent from '../pages/search-news/search-news.component';

const registerScreen = (routeName: string, component: ComponentProvider) => {
  Navigation.registerComponent(routeName, component);
};

const registerAllAppScreens = () => {
  registerScreen(ROUTE_NAME.APP_HOME, () => UserHomeComponent);
  registerScreen(ROUTE_NAME.APP_VIDEO_TAB, () => VideoNewsComponent);
  registerScreen(ROUTE_NAME.APP_SEARCH_TAB, () => SearchNewsComponent);

  registerScreen(ROUTE_NAME.APP_SETTINGS, () => SettingsComponent);
};

export default registerAllAppScreens;
