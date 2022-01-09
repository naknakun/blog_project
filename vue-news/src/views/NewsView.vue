<template>
  <div>
    <div v-for="(user, index) of this.$store.state.news" :key="index">{{ user.title }}</div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style>

</style>