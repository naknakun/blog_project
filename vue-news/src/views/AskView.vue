<template>
  <div>
    <div v-for="(item, index) of fetchedAsk" :key="index">{{ item.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedAsk'])

    // 1
    // fetchedAsk() {
    //   return this.$store.state.ask;
    // },

    // 2
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // })
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>