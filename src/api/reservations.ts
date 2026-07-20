import type { Reservation } from '@/types/reservation'

export async function getReservations(): Promise<Reservation[]> {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/reservations`)

  if (!response.ok) {
    throw new Error('データを取得できませんでした')
  }

  return response.json()
}
