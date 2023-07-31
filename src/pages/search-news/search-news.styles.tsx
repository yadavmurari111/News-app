import {StyleSheet} from 'react-native';
import {presetBase} from '../../utils/color';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: presetBase.colors.white},
  searchContainer: {
    margin: 6,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInputBox: {
    flex: 1,
    borderWidth: 0.4,
    borderColor: presetBase.colors.grey10,
    backgroundColor: presetBase.colors.greyBG,
    borderRadius: 12,
    marginHorizontal: 8,
  },
  searchInput: {
    fontSize: 17,
    paddingLeft: 20,
    color: presetBase.colors.blueBase,
  },
});
