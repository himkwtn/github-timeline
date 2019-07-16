import dayjs from 'dayjs'

export const parseDate = (date: string) => dayjs(date).format('DD/MM/YYYY')
