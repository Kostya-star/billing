<script setup lang="ts">
import BoxIcon from '@/assets/svg/box';
import MessageIcon from '@/assets/svg/message';
import DatabaseIcon from '@/assets/svg/database';
import VKIcon from '@/assets/svg/vk';
import TelegramIcon from '@/assets/svg/telegram';
import CommentIcon from '@/assets/svg/comment-empty';
import SettingsIcon from '@/assets/svg/settings';
</script>

<template>
  <nav class="navbar">
    <div class="content">
      <div class="savings">
        <DatabaseIcon />
        <span>
          Накоплено монет: <b>7</b>
        </span>
      </div>
      <div class="icons">
        <BoxIcon />
        <MessageIcon />
      </div>
    </div>

    <div class="info">
      <div class="info__contacts">
        <p>
          <VKIcon />
          <span>Поддержка: <span class="email">support@rko-group.ru</span></span>
        </p>
        <p>
          <TelegramIcon />
          <span>Режим работы: 9:00 - 18:00 по МСК</span>
        </p>
      </div>

      <div class="info__actions">
        <button>
          <CommentIcon />
          <span>
            ЧАТ ПОДДЕРЖКИ
          </span>
        </button>
        <button class="button">
          <SettingsIcon />
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 15px 30px 15px 15px;
  border: 1px solid #ededed;
  background-color: white;
}

.content {
  display: flex;
  align-items: center;
  gap: 15px;

  .savings {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px dashed var(--pink);
    border-radius: 5px;
    color: var(--pink);

    svg {
      fill: var(--pink);
    }
  }

  .icons {
    display: flex;
    gap: 10px;

    svg {
      &:nth-child(2) {
        fill: var(--red-dark);
      }

    }
  }
}

.info {
  display: flex;
  gap: 15px;

  &__contacts {
    .email {
      color: #7fb4f2;
    }

    svg {
      width: 24px;
      height: 24px;
      fill: rgb(99, 99, 212);
      margin-right: 25px;
    }

    p {
      display: flex;
      align-items: center;
    }
  }

  &__actions {
    display: flex;
    gap: 10px;
    button {
      appearance: none;
      border: 0;
      font-weight: 500;
      color: white;
      background-color: transparent;

      &:nth-child(1) {
        background-color: var(--pink);
        border-radius: 5px;
        padding: 5px 10px;
        display: flex;
        align-items: center;
        gap: 5px;
        svg {
          fill: white;
        }
      }
      &:nth-child(2) {
        svg {
          fill: var(--red-dark);
        }
      }
    }
  }
}</style>