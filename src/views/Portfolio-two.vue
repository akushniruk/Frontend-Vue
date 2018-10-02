<template>
  <div class="two main-content">
    <div class="left-content slideUp">

      <router-link to="one"><img src="../assets/arrow-up.svg" class="arrow arrow-up"></router-link>

      <h1>LOREM IPSUM 2</h1>

      <p class="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p class="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

      <router-link to="three"><img src="../assets/arrow.svg" class="arrow arrow-down"></router-link>
    </div>

    <div class="right-content img2">
      <img src="../assets/img33.png" class="img2" height="100%">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'portfolitwo',
  }
</script>

<style lang="scss" scoped>

  $page_color: #585652;

  h1{
    color: $page_color !important;
  }

</style>
