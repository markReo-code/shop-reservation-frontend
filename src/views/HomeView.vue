<template>
  <section class="page-heading">
    <div>
      <p class="page-label">SHOP RESERVATION</p>
      <h1 class="page-title">予約管理システム</h1>
      <div class="page-meta">
        <p class="page-description">
          Spring Bootで構築した2つのAPIから、予約情報とスタッフ情報を取得しています。
        </p>
      </div>
    </div>

    <div class="home-card-grid" aria-label="管理メニュー">
      <RouterLink to="/reservations" class="home-card">
        <p class="home-card__label">Reservation API</p>
        <h2 class="home-card__title">予約一覧を見る</h2>
        <p class="home-card__description">予約状況、店舗、日時、ステータスを確認します。</p>
      </RouterLink>

      <RouterLink to="/staff" class="home-card">
        <p class="home-card__label">Staff API</p>
        <h2 class="home-card__title">スタッフ一覧を見る</h2>
        <p class="home-card__description">管理者・店舗責任者・スタッフを確認します。</p>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.home-card-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;
  margin-top: 40px;
}

.home-card {
  /* display: flex; */
  min-height: 220px;
  /* flex-direction: column;
  justify-content: flex-end; */
  padding: 32px;
  border: 1px solid #e8e8e4;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 18px 36px rgba(23, 23, 23, 0.06);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.home-card:hover {
  border-color: #d2d2cc;
  box-shadow: 0 22px 44px rgba(23, 23, 23, 0.1);
  transform: translateY(-2px);
}

.home-card__label {
  margin-bottom: 18px;
  color: #6f6f68;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.home-card__title {
  margin-bottom: 14px;
  font-size: 24px;
  line-height: 1.4;
}

.home-card__description {
  color: #555;
  line-height: 1.8;
}

@media screen and (max-width: 768px) {
  .home-card-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 32px;
  }

  .home-card {
    min-height: 180px;
    padding: 24px;
  }

  .home-card__title {
    font-size: 20px;
  }
}
</style>
