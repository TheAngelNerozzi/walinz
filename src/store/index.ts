import { create } from 'zustand'
import type { User, Business, Order } from '../types/common'

interface AppState {
  user: User | null
  business: Business | null
  orders: Order[]
  isLoading: boolean
  error: Error | null
  setUser: (user: User | null) => void
  setBusiness: (business: Business | null) => void
  setOrders: (orders: Order[]) => void
  setLoading: (isLoading: boolean) => void
  setError: (error: Error | null) => void
  reset: () => void
}

const initialState = {
  user: null,
  business: null,
  orders: [],
  isLoading: false,
  error: null,
}

export const useAppStore = create<AppState>((set) => ({
  ...initialState,

  setUser: (user) => set({ user }),
  setBusiness: (business) => set({ business }),
  setOrders: (orders) => set({ orders }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  reset: () => set(initialState),
}))