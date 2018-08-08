<template>
  <div class="content-component">
    Hi, I'm Rob. And I like to <router-link :to=partyLink >party.</router-link>
  </div>
</template>

<script>
export default {
  name: 'WelcomeCard',
  data() {
    return {
      msg: 'Hi, I\'m Rob. And I like to party.',
      partyLink: '/party',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './../assets/main.scss';

h1, h2 {
  font-weight: normal;
}
</style>
