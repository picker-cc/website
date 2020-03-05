<template>
  <div class="theme-container">
<!--    <HeaderNotification/>-->
    <Navbar />
    <nuxt/>
  </div>
</template>
<script lang="ts">
  import {Component, Vue} from 'nuxt-property-decorator'
  import HeaderNotification from "@/components/HeaderNotification.vue";
  import Navbar from "@/components/Navbar.vue";
  @Component({
    components: {
      Navbar,
      HeaderNotification,
    }
  })
  export default class DefaultLayout extends Vue {

  }
</script>
