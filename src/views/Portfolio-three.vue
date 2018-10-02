<template>
  <div class="three main-content">
    <div class="left-content slideUp">

      <router-link to="two"><img src="../assets/arrow-up.svg" class="arrow arrow-up"></router-link>

      <h1>LOREM IPSUM 3</h1>

      <p class="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p class="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

    </div>

    <div class="right-content img2">
      <img src="../assets/img44.jpg" height="100%"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'portfolithree',
  }
</script>

<style lang="scss" scoped>

  $page_color: #585652;

  h1{
    color: $page_color !important;
  }

</style>
