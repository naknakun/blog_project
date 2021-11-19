<template>
  <div>
    <div>
      <v-app-bar app color="primary">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-spacer />
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" app>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6"> Application </v-list-item-title>
            <v-list-item-subtitle> subtext </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script>
export default {
  name: 'App',

  // components: {
  //   BlogHeader: () => import('@/components/BlogHeader'),
  //   BlogContainer: () => import('@/components/BlogContainer'),
  //   BlogFooter: () => import('@/components/BlogFooter'),
  // },

  data: () => ({
    drawer: false,
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
      { title: 'GridSystem', icon: 'mdi-image', to: '/grid-system' },
    ],
    right: null,
  }),
};
</script>
