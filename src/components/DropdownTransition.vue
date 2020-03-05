<template>
  <transition
    name="dropdown"
    @enter="setHeight"
    @after-enter="unsetHeight"
    @before-leave="setHeight"
  >
    <slot/>
  </transition>
</template>

<script lang="ts">
  import {Component, Vue} from 'nuxt-property-decorator'

  @Component({
    name: 'DropdownTransition'
  })
  export default class DropdownTransition extends Vue {
    // name: 'DropdownTransition',

    setHeight(items: HTMLStyleElement) {
      // explicitly set height so that it can be transitioned
      items.style.height = items.scrollHeight + 'px'
    }

    unsetHeight(items: HTMLStyleElement) {
      items.style.height = ''
    }
  }
</script>

<style lang="stylus">
  .dropdown-enter, .dropdown-leave-to
    height 0 !important

</style>
