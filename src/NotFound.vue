<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>404</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="https://vbuk.no" target="_blank">
        <span class="mr-2">vbuk.no</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container lighten-5 grid-list-md text-xs-center>
        <v-layout row>
          <v-flex xs12 sm6 md5>
            Denne siden finnes ikke ta kontakt med <a href="mailto:post@vbuk.no">post@vbuk.no</a>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

export default {
  name: "NotFound",
  data: () => ({
    //
  })
};
</script>