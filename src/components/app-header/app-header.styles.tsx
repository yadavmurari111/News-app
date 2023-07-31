import {StyleSheet} from 'react-native';
import {presetBase} from '../../utils/color';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: presetBase.colors.redBase,
    backgroundColor: presetBase.colors.white,
  },
  appLogo: {width: 50, height: 45, borderRadius: 10},
  settingsButton: {width: 40, height: 40, borderRadius: 100, marginRight: 4},
});
