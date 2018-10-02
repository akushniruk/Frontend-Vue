<template>
  <div class="home main-content">
    <div class="left-content">
      <h1>LOREM IPSUM</h1>

      <p class="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p class="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    </div>

    <div class="right-content img1">
      <button><router-link to="/portfolio/one">Browse work</router-link></button>
    </div>
  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld'

  export default {
    name: 'home',
    components: {
      HelloWorld
    }
  }
</script>

<style scoped>
    .img1 {
      background: url(../assets/img11.jpg);
    }
</style>
