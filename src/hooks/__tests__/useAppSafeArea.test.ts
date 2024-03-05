import { theme } from '@theme';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { renderHook } from 'test-utils';

import { useAppSafeArea } from '../useAppSafeArea';

const mockedUseSafeAreaInsets = jest.mocked(useSafeAreaInsets);

describe('useAppSafeArea', () => {
  test('when the safe area is less than minimum requirement, it returns the minimum requirement', () => {
    mockedUseSafeAreaInsets.mockImplementationOnce(
      () => ({ top: 5, bottom: 5 } as EdgeInsets)
    );
    const { result } = renderHook(() => useAppSafeArea());

    expect(result.current.top).toEqual(theme.spacing.s24);
    expect(result.current.bottom).toEqual(theme.spacing.s24);
  });

  test('when the safe area is greater than minimum requirement, it return the safe area', () => {
    mockedUseSafeAreaInsets.mockImplementationOnce(
      () => ({ top: 25, bottom: 25 } as EdgeInsets)
    );
    const { result } = renderHook(() => useAppSafeArea());

    expect(result.current.top).toEqual(25);
    expect(result.current.bottom).toEqual(25);
  });
});
