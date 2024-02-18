/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { RefreshControl, ScrollView } from 'react-native';

import { useUserGetById } from '@domain';
import { AppScreenProps } from '@routes';

import {
  ActivityIndicator,
  Box,
  ProfileAvatar,
  Screen,
  Text,
} from '@components';

export function ProfileScreen({ route }: AppScreenProps<'ProfileScreen'>) {
  const userId = route.params.userId;

  const { isError, isLoading, user, isFetching, refetch } =
    useUserGetById(userId);

  return (
    <Screen canGoBack flex={1}>
      {isLoading && <ActivityIndicator color="primary" />}
      {isError && <Text>erro ao carregar perfil do usuário</Text>}
      {user && (
        <ScrollView
          style={{ flex: 1 }}
          refreshControl={
            <RefreshControl refreshing={isFetching} onRefresh={refetch} />
          }
        >
          <Box alignItems="center" flex={1}>
            <ProfileAvatar
              imageUrl={user.profileUrl}
              size={64}
              borderRadius={24}
            />
            <Text preset="headingMedium" bold>
              {user.fullName}
            </Text>
            <Text>@{user.userName}</Text>
          </Box>
        </ScrollView>
      )}
    </Screen>
  );
}
