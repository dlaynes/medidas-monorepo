import React from 'react';
import { render } from '@testing-library/react-native';

import CalendarDay from './calendar-day';

describe('CalendarDay', () => {
  it('should render successfully', () => {
    const { container } = render(<CalendarDay />);
    expect(container).toBeTruthy();
  });
});
