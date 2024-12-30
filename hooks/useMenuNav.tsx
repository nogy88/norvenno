'use client'
import { useState, useEffect } from 'react'

interface UseMenuNavReturn {
  isMenuOpen: boolean
  toggleMenu: () => void
  isMenuMounted: boolean
  isMenuRendered: boolean
}

const useMenuNav = (): UseMenuNavReturn => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuMounted, setIsMenuMounted] = useState(false)
  const [isMenuRendered, setIsMenuRendered] = useState(false)

  const toggleMenu = (): void => {
    if (isMenuOpen === true) {
      setIsMenuRendered(false)
      setTimeout(() => setIsMenuMounted(false), 1000)
    } else {
      setIsMenuMounted(true)
      setTimeout(() => setIsMenuRendered(true), 20)
    }
    setIsMenuOpen((prev: boolean) => !prev)
  }

  useEffect(() => {
    return () => {
      setIsMenuMounted(false)
      setIsMenuRendered(false)
    }
  }, [])

  return {
    isMenuOpen,
    toggleMenu,
    isMenuMounted,
    isMenuRendered
  }
}

export default useMenuNav
