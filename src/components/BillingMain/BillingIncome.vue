<script setup lang="ts"></script> 

<template>
  <div class="income">
    <div class="heading">Мои доходы</div>

    <div class="stats">
      <div class="lables">
        <span>Выплачено</span>
        <span>К оплате</span>
      </div>
      <div class="price">
        <span>2 120 350 ₽</span>
        <span>56 000 ₽</span>
      </div>
    </div>

    <button>Запросить акт</button>
  </div>
</template>

<style scoped lang="scss">
.income {
  padding: 10px 15px;
  border-radius: 10px;
  background-color: white;

  .heading {
    color: var(--gray-dark);
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .stats {
    display: flex;
    gap: 25px;
    margin-bottom: 20px;
    font-weight: 600;
    .lables {
      display: flex;
      flex-direction: column;
      gap: 10px;
      color: var(--gray);
      font-size: 15px;
    }
    .price {
      display: flex;
      flex-direction: column;
      gap: 7px;
      span {
        &:nth-child(1) {
          color: var(--pink);
          text-decoration: line-through;
        }
        &:nth-child(2) {
          color: var(--orange);
          text-decoration: underline;
        }
      }
    }
  }

  button {
    appearance: none;
    border: 0;
    font-weight: 500;
    color: white;
    background-color: var(--pink);
    border-radius: 5px;
    padding: 10px 0px;
    width: 100%;
  }
}
</style>