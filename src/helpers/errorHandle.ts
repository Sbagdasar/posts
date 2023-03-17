import { AxiosError, isAxiosError } from 'axios'

export const handleError = (e: Error | AxiosError<{ error: string }>) => {
  let message = e.message

  if (isAxiosError(e)) {
    message = e.response?.data?.error || e.message
  }

  return message
}
