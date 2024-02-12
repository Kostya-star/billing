<script setup lang="ts">
import AvatarIcon from '@/assets/svg/avatar';
</script>

<template>
  <div class="header">
    <span class="header__label">RKO Group</span>
    <AvatarIcon class="header__avatar" />
    <span class="header__userName">
      Anton
    </span>
    <span class="header__role">
      Супер пользователь
    </span>
    <div class="header__btn-actions">
      <button>МОЙ АККАУНТ</button>
      <button>ВЫХОД</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 300;
  gap: 10px;

  &__avatar {
    width: 60px;
    height: 60px;
  }

  &__userName {
    font-weight: 600;
  }

  &__role {
    font-size: 13px;
    color: var(--gray);
  }

  &__btn-actions {
    display: flex;
    gap: 10px;

    button {
      appearance: none;
      border: 0;
      background-color: transparent;
      color: #b98c51;
      font-weight: 500;
    }
  }
}
</style>