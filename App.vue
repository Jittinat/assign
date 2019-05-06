<template>
  <div id="app">
    <div class="ui inverted menu">
    <a class="active item" href="#/">
      <img src="./assets/logo.png">
    </a>
    <a class="item" href="#/HelloWorld">
      Contacts
    </a>
    <div class="right menu">
      <a class="item" href="#/"> <i class="user icon"></i></a>
    </div>
  </div>
  <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
