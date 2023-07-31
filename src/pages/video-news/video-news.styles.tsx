import {StyleSheet} from 'react-native';
import {presetBase} from '../../utils/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: presetBase.colors.greyBG,
  },
  videoItemContainer: {
    flex: 1,
    borderColor: presetBase.colors.grey80,
    marginVertical: 15,
    overflow: 'hidden',
    backgroundColor: presetBase.colors.grey80,
  },
  footer: {paddingVertical: 50, flex: 1, alignItems: 'center'},
});
