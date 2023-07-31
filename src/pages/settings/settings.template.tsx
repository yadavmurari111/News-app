import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import LabelComponent from '../../components/typography/label/label.component';
import {ETypographyVariant} from '../../components/typography/label/model/label.interface';
import {presetBase} from '../../utils/color';
import {ISettingsTemplateInterface} from './settings.interface';

const SettingsTemplate: FunctionComponent<
  ISettingsTemplateInterface
> = ({}: ISettingsTemplateInterface) => {
  return (
    <View style={{flex: 1, backgroundColor: presetBase.colors.white}}>
      <View style={{marginVertical: 10}}>
        <LabelComponent
          color={presetBase.colors.black}
          variant={ETypographyVariant.HEADER_H1}>
          settings
        </LabelComponent>
      </View>
    </View>
  );
};
export default SettingsTemplate;
