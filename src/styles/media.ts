// Generating media templates based on device breakpoints

import { css } from './styledComponents';
import { SimpleInterpolation, InterpolationValue } from 'styled-components';

export interface Devices {
  desktop: number;
  tablet: number;
  [prop: string]: number;
}

type Media = {
  [P in keyof Devices]: (
    strings: TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ) => InterpolationValue[]
};

// Devices breakpoints
export const devices: Devices = {
  desktop: 1000,
  tablet: 700
};

const media: Media = Object.keys(devices).reduce(
  (acc: Media, label: keyof Devices) => {
    acc[label] = (strings, ...interpolations) => css`
      @media (max-width: ${devices[label] / 16}em) {
        ${css(strings, ...interpolations)};
      }
    `;
    return acc;
  },
  {} as Media
);

export default media;
