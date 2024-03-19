import React from 'react';
import { GestureResponderEvent } from 'react-native';

import { User } from '@domain';
import { useNavigation } from '@react-navigation/native';

import {
  Box,
  PressableBox,
  PressableBoxProps,
  ProfileAvatar,
  ProfileAvatarProps,
  Text,
} from '@components';

type ProfileUserProps = {
  user: Pick<User, 'userName' | 'id' | 'profileUrl'>;
  avatarProps?: Omit<Partial<ProfileAvatarProps>, 'imageUrl'>;
  RightComponent?: React.ReactElement;
} & PressableBoxProps;

export function ProfileUser({
  user,
  onPress,
  avatarProps,
  RightComponent,
  ...pressableProps
}: ProfileUserProps) {
  const navigation = useNavigation();

  function handleOnPress(event: GestureResponderEvent) {
    if (onPress) {
      onPress(event);
    }
    navigation.navigate('ProfileScreen', { userId: user.id });
  }
  return (
    <PressableBox
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      mb="s16"
      onPress={handleOnPress}
      {...pressableProps}
    >
      <Box flexDirection="row" alignItems="center">
        <ProfileAvatar {...avatarProps} imageUrl={user.profileUrl} />
        <Text ml="s12" semiBold preset="paragraphMedium">
          {user.userName}
        </Text>
      </Box>
      {RightComponent}
    </PressableBox>
  );
}
