<template>
  <div class="about main-content">
    <div class="left-content">
      <h1>About me</h1>
      <p class="subtxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

      <button><router-link to="/portfolio/one">Look at my work</router-link></button>
    </div>

    <div class="right-content">
      <p>LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>

  </div>
</template>

<style lang="scss" scoped>
  .left-content{
     background-color: whitesmoke;
  }

  .right-content{
    background: #fff;
    padding: 50px;
    margin-top: 80px;
    display: block;
  }

  button{
    font-size: 1.5em;
    margin-top: 100px;
  }

  .subtxt{
    font-size: 1.5em;
    margin-top: 30px;
  }
</style>
