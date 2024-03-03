import React from 'react';
import { StyleSheet } from 'react-native';

import { theme } from '@theme';
import { ReactTestInstance } from 'react-test-renderer';
import { fireEvent, render, screen } from 'test-utils';

import { Button, ButtonProps } from '../Button';

function renderComponent(props?: Partial<ButtonProps>) {
  render(<Button title="Button Title" {...props} />);

  const titleElement = screen.queryByText(/button title/i);
  const loadingElement = screen.queryByTestId('activity-indicator');
  const buttonElement = screen.getByTestId('button');

  return {
    titleElement,
    loadingElement,
    buttonElement,
  };
}

describe('<Button />', () => {
  it('calls the onPress function when is pressed', () => {
    const mockedOnPress = jest.fn();
    const { loadingElement, buttonElement } = renderComponent({
      onPress: mockedOnPress,
    });
    fireEvent.press(buttonElement);
    expect(mockedOnPress).toHaveBeenCalled();
    expect(loadingElement).toBeFalsy();
  });
  it('does not call onPress function when it is disabled and it pressed', () => {
    const mockedOnPress = jest.fn();
    const { buttonElement } = renderComponent({
      onPress: mockedOnPress,
      disabled: true,
    });
    fireEvent.press(buttonElement);
    expect(mockedOnPress).not.toHaveBeenCalled();
  });
  it('the title should be gray if button is disabled', () => {
    const { titleElement } = renderComponent({ disabled: true });
    const titleStyle = StyleSheet.flatten(titleElement?.props.style);
    expect(titleStyle.color).toEqual(theme.colors.gray2);
  });
  describe('when button is loading', () => {
    it('shows activity indicator', () => {
      const { loadingElement } = renderComponent({ loading: true });
      expect(loadingElement).toBeTruthy();
    });
    it('hides button title', () => {
      const { titleElement } = renderComponent({ loading: true });
      expect(titleElement).toBeFalsy();
    });
    it('show activity indicator', () => {
      const mockedOnPress = jest.fn();
      const { buttonElement } = renderComponent({
        loading: true,
        onPress: mockedOnPress,
      });
      fireEvent.press(buttonElement);
      expect(mockedOnPress).not.toHaveBeenCalled();
    });
  });
});
