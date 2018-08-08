<template>
  <div id="app">
    <div class="container">
      <div class="sidebar-container">
        <div class="sidebar">
          <profile-card />
          <nav-card />
        </div>
      </div>
      <div class="main">
        <div class="content-container">
          <div class="content">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavCard from './components/NavCard';
import ProfileCard from './components/ProfileCard';

export default {
  name: 'App',
  components: {
    NavCard,
    ProfileCard,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Merriweather:700');
@import './assets/scss/normalize.css';
@import './assets/main.scss';

html {
  height: 100%;
  // background-color: #f7f9fc;
  background-color: $color-offwhite;
}

body {
  height: 100%;
}

ul {
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  -webkit-padding-start: 0;
}

a {
  text-decoration: none;
  color: $color-gray;
  border-bottom: 1px $color-blue solid;
}

#app {
  font-family: 'Merriweather', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  display: flex;
  align-content: center;
  justify-content: center;
}

.sidebar-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  flex-direction: column;
  max-width: rem(300px);
  padding: rem($spacing-med);
}

.sidebar {
  >:not(:last-child) {
    margin-bottom: rem($spacing-lg);
  }
}

.main {
  flex: 3;
  display: flex;
  padding: rem($spacing-med);
}

.content-container {
  padding: rem($spacing-med);
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  box-shadow: $box-shadow-default;
  border-radius: $border-radius-default;
  border-left: $border-small $color-yellow solid;
  background-color: $color-white;
}
</style>
