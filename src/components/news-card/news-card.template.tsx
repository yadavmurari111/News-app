import React, {FunctionComponent} from 'react';
import {Image, View} from 'react-native';
import {INewsCardTemplateInterface} from './news-card.interface';
import {presetBase} from '../../utils/color';
import LabelComponent from '../typography/label/label.component';
import {ETypographyVariant} from '../typography/label/model/label.interface';

const NewsCardTemplate: FunctionComponent<INewsCardTemplateInterface> = ({
  props,
}: INewsCardTemplateInterface) => {
  return (
    <View
      style={{
        flex: 1,
        padding: 12,
        borderColor: presetBase.colors.grey80,
        marginVertical: 1,
        marginHorizontal: 2,
        backgroundColor: presetBase.colors.greyBG,
      }}>
      <LabelComponent
        color={presetBase.colors.redOnLight}
        variant={ETypographyVariant.LARGE_SEMIBOLD}>
        {props.title}
      </LabelComponent>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 8}}>
          <LabelComponent
            numberOfLines={100}
            color={presetBase.colors.black}
            variant={ETypographyVariant.SMALL_REGULAR}>
            {props.content}
          </LabelComponent>
        </View>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: props.urlToImage}}
        />
      </View>
    </View>
  );
};
export default NewsCardTemplate;
