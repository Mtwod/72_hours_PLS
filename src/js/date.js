import dayjs from 'dayjs';

const tomorrowDate = dayjs().add(1, 'day').format('YYYY-MM-DD');
const nextYearDate = dayjs().add(1, 'year').format('YYYY-MM-DD');
const oldYearDate = dayjs().subtract(50, 'year').format('YYYY-MM-DD');
const todayDate = dayjs().format('YYYY-MM-DD');

export { tomorrowDate, nextYearDate, oldYearDate, todayDate };
