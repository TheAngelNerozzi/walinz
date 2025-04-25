import { useState, useCallback } from 'react'
import type { Order, OrderItem } from '../types/common'

interface UseOrdersReturn {
  orders: Order[]
  isLoading: boolean
  error: Error | null
  createOrder: (data: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>
  updateOrder: (id: string, data: Partial<Order>) => Promise<void>
  deleteOrder: (id: string) => Promise<void>
  getOrdersByBusiness: (businessId: string) => Promise<void>
}

export default function useOrders(): UseOrdersReturn {
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const createOrder = useCallback(async (data: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/orders/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Error al crear pedido')
      }

      const orderData = await response.json()
      setOrders(prev => [...prev, orderData])
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Error desconocido'))
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [])

  const updateOrder = useCallback(async (id: string, data: Partial<Order>) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/orders/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Error al actualizar pedido')
      }

      const orderData = await response.json()
      setOrders(prev => prev.map(order => order.id === id ? orderData : order))
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Error desconocido'))
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [])

  const deleteOrder = useCallback(async (id: string) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/orders/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Error al eliminar pedido')
      }

      setOrders(prev => prev.filter(order => order.id !== id))
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Error desconocido'))
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [])

  const getOrdersByBusiness = useCallback(async (businessId: string) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/orders/business/${businessId}`)

      if (!response.ok) {
        throw new Error('Error al obtener pedidos')
      }

      const ordersData = await response.json()
      setOrders(ordersData)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Error desconocido'))
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    orders,
    isLoading,
    error,
    createOrder,
    updateOrder,
    deleteOrder,
    getOrdersByBusiness,
  }
}