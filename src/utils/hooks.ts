import { Observable } from 'rxjs'
import { useState, useEffect } from 'react'

export const useObservable = <T>(observable: Observable<T>, initial?: T) => {
  const [value, setValue] = useState<T>(initial!!)
  useEffect(() => {
    const subscription = observable.subscribe(setValue)
    return () => {
      subscription.unsubscribe()
    }
  }, [observable])
  return value
}
