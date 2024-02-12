<script setup lang="ts">
import ApplicationIcon from '@/assets/svg/application'
import BankIcon from '@/assets/svg/bank'
import WebMasterIcon from '@/assets/svg/web-master'
import ComputerIcon from '@/assets/svg/computer'
import ToolsIcon from '@/assets/svg/constructions-tools'
import ColleaguesIcon from '@/assets/svg/colleagues'
import AgentsIcon from '@/assets/svg/agents'
import ProductsListIcon from '@/assets/svg/products-list'
import DollarIcon from '@/assets/svg/dollar'
import StatsIcon from '@/assets/svg/statistics'
import DocsIcon from '@/assets/svg/documents'
import QuestionIcon from '@/assets/svg/question'

const navMenu = [
  {
    name: 'Заявки',
    icon: ApplicationIcon,
    suffix: true
  },
  {
    name: 'Банковские Гарантии',
    icon: BankIcon
  },
  {
    name: 'Веб-мастерам',
    icon: WebMasterIcon
  },
  {
    name: 'Услуги',
    icon: ComputerIcon
  },
  {
    name: 'Инструменты продаж',
    icon: ToolsIcon
  },
  {
    name: 'Сотрудники',
    icon: ColleaguesIcon
  },
  {
    name: 'Агенты',
    icon: AgentsIcon,
    suffix: true
  },
  {
    name: 'Продукты',
    icon: ProductsListIcon
  },
  {
    name: 'Биллинг',
    icon: DollarIcon,
    suffix: true
  },
  {
    name: 'Статистика',
    icon: StatsIcon
  },
  {
    name: 'Документы',
    icon: DocsIcon
  },
  {
    name: 'База знаний',
    icon: QuestionIcon
  },
]

</script>

<template>
  <ul class="menu">
    <li v-for="item in navMenu" :key="item.name" :class="{ 'menu__item': true, 'suffix-active': item.suffix }">
      <component :is="item.icon" />
      {{ item.name }}
    </li>
  </ul>
</template>

<style scoped lang="scss">
.menu {
  display: flex;
  flex-direction: column;
  gap: 15px;
  list-style: none;

  &__item {
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
      fill: var(--gray);
    }

    &.suffix-active {
      position: relative;
      width: fit-content;

      &::after {
        position: absolute;
        left: calc(100% + 5px);
        content: '77';
        background-color: #f3b15b;
        border-radius: 50%;
        padding: 5px 8px;
        font-size: 13px;
        color: white;
      }
    }
  }
}
</style>