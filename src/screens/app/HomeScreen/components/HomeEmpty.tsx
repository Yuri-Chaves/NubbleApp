import React from 'react';

import { ActivityIndicator, Box, Button, Text } from '@components';

interface Props {
  loading: boolean;
  error: unknown;
  refetch: () => void;
}

export function HomeEmpty({ error, loading, refetch }: Props) {
  let Component = (
    <Text preset="paragraphMedium" bold>
      Não há publicações no seu Feed
    </Text>
  );
  if (loading) {
    Component = <ActivityIndicator color="primary" />;
  }
  if (error) {
    Component = (
      <>
        <Text preset="paragraphMedium" bold>
          Não foi possível carregar o Feed
        </Text>
        <Button
          mt="s16"
          title="Recarregar"
          presset="outline"
          onPress={refetch}
        />
      </>
    );
  }
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {Component}
    </Box>
  );
}
