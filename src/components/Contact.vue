<template>
    <Post title="Leder">
        <v-list-item>
            <v-list-item-icon>
                <v-icon color="indigo">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
                Terje Pedersen
            </v-list-item-title>
        </v-list-item>
        <v-list-item>
            <v-list-item-icon>
            <v-icon color="indigo">mdi-email</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title>
                <a href="mailto:post@vbuk.no">terje@senikk.com</a>
            </v-list-item-title>
            <v-list-item-subtitle>E-post</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-list-item>
            <v-list-item-icon>
            <v-icon color="indigo">mdi-phone</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title>
                <a href="tel:91334697">91334697</a>
            </v-list-item-title>
            <v-list-item-subtitle>Telefon</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        </v-list>
    </Post>
</template>

<script>
import Post from "./Post";

export default {
  data: () => ({
  }),
  components: {
    Post
  }
};
</script>