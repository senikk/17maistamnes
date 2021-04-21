<template>
  <v-app id="main">
    <v-content>
      <v-container lighten-5 grid-list-md text-xs-center>
        <v-layout row>
          <v-flex xs12 sm6 md6>
            <Post title="Program for 17. mai 2021 på Stamnes">
              <span>Årets arrangement vil foregå mellom kirken og bedehuset.</span>
                <v-data-table
                  :headers="calendarh"
                  :items="calendar"
                  hide-default-footer
                >
                  <template v-slot:item.title="{ item }">
                    <a v-if="item.website" target="_blank" :href="item.website">
                      {{ item.title }}
                    </a>
                    <span v-if="!item.website">{{ item.title }}</span>
                  </template>
                </v-data-table>
            </Post>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <Post title="">
              <v-list-item>
                <img width="100%" src="hipp-hurra.png"/>
              </v-list-item>
            </Post>
            <Contact/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<style scoped>
  #main {
    background-image: url('./assets/geithaugen.jpg');
    background-color: red;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>

<script>
import Post from "./components/Post";
import Contact from "./components/Contact";

export default {
  name: "Stamnes",
  components: {
    Post, Contact
  },
  data: () => ({
    calendarh: [
      {
        text: 'Tittel',
        value: 'title',
        align: 'left',
        sortable: false
      },
      {
        text: 'Tid',
        value: 'time'
      }
    ],
    calendar: [
      {
        title: "Gudstjeneste",
        time: "12:00-12:45",
      },
      {
        title: "Kransenedlegging ved bautastein v. 7.klasse",
        time: "",
      },
      {
        title: "Barnehageborna syng",
        time: "",
      },
      {
        title: "17. mai-tale",
        time: "",
      },
      {
        title: "Leker for barn og ungdom under 20",
        time: "",
      },
      {
        title: "Utdeling av JA-pris - vi tar i mot forslag",
        time: "",
        website: "https://japris.vbuk.no"
      },
    ]
  })
};
</script>
