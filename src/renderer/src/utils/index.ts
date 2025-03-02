import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...args: ClassValue[]): string => {
  return twMerge(clsx(...args))
}

const dateFormatter = new Intl.DateTimeFormat('UTC', {
  dateStyle: 'short',
  timeStyle: 'short',
  timeZone: 'UTC'
})

export const formatDateFromMs = (ms: number): string => dateFormatter.format(ms)
