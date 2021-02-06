<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <site-title :title="site.title" />
      <v-spacer></v-spacer>
      <site-sign />
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" width="400">
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

      <site-menu :items="site.menu" />
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>

    <site-footer :footer="site.footer" />
  </v-app>
</template>

<script>
import SiteTitle from "@/views/site/title";
import SiteFooter from "@/views/site/footer";
import SiteMenu from "@/views/site/menu";
import SiteSign from "@/views/site/sign";

export default {
  name: "App",
  components: {
    SiteTitle,
    SiteFooter,
    SiteMenu,
    SiteSign
  },
  data() {
    return {
      drawer: false,
      site: {}
    };
  },
  created() {
    this.subscribe();
  },
  methods: {
    subscribe() {
      this.$firebase
        .database()
        .ref()
        .child("site")
        .on(
          "value",
          (sn) => {
            const v = sn.val();
            if (!v) {
              this.$firebase
                .database()
                .ref()
                .child("site")
                .set(this.site);

              return;
            }
            if (!v.footer) {
              v.footer = "Modify Footer";
            }
            if (!v.title) {
              v.title = "Modify Title";
            }
            if (!v.menu) {
              v.menu = [];
            }
            this.site = v;
            console.log("subscribe :", this.site);
          },
          (e) => {
            console.log(e.message);
          }
        );
    }
  }
  //   save() {
  //     console.log("save firebase");
  //     this.$firebase
  //       .database()
  //       .ref()
  //       .child("site")
  //       .set({
  //         title: "abcd",
  //         text: "ttttt",
  //         menu: [
  //           {
  //             title: "home",
  //             active: true,
  //             icon: "mdi-home",
  //             subItems: [
  //               {
  //                 title: "Dashboard",
  //                 to: "/"
  //               },
  //               {
  //                 title: "about",
  //                 to: "/about"
  //               }
  //             ]
  //           },
  //           {
  //             icon: "mdi-silverware-fork-knife",
  //             subItems: [
  //               {
  //                 title: "XXX",
  //                 to: "/xxx"
  //               }
  //             ],
  //             title: "Dining"
  //           }
  //         ]
  //       });
  //   },
  //   read() {
  //     this.$firebase
  //       .database()
  //       .ref()
  //       .child("abcd")
  //       .on("value", (sn) => {
  //         console.log(sn);
  //         console.log(sn.val());
  //       });
  //   },
  //   async readOne() {
  //     const sn = await this.$firebase
  //       .database()
  //       .ref()
  //       .child("abcd")
  //       .once("value");
  //     console.log(sn.val());
  //   }
  // }
};
</script>
