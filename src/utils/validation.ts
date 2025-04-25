import { z } from 'zod'

export const businessSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  industry: z.enum(['restaurant', 'cafe', 'bakery', 'beauty', 'retail', 'professional', 'digital', 'travel']),
  description: z.string().optional(),
  logo: z.string().url('URL de logo inválida').optional(),
  website: z.string().url('URL de sitio web inválida').optional(),
  whatsapp: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Número de WhatsApp inválido').optional(),
  address: z.string().optional(),
})

export const orderSchema = z.object({
  customerName: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  customerPhone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Número de teléfono inválido'),
  items: z.array(z.object({
    name: z.string().min(1, 'El nombre del item es requerido'),
    quantity: z.number().min(1, 'La cantidad debe ser mayor a 0'),
    price: z.number().min(0, 'El precio debe ser mayor o igual a 0'),
    notes: z.string().optional(),
  })).min(1, 'Debe incluir al menos un item'),
  total: z.number().min(0, 'El total debe ser mayor o igual a 0'),
})

export const userSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
})

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount)
}

export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})$/)
  if (match) {
    return `${match[1]} ${match[2]} ${match[3]}`
  }
  return phone
}

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}