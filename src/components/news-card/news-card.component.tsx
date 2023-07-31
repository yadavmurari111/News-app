import React, {FunctionComponent} from 'react';
import {INewsCardInterface} from './news-card.interface';
import NewsCardTemplate from './news-card.template';

const NewsCardComponent: FunctionComponent<INewsCardInterface> = ({
  componentId,
  props,
}: INewsCardInterface) => {
  return <NewsCardTemplate props={props} componentId={componentId} />;
};
export default NewsCardComponent;
