import {
  TouchableHighlight,
  TouchableHighlightProps as RNTouchableHighlightProps,
} from 'react-native';
import {
  createBox,
  createRestyleComponent,
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
} from '@shopify/restyle';
import {Theme} from '@theme';

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;

export type TouchableHighlightProps = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme> &
  RNTouchableHighlightProps;

export const ThouchableHighlightBox = createRestyleComponent<
  TouchableHighlightProps,
  Theme
>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableHighlight,
);
