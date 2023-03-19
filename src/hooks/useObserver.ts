import { RefObject, useEffect, useRef } from 'react'

export const useObserver = (
  ref: RefObject<HTMLDivElement>,
  isLoading: boolean,
  callback: () => void,
  limit: boolean
) => {
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (isLoading) {
      return
    }
    if (observer.current) {
      observer.current?.disconnect()
    }
    var cb = function (entries: IntersectionObserverEntry[]) {
      if (entries[0].isIntersecting && limit) {
        callback()
      }
    }

    observer.current = new IntersectionObserver(cb)
    if (ref.current) {
      observer.current?.observe(ref.current)
    }
  }, [isLoading])
}
