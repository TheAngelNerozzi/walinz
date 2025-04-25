// Tipos y constantes comunes para el proyecto

export type Industry = 
  | 'restaurant'
  | 'cafe'
  | 'bakery'
  | 'beauty'
  | 'retail'
  | 'professional'
  | 'digital'
  | 'travel'

export type Plan = 'free' | 'basic' | 'pro' | 'enterprise'

export interface User {
  id: string
  email: string
  name: string
  industry?: Industry
  plan?: Plan
  createdAt: Date
  updatedAt: Date
}

export interface Business {
  id: string
  name: string
  industry: Industry
  description?: string
  logo?: string
  website?: string
  whatsapp?: string
  address?: string
  userId: string
  createdAt: Date
  updatedAt: Date
}

export interface Order {
  id: string
  businessId: string
  customerName: string
  customerPhone: string
  items: OrderItem[]
  total: number
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  createdAt: Date
  updatedAt: Date
}

export interface OrderItem {
  id: string
  name: string
  quantity: number
  price: number
  notes?: string
}

export const BUSINESS_TYPES = {
  RESTAURANT: 'restaurant',
  CAFE: 'cafe',
  BAKERY: 'bakery',
  BEAUTY: 'beauty',
  RETAIL: 'retail',
  PROFESSIONAL: 'professional',
  DIGITAL: 'digital',
  TRAVEL: 'travel'
} as const

export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled'
} as const