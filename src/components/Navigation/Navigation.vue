<script setup lang="ts">
import Header from './Header.vue'
import Menu from './Menu.vue'
import AdminSection from './AdminSection.vue'
</script>

<template>
  <div class="navigation">
    <div class="navigation__wrapper">
      <Header />

      <Menu />

      <AdminSection />
    </div>
  </div>
</template>

<style scoped lang="scss">
.navigation {
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
  background-color: #474747;
  color: #d6d6d6;
  padding: 10px 20px;
  max-width: var(--navigation-width);
  border-radius: 10px;

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
}
</style>
