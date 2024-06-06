'use client';

import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';

const BookingCalendar = () => {
  const currentDate = new Date();
  const defaultSelected: DateRange = {
    from: undefined,
    to: undefined,
  };
  const [range, setDate] = useState<DateRange | undefined>(defaultSelected);

  return (
    <Calendar
      mode='range'
      selected={range}
      defaultMonth={currentDate}
      onSelect={setDate}
    />
  );
};
export default BookingCalendar;
