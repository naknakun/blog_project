<template>
  <div>
    <v-app>
      <v-card>
        <blog-header></blog-header>
        <blog-container></blog-container>
      </v-card>
      <blog-footer></blog-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',

  components: {
    BlogHeader: () => import('@/components/BlogHeader'),
    BlogContainer: () => import('@/components/BlogContainer'),
    BlogFooter: () => import('@/components/BlogFooter'),
  },

  data: () => ({
    //
  }),
};
</script>
