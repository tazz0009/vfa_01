<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <site-title :title="title" />
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <site-menu />
    </v-navigation-drawer>
    <v-content>
      <router-view />
    </v-content>

    <site-footer :footer="footer" />
  </v-app>
</template>

<script>
import SiteTitle from "@/views/site/title";
import SiteFooter from "@/views/site/footer";
import SiteMenu from "@/views/site/menu";

export default {
  name: "App",
  components: {
    SiteTitle,
    SiteFooter,
    SiteMenu
  },
  data: () => ({
    drawer: false,
    title: "Page Title",
    footer: "Footer",
    right: null
  })
};
</script>
