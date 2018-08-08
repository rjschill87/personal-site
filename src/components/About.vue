<template>
  <div class="content-component">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      msg: 'Hi, I\'m Rob. And as I said before, I like to party.',
    };
  },
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
