import React from 'react';

import { SimpleLogo } from '@brand';
import { useAppSafeArea } from '@hooks';
import { useNavigation } from '@react-navigation/native';

import { Box, BoxProps, Icon } from '@components';

export function HomeHeader() {
  const { top } = useAppSafeArea();

  const navigation = useNavigation();

  function navigateToSearchScreen() {
    navigation.navigate('SearchScreen');
  }
  return (
    <Box {...$wrapper} style={{ paddingTop: top }}>
      <SimpleLogo width={70} />
      <Box flexDirection="row">
        <Box mr="s24">
          <Icon name="search" onPress={navigateToSearchScreen} />
        </Box>
        <Box mr="s24">
          <Icon name="bellOn" color="carrotSecondary" />
        </Box>
        <Box>
          <Icon name="chatOn" color="carrotSecondary" />
        </Box>
      </Box>
    </Box>
  );
}

const $wrapper: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingBottom: 's24',
  paddingHorizontal: 's24',
};
