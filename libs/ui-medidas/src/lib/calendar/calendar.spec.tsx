import React from 'react';
import { render } from '@testing-library/react-native';

import Calendar from './calendar';

describe('Calendar', () => {
  it('should render successfully', () => {
    const { container } = render(<Calendar />);
    expect(container).toBeTruthy();
  });
});
