import { useState, useCallback } from 'react'

interface WhatsAppMessage {
  phone: string
  message: string
  template?: string
}

interface UseWhatsAppReturn {
  sendMessage: (data: WhatsAppMessage) => Promise<void>
  isLoading: boolean
  error: Error | null
}

export default function useWhatsApp(): UseWhatsAppReturn {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const sendMessage = useCallback(async (data: WhatsAppMessage) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/whatsapp/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Error al enviar mensaje de WhatsApp')
      }

      const result = await response.json()
      return result
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Error desconocido'))
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    sendMessage,
    isLoading,
    error,
  }
}