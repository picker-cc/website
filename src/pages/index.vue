<template>
  <div class="center">
    <Home />
    <!--    <cx-button-->
<!--      :active="active == 0"-->
<!--      @click="active = 0"-->
<!--    >-->
<!--      Active-->
<!--    </cx-button>-->
<!--    <cx-button-->
<!--      :active="active == 1"-->
<!--      @click="active = 1"-->
<!--    >-->
<!--      Default-->
<!--    </cx-button>-->
<!--    <cx-button disabled >Disabled</cx-button>-->
  </div>
</template>
<script lang="ts">
  import {Component, Vue} from 'nuxt-property-decorator'
  import Home from "@/components/Home.vue";
  @Component({
    components: {
      Home
    }
  })
  export default class Index extends Vue{
    data:() => ({
      active: 0
    })
  }
</script>

