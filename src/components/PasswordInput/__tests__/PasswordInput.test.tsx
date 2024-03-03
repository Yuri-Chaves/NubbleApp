import React from 'react';

import { IconProps } from 'src/components/Icon/Icon';
import { fireEvent, render, screen } from 'test-utils';

import { PasswordInput } from '../PasswordInput';

describe('<PasswordInput />', () => {
  it('starts with hidden password', () => {
    const mockOnChange = jest.fn();
    render(
      <PasswordInput
        label="Password"
        placeholder="password"
        value="123456"
        onChangeText={mockOnChange}
      />
    );
    const inputElement = screen.getByPlaceholderText(/password/);

    expect(inputElement.props.secureTextEntry).toBeTruthy();
  });

  test('when pressing the eye icon, it should show the password, and change to the eye off icon', () => {
    const mockOnChange = jest.fn();
    render(
      <PasswordInput
        label="Password"
        placeholder="password"
        value="123456"
        onChangeText={mockOnChange}
      />
    );
    const eyeIcon: IconProps['name'] = 'eyeOn';
    fireEvent.press(screen.getByTestId(eyeIcon));

    const eyeOffIcon: IconProps['name'] = 'eyeOff';
    const eyeOffElement = screen.getByTestId(eyeOffIcon);

    const inputElement = screen.getByPlaceholderText(/password/);

    expect(eyeOffElement).toBeTruthy();
    expect(inputElement.props.secureTextEntry).toBeFalsy();
  });
});
