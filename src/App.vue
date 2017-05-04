<template>
  <div class="layout">
    <AppHeader></AppHeader>
    <div class="layout-router">
      <router-view></router-view>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>
<script type="es6">
  import AppHeader from '@/components/header'
  import AppFooter from '@/components/footer'
  export default {
    name: 'App',
    components: {
      AppHeader,
      AppFooter
    }
  }
</script>
