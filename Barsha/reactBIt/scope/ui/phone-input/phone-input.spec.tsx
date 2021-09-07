import React from 'react';
import { render } from '@testing-library/react';
import { BasicPhoneInput } from './phone-input.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicPhoneInput />);
  const rendered = getByText('hello from PhoneInput');
  expect(rendered).toBeTruthy();
});
