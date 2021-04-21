<template>
  <v-card class="mb-4 mr-2 mx-auto">
    <v-card-text>
        <p class="display-1" v-bind:style="style">
            {{title}}
        </p>
        <slot></slot>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  computed: {
    style() {
      return {
        'color': `${this.color || 'red'} !important`,
      }
    }
  },
  data: () => ({
  }),
  props: {
      title: String,
      color: String
  }
};
</script>
