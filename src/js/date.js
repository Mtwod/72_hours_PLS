import dayjs from 'dayjs';

const tomorrowDate = dayjs().add(1, 'day').format('YYYY-MM-DD');
const nextYearDate = dayjs().add(1, 'day').add(1, 'year').format('YYYY-MM-DD');

export { tomorrowDate, nextYearDate };
