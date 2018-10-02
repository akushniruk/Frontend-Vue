<template>
  <div class="home main-content">
    <div class="left-content slideUp">
      <h1>LOREM IPSUM 1</h1>

      <p class="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p class="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

      <router-link to="two"><img src="../assets/arrow.svg" class="arrow arrow-down"></router-link>
    </div>

    <div class="right-content img2">
      <img src="../assets/img22.png" class="img2" height="100%">
    </div>
  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld'

  export default {
    name: 'portfolione',
    components: {
      HelloWorld
    }
  }
</script>

<style lang="scss" scoped>

  $page_color: #585652;

  h1{
    color: $page_color !important;
  }

</style>
