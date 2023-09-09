import { useRef, useEffect, type RefObject } from 'react'

type ClickOutsideCallback = () => void

export function useClickOutside ({ elementRef, callback }: { elementRef: RefObject<HTMLElement>, callback: ClickOutsideCallback }) {
  const callbackRef = useRef<ClickOutsideCallback>(callback)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      event.preventDefault()
      if (
        (elementRef.current != null) &&
        !elementRef.current.contains(event.target as Node)
      ) {
        // Call Callback only if event happens outside element or descendent elements
        callbackRef.current()
      }
    }

    document.addEventListener('click', handleClickOutside, true)

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [elementRef, callback])
}
