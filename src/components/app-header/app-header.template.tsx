import React, {FunctionComponent} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {IAppHeaderTemplateInterface} from './app-header.interface';
import {styles} from './app-header.styles';

const AppHeaderTemplate: FunctionComponent<IAppHeaderTemplateInterface> = ({
  onSettingsIconPress,
}: IAppHeaderTemplateInterface) => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.appLogo}
          source={require('../../assets/icons/other-icons/news-app-logo.png')}
        />
        <TouchableOpacity onPress={onSettingsIconPress}>
          <Image
            style={styles.settingsButton}
            source={require('../../assets/icons/other-icons/settings-icon.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default AppHeaderTemplate;
