<script setup lang="ts">
import DollarIcon from '@/assets/svg/dollar.svg'
import BillingIncome from '@/components/BillingMain/BillingIncome'
import BillingStatistics from '@/components/BillingMain/BillingStatistics'

</script>

<template>
  <div class="billing">
    <header class="header">
      <DollarIcon />
      <span>Биллинг</span>
    </header>

    <div class="statistics">
      <BillingIncome/>
      <BillingStatistics/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.billing {
  .header {
    display: flex;
    align-items: center;
    gap: 5px;
    padding-left: 15px;
    font-size: 20px;
    color: var(--red-dark);
    font-weight: 500;
    margin-bottom: 30px;

    svg {
      fill: var(--gray);
    }
  }

  .statistics {
    display: flex;
    gap: 20px;
  }
}
</style>