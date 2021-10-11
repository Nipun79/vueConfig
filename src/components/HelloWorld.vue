<template>
  <v-container>
      {{data.msg}}
  </v-container>
</template>

<script >
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import {vxm} from "../store/store.vuex"
  @Component()
  export default class extends Vue{
data=vxm.utility
  }
</script>
