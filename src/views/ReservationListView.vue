<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getReservations } from '@/api/reservations'
import type { Reservation } from '@/types/reservation'

const reservations = ref<Reservation[]>([])
const isLoading = ref(true)
const errorMessage = ref('')

function formatReservedAt(value: string): string {
  const date = new Date(value)

  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

onMounted(async () => {
  try {
    reservations.value = await getReservations()

    console.log('画面側で取得した予約一覧', reservations)
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '予約一覧の取得に失敗しました'
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <main class="reservation-page">
    <header class="page-header">
      <div>
        <p class="page-label">SHOP RESERVATION</p>
        <h1 class="page-title">予約一覧</h1>
        <div class="page-meta">
          <p class="page-description">ショップの予約状況を管理します。</p>
          <p v-if="!isLoading && !errorMessage" class="reservation-count">
            {{ reservations.length }}<span class="reservation-count-unit">件</span>
          </p>
        </div>
      </div>
    </header>

    <p v-if="isLoading" class="state-message">読み込み中です…</p>

    <p v-else-if="errorMessage" class="state-message state-message--error">
      {{ errorMessage }}
    </p>

    <p v-else-if="reservations.length === 0" class="state-message">予約はありません</p>

    <div v-else class="reservation-table-container">
      <table class="reservation-table">
        <thead>
          <tr>
            <th scope="col">予約ID</th>
            <th scope="col">お客様名</th>
            <th scope="col">店舗名</th>
            <th scope="col">予約日時</th>
            <th scope="col">ステータス</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="reservation in reservations" :key="reservation.id">
            <td>#{{ reservation.id }}</td>
            <td>{{ reservation.customerName }}</td>
            <td>{{ reservation.shopName }}</td>
            <td>{{ formatReservedAt(reservation.reservedAt) }}</td>
            <td>
              <span :class="`status-badge status-badge--${reservation.status.toLowerCase()}`">{{
                reservation.status
              }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped>
.reservation-page {
  width: min(1120px, calc(100% - 48px));
  margin: 0 auto;
  padding: 64px 0;
}

.reservation-count {
  flex-shrink: 0;
  font-size: 20px;
  font-weight: 500;
}

.reservation-count-unit {
  font-size: 14px;
  font-weight: 500;
  margin-left: 4px;
}

.reservation-table-container {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.reservation-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;

  min-width: 760px;
}

.reservation-table th,
.reservation-table td {
  padding: 16px 20px;
  border-bottom: 1px solid #e8eaf0;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.04em;
}

.reservation-table td {
  text-align: center;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  padding: 0 9px;
  border-radius: 999px;
  background: #efefed;
  color: #555;
  font-size: 11px;
  font-weight: 700;
}

.status-badge--confirmed {
  color: #287a47;
  background: #eaf5ee;
}

.status-badge--pending {
  color: #9a6815;
  background: #fff4dc;
}

.status-badge--canceled {
  color: #a83d3d;
  background: #fdecec;
}

.status-badge--completed {
  color: #666;
  background: #eeeeec;
}

@media screen and (max-width: 768px) {
  .reservation-page {
    width: 100%;
    margin: 12px auto;
    padding: 32px 20px;
  }

  .reservation-table th,
  .reservation-table td {
    padding: 14px 16px;
    font-size: 13px;
  }

  .reservation-count {
    font-size: 16px;
  }
}
</style>
