import React from 'react';

import { Svg, Path } from 'react-native-svg';

import { IconBase } from '../../../components/Icon/Icon';

export function Bookmark({ size = 20, color = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.82051 1.53846C4.11245 1.53846 3.53846 2.11245 3.53846 2.82051V17.8218L8.42346 14.6815C9.35257 14.0841 10.5449 14.0841 11.474 14.6815L16.359 17.8218V2.82051C16.359 2.11245 15.785 1.53846 15.0769 1.53846H4.82051ZM2 2.82051C2 1.26279 3.26279 0 4.82051 0H15.0769C16.6347 0 17.8974 1.26279 17.8974 2.82051V19.2308C17.8974 19.5122 17.7438 19.7711 17.4968 19.9059C17.2498 20.0408 16.9489 20.03 16.7122 19.8778L10.642 15.9756L10.6419 15.9755C10.2196 15.704 9.67779 15.704 9.25551 15.9755L9.25545 15.9756L3.18519 19.8778C2.94849 20.03 2.6476 20.0408 2.40062 19.9059C2.15364 19.7711 2 19.5122 2 19.2308V2.82051Z"
        fill={color}
      />
    </Svg>
  );
}
