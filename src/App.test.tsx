import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Renders App', () => {
  const {container} = render(<App />);
  expect(container).toMatchSnapshot();
});
