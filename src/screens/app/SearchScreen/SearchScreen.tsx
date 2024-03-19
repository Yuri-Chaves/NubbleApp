import React, { useState } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { User, useUserSearch } from '@domain';
import { useDebounce } from '@hooks';
import { useSearchHistoryService } from '@services';

import { Icon, ProfileUser, Screen, Text, TextInput } from '@components';

import { SearchHistory } from './components/SearchHistory';

export function SearchScreen() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search);
  const { addUser } = useSearchHistoryService();

  const { list } = useUserSearch(debouncedSearch);

  function renderItem({ item }: ListRenderItemInfo<User>) {
    return <ProfileUser onPress={() => addUser(item)} user={item} />;
  }

  return (
    <Screen
      canGoBack
      HeaderComponent={
        <TextInput
          value={search}
          placeholder="Digite sua busca"
          onChangeText={setSearch}
          leftComponent={<Icon name="search" color="gray3" />}
        />
      }
    >
      {search.length === 0 ? (
        <SearchHistory />
      ) : (
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </Screen>
  );
}
