import {StyleSheet} from 'react-native';
import {presetBase} from '../../utils/color';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: presetBase.colors.grey20,
    backgroundColor: presetBase.colors.greyBG,
  },
  appLogo: {width: 60, height: 60},
  settingsButton: {width: 40, height: 40, borderRadius: 100},
});
