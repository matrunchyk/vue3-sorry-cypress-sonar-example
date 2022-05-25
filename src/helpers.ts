import { formatDistance } from 'date-fns';

export function formatDate(date: Date) {
  return formatDistance(
    date,
    new Date(),
    { addSuffix: true },
  );
}

export function nlToBr(content: string) {
  return content.replaceAll(/\n/g, '<br>');
}
