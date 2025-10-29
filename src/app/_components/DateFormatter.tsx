import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import type { FC } from 'react';

interface DateFormatterProps {
  dateString: string;
}

export const DateFormatter: FC<DateFormatterProps> = ({
  dateString = new Date().toISOString(),
}) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, 'LLLL	d, yyyy', { locale: es })}
    </time>
  );
};
