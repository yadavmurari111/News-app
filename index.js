import {Navigation} from 'react-native-navigation';
import registerAllAppScreens from './src/navigation/register-screens';
import {ShowBottomTabs} from './src/navigation/app-root';
import {presetBase} from './src/utils/color';

registerAllAppScreens(); // register all screens
Navigation.events().registerAppLaunchedListener(() => ShowBottomTabs());

Navigation.setDefaultOptions({
  statusBar: {visible: true, backgroundColor: presetBase.colors.white},
  topBar: {visible: false},
  bottomTabs: {
    selectedIconColor: 'blue',
    titleDisplayMode: 'alwaysShow',
  },
});
