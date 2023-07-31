import {StyleSheet} from 'react-native';
import {presetBase} from '../../utils/color';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: presetBase.colors.white},
  signInContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  avatarIcon: {width: 55, height: 55},
  itemContainer: {
    backgroundColor: presetBase.colors.greyBG,
    padding: 8,
    borderRadius: 8,
    margin: 2,
    marginHorizontal: 10,
  },
  itemSeparate: {
    height: 1,
    backgroundColor: presetBase.colors.grey20,
    marginVertical: 16,
  },
});
