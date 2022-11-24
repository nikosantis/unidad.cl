import { createContext, ReactNode, RefObject, useContext, useRef } from 'react'

interface ScrollContext {
  contactRef: RefObject<HTMLElement>
}

const ScrollContext = createContext<ScrollContext>({} as ScrollContext)

type ScrollProviderProps = {
  children: ReactNode
}

export function ScrollProvider({ children }: ScrollProviderProps) {
  const contactRef = useRef<HTMLElement>(null)
  return (
    <ScrollContext.Provider value={{ contactRef }}>
      {children}
    </ScrollContext.Provider>
  )
}

export function useScroll() {
  const context = useContext(ScrollContext)
  if (typeof context === 'undefined') {
    throw new Error('useScroll must be used within a ScrollProvider')
  }
  return context
}
