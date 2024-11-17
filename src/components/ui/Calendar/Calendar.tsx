'use client';

import * as React from 'react';
import { DayPicker } from 'react-day-picker';
import './Calendar.styles.css';

// Documentation: https://react-day-picker.js.org/

type CalendarProps = React.ComponentProps<typeof DayPicker>;

const Calendar: React.FC<CalendarProps> = ({ ...props }) => (
	<DayPicker {...props} />
);
Calendar.displayName = 'Calendar';

export { Calendar };
