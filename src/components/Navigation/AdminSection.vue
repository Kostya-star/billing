<script setup lang="ts">
import DashboardIcon from '@/assets/svg/dashboard'
import NewsIcon from '@/assets/svg/news'
import BankIcon from '@/assets/svg/bank'
import EquipmentIcon from '@/assets/svg/equipment'
import LetterIcon from '@/assets/svg/letter'
import ThumbsUpDownIcon from '@/assets/svg/thumbs-up-down'
import ProductsListIcon from '@/assets/svg/products-list'
import DollarIcon from '@/assets/svg/dollar'
import ToolBuildIcon from '@/assets/svg/tool-build'

const adminMenu = [
  {
    name: 'Дашборд',
    icon: DashboardIcon,
  },
  {
    name: 'Новости',
    icon: NewsIcon,
  },
  {
    name: 'Банки',
    icon: BankIcon,
  },
  {
    name: 'Касса и оборудование',
    icon: EquipmentIcon,
  },
  {
    name: 'Рассылка',
    icon: LetterIcon,
  },
  {
    name: 'Ликвидация компаний',
    icon: ThumbsUpDownIcon,
  },
  {
    name: 'Генерация заявок',
    icon: ProductsListIcon,
  },
  {
    name: 'Редактирование ставок',
    icon: DollarIcon,
  },
  {
    name: 'Инструменты',
    icon: ToolBuildIcon,
  },
]
</script>


<template>
  <div class="admin">
    <div class="admin__header">АДМИНИСТРИРОВАНИЕ</div>

    <ul class="admin__menu">
      <li v-for="item in adminMenu" :key="item.name" class="admin__menu__item">
        <component :is="item.icon" />
        {{ item.name }}
      </li>
    </ul>

  </div>
</template>

<style scoped lang="scss">
.admin {
  &__header {
    position: relative;
    color: #6b6b6b;
    margin-bottom: 20px;
    text-align: center;

    &::after {
      content: '';
      width: var(--navigation-width);
      height: 1px;
      background-color: #6b6b6b;
      position: absolute;
      bottom: -5px;
      left: -20px;
    }
  }

  &__menu {
    display: flex;
    flex-direction: column;
    gap: 15px;
    list-style: none;

    &__item {
      display: flex;
      align-items: center;
      gap: 10px;

      svg {
        fill: #b4b4b4;
      }
    }
  }
}
</style>