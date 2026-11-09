import { useState, useEffect, useCallback } from 'react'

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'student' | 'teacher' | 'admin'
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check localStorage for mock auth
    const stored = localStorage.getItem('dt_user')
    if (stored) {
      try {
        setUser(JSON.parse(stored))
      } catch {
        localStorage.removeItem('dt_user')
      }
    }
    setIsLoading(false)
  }, [])

  const login = useCallback((email: string, _password: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockUser: User = {
          id: '1',
          name: email.split('@')[0],
          email,
          role: 'student',
        }
        setUser(mockUser)
        localStorage.setItem('dt_user', JSON.stringify(mockUser))
        resolve(true)
      }, 800)
    })
  }, [])

  const loginWithGoogle = useCallback((): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockUser: User = {
          id: '2',
          name: 'Student User',
          email: 'student@example.com',
          role: 'student',
        }
        setUser(mockUser)
        localStorage.setItem('dt_user', JSON.stringify(mockUser))
        resolve(true)
      }, 800)
    })
  }, [])

  const register = useCallback((name: string, email: string, _password: string, _role: 'student' | 'parent' = 'student'): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockUser: User = {
          id: '3',
          name,
          email,
          role: 'student',
        }
        setUser(mockUser)
        localStorage.setItem('dt_user', JSON.stringify(mockUser))
        resolve(true)
      }, 800)
    })
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    localStorage.removeItem('dt_user')
  }, [])

  return { user, isLoading, login, loginWithGoogle, register, logout, isAuthenticated: !!user }
}
