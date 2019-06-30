import { useState, useRef, useEffect } from 'react'

export const useIntersect = (node: Element | null) => {
  const [visible, setVisible] = useState(false)
  const observeIn = useRef<IntersectionObserver>()
  const observeOut = useRef<IntersectionObserver>()
  useEffect(() => {
    observeIn.current = new IntersectionObserver(
      entries => {
        const element = entries[0]
        if (!visible && element.isIntersecting) setVisible(true)
      },
      { threshold: 0.6 }
    )
    observeOut.current = new IntersectionObserver(entries => {
      const element = entries[0]
      if (visible && !element.isIntersecting) setVisible(false)
    })
    if (node) {
      observeIn.current.observe(node)
      observeOut.current.observe(node)
    }
    return () => {
      observeIn.current && observeIn.current.disconnect()
      observeOut.current && observeOut.current.disconnect()
    }
  })
  return visible
}
