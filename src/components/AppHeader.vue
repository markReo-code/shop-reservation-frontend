<script setup lang="ts"></script>

<template>
  <header class="header">
    <div class="header__inner">
      <RouterLink to="/">SHOP RESERVATION</RouterLink>

      <nav class="header__nav" aria-label="メインナビゲーション">
        <ul class="header__list">
          <li class="header__item"><RouterLink to="/" class="header__link">ホーム</RouterLink></li>
          <li class="header__item">
            <RouterLink to="/reservations" class="header__link">予約一覧</RouterLink>
          </li>
          <li class="header__item">
            <RouterLink to="/staff" class="header__link">スタッフ一覧</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header__inner {
  width: min(1120px, calc(100% - 48px));
  margin: 0 auto;
  padding-block: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__list {
  display: flex;
  align-items: center;
  gap: 30px;
}
</style>
