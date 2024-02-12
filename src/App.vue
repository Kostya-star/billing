<script setup lang="ts">
import '@/styles/main.scss'
import Navigation from '@/components/Navigation/Navigation'
import Navbar from '@/components/Navbar/Navbar'
import BillingMainPage from '@/pages/BillingMainPage'
</script>

<template>
  <div class="main">
    <Navigation /> 
    <div class="content">
      <Navbar />
      <div class="pages">
        <BillingMainPage />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  gap: 10px;
  padding: 10px;
  background-color: #f9f9f9;
}

.content {
  flex-grow: 1;
  border-radius: var(--border-radius);
  height: 100vh;
}

.pages {
  padding-top: 20px;
}
</style>
