<template>
  <div id="app">

    <div class="container">
      <div class="inner">
        <nav>
          <router-link to="/" id="logo">Logo Link</router-link>

          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
          </ul>
        </nav>

        <transition name="fade" mode="out-in">
          <router-view />
        </transition>

      </div>
    </div>

  </div>
</template>

<script>

</script>

<style lang="scss" src="./global.scss">

</style>
