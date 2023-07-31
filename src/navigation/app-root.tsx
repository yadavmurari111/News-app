import ROUTE_NAME from './navigation-constants';
import {Navigation} from 'react-native-navigation';
import {presetBase} from '../utils/color';

export const ShowBottomTabs = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BOTTOM_TABS_LAYOUT',
        children: [
          {
            stack: {
              id: 'HOME_TAB',
              children: [
                {
                  component: {
                    id: 'HOME_SCREEN',
                    name: ROUTE_NAME.APP_HOME,
                  },
                },
              ],

              options: {
                topBar: {
                  visible: false,
                  animate: true,
                  background: {color: presetBase.colors.white},
                },
                bottomTab: {
                  text: 'News',
                  selectedFontSize: 13,
                  selectedTextColor: presetBase.colors.orangeBase,
                  icon: require('../assets/icons/bottom-tabs-icons/home.png'),
                },
              },
            },
          },
          {
            stack: {
              id: 'VIDEO_TAB',
              children: [
                {
                  component: {
                    id: 'VIDEO_SCREEN',
                    name: ROUTE_NAME.APP_VIDEO_TAB,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Video',
                  selectedFontSize: 13,
                  selectedTextColor: presetBase.colors.orangeBase,
                  icon: require('../assets/icons/bottom-tabs-icons/account-icon.png'),
                  iconColor: presetBase.colors.black,
                },
              },
            },
          },
          {
            stack: {
              id: 'USER_SEARCH_TAB',
              children: [
                {
                  component: {
                    id: 'USER_SEARCH_SCREEN',
                    name: ROUTE_NAME.APP_SEARCH_TAB,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Search',
                  selectedFontSize: 13,
                  selectedTextColor: presetBase.colors.orangeBase,
                  iconColor: presetBase.colors.black,
                  selectedIconColor: presetBase.colors.black,
                  icon: require('../assets/icons/bottom-tabs-icons/search-icon.png'),
                },
              },
            },
          },
        ],
        options: {
          bottomTabs: {
            backgroundColor: presetBase.colors.greyBG,
            animateTabSelection: true,
            tabsAttachMode: 'onSwitchToTab',
          },
        },
      },
    },
  });
