import React from 'react';
import { ViewStyle } from 'react-native';

import { useAppSafeArea } from '@hooks';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { $shadowProps } from '@theme';

import {
  Box,
  BoxProps,
  Icon,
  Text,
  TextProps,
  ThouchableBox,
  TouchableHighlightProps,
} from '@components';

import { AppTabBottomTabParamList } from './AppTabNavigator';
import { mapScreenToProps } from './mapScreenToProps';

export function AppTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const { bottom } = useAppSafeArea();
  return (
    <Box {...$boxWrapper} style={[{ paddingBottom: bottom }, $shadowProps]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const tabItem =
          mapScreenToProps[route.name as keyof AppTabBottomTabParamList];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({
              name: route.name,
              params: route.params,
              merge: true,
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <ThouchableBox
            {...$itemWrapper}
            key={index}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Icon
              color={isFocused ? 'primary' : 'backgroundContrast'}
              name={isFocused ? tabItem.icon.focused : tabItem.icon.unfocused}
            />
            <Text
              {...$label}
              color={isFocused ? 'primary' : 'backgroundContrast'}
            >
              {tabItem.label}
            </Text>
          </ThouchableBox>
        );
      })}
    </Box>
  );
}

const $label: TextProps = {
  semiBold: true,
  marginTop: 's4',
  preset: 'paragraphCaption',
};

const $itemWrapper: TouchableHighlightProps = {
  activeOpacity: 1,
  alignItems: 'center',
  accessibilityRole: 'button',
  flex: 1,
};

const $boxWrapper: BoxProps = {
  paddingTop: 's12',
  backgroundColor: 'background',
  flexDirection: 'row',
};
