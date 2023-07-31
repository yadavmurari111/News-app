import React, {FunctionComponent} from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import LabelComponent from '../../components/typography/label/label.component';
import {ETypographyVariant} from '../../components/typography/label/model/label.interface';
import {presetBase} from '../../utils/color';
import {ISettingsTemplateInterface} from './settings.interface';
import {styles} from './settings.styles';

const SettingsTemplate: FunctionComponent<
  ISettingsTemplateInterface
> = ({}: ISettingsTemplateInterface) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.signInContainer}>
        <TouchableOpacity>
          <Image
            style={styles.avatarIcon}
            source={require('../../assets/icons/other-icons/avatar.jpg')}
          />
        </TouchableOpacity>
        <LabelComponent
          color={presetBase.colors.grey60}
          variant={ETypographyVariant.LARGE_SEMIBOLD}>
          SignIn or signUp account
        </LabelComponent>
      </View>

      <View style={styles.itemSeparate} />

      <TouchableOpacity style={styles.itemContainer}>
        <LabelComponent
          color={presetBase.colors.black}
          variant={ETypographyVariant.LARGE_REGULAR}>
          Select Language & region
        </LabelComponent>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemContainer}>
        <LabelComponent
          color={presetBase.colors.black}
          variant={ETypographyVariant.LARGE_REGULAR}>
          Favorite topics
        </LabelComponent>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemContainer}>
        <LabelComponent
          color={presetBase.colors.black}
          variant={ETypographyVariant.LARGE_REGULAR}>
          Invite friends
        </LabelComponent>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemContainer}>
        <LabelComponent
          color={presetBase.colors.black}
          variant={ETypographyVariant.LARGE_REGULAR}>
          Save news
        </LabelComponent>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemContainer}>
        <LabelComponent
          color={presetBase.colors.black}
          variant={ETypographyVariant.LARGE_REGULAR}>
          Notification
        </LabelComponent>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemContainer}>
        <LabelComponent
          color={presetBase.colors.black}
          variant={ETypographyVariant.LARGE_REGULAR}>
          Dark mode
        </LabelComponent>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemContainer}>
        <LabelComponent
          color={presetBase.colors.black}
          variant={ETypographyVariant.LARGE_REGULAR}>
          Privacy policy
        </LabelComponent>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemContainer}>
        <LabelComponent
          color={presetBase.colors.black}
          variant={ETypographyVariant.LARGE_REGULAR}>
          Legal information
        </LabelComponent>
      </TouchableOpacity>
      <View style={styles.itemSeparate} />
      <TouchableOpacity style={styles.itemContainer}>
        <LabelComponent
          color={presetBase.colors.black}
          variant={ETypographyVariant.LARGE_REGULAR}>
          About Us
        </LabelComponent>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemContainer}>
        <LabelComponent
          color={presetBase.colors.black}
          variant={ETypographyVariant.LARGE_REGULAR}>
          Give feedback
        </LabelComponent>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemContainer}>
        <LabelComponent
          color={presetBase.colors.black}
          variant={ETypographyVariant.LARGE_REGULAR}>
          Rate us on play store
        </LabelComponent>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemContainer}>
        <LabelComponent
          color={presetBase.colors.redOnLight}
          variant={ETypographyVariant.LARGE_REGULAR}>
          Logout
        </LabelComponent>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default SettingsTemplate;
