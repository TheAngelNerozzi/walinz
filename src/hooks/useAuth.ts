import { useState, useCallback } from 'react'

interface AuthUser {
  id: string
  email: string
  name: string
}

interface UseAuthReturn {
  user: AuthUser | null
  isLoading: boolean
  error: Error | null
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, name: string) => Promise<void>
  logout: () => Promise<void>
}

export default function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        throw new Error('Error al iniciar sesión')
      }

      const userData = await response.json()
      setUser(userData)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Error desconocido'))
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [])

  const register = useCallback(async (email: string, password: string, name: string) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }),
      })

      if (!response.ok) {
        throw new Error('Error al registrar usuario')
      }

      const userData = await response.json()
      setUser(userData)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Error desconocido'))
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [])

  const logout = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      })

      if (!response.ok) {
        throw new Error('Error al cerrar sesión')
      }

      setUser(null)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Error desconocido'))
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    user,
    isLoading,
    error,
    login,
    register,
    logout,
  }
}