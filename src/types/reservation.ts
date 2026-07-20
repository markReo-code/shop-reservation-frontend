export type ReservationStatus = 'PENDING' | 'CONFIRMED' | 'CANCELED' | 'COMPLETED'

export type Reservation = {
  id: number
  customerName: string
  shopName: string
  reservedAt: string
  status: ReservationStatus
}
