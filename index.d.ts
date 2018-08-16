declare module 'react-native-ratings' {
  import * as React from 'react';
  import {
    ViewStyle,
    TextStyle,
    ImageURISource
  } from 'react-native';

  export interface RatingProps extends React.Props<Rating> {
    style?: ViewStyle;
    type?: string;
    startingValue?: number,
    ratingImage?: ImageURISource;
    ratingColor?: string,
    ratingBackgroundColor?: string,
    ratingCount?: number,
    imageSize?: number,
    onFinishRating?: (rating: number) => void,
    showRating?: boolean,
    fractions?: number;
  }

  export class Rating extends React.Component<RatingProps>  {
    setCurrentRating(value: number);
  }

  export interface AirbnbRatingProps extends React.Props<AirbnbRating> {
    style?: ViewStyle;
    count?: number;
    size?:number;
    defaultRating?: number;
    reviews?: string[]
    onFinishRating?: (rating: number) => void,
    showRating?: boolean,
  }

  export class AirbnbRating extends React.Component<AirbnbRatingProps>  {

  }


}

