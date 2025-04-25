import { useState, useCallback } from 'react'
import type { Business } from '../types/common'

interface UseBusinessReturn {
  business: Business | null
  isLoading: boolean
  error: Error | null
  createBusiness: (data: Omit<Business, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>
  updateBusiness: (id: string, data: Partial<Business>) => Promise<void>
  deleteBusiness: (id: string) => Promise<void>
}

export default function useBusiness(): UseBusinessReturn {
  const [business, setBusiness] = useState<Business | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const createBusiness = useCallback(async (data: Omit<Business, 'id' | 'createdAt' | 'updatedAt'>) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/business/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Error al crear negocio')
      }

      const businessData = await response.json()
      setBusiness(businessData)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Error desconocido'))
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [])

  const updateBusiness = useCallback(async (id: string, data: Partial<Business>) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/business/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Error al actualizar negocio')
      }

      const businessData = await response.json()
      setBusiness(businessData)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Error desconocido'))
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [])

  const deleteBusiness = useCallback(async (id: string) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/business/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Error al eliminar negocio')
      }

      setBusiness(null)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Error desconocido'))
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    business,
    isLoading,
    error,
    createBusiness,
    updateBusiness,
    deleteBusiness,
  }
}