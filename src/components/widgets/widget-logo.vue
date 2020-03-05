<template>
  <div class="component5 grid-item">
    <i class='bx bxs-star'></i>
    <div class="con-img">
      <img src="/vue-logo.png" alt="">
    </div>
    <h4>
      {{title}}
    </h4>

    <p>
      {{description}}
    </p>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'nuxt-property-decorator'

  export default class WidgetLogo extends Vue {
    private title: string = 'Vuejs Components'
    private description: string = 'Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。'
  }
</script>

<style lang="stylus">
  getColor(colorx, alpha = 1)
    unquote("rgba(var(--cx-" + colorx + "), " +alpha + ")")

  getVar(var)
    unquote("var(--cx-" + var + ")")
  .grid-item
    margin-bottom: 40px;
  .component5
    display flex
    align-items center
    justify-content center
    flex-direction column
    /*position absolute*/
    /*width 260px*/
    /*width 20%*/
    width 30%
    background getVar(theme-layout)
    padding 20px
    border-radius 30px
    /*left 860px*/
    /*top 85px*/
    user-select none
    box-shadow 0px 15px 30px -8px rgba(0, 0, 0, .08)
    transition all .25s ease
    animation componentAnimate 13s infinite ease reverse

    &:hover
      box-shadow 0px 0px 0px 0px rgba(0, 0, 0, .1)
      transform translate(0, 7px)

      .con-img
        transform scale(1.2) translate(0px, -10px)

    i
      position absolute
      top 15px
      right 15px
      fill getVar(theme-color)
      opacity .2

    p
      font-size .7rem
      opacity .6
      text-align center
      margin 0px

    h4
      margin 0px
      margin-top 8px
      margin-bottom 6px
      font-size .8rem
      margin 10px 0px

    .con-img
      width 90px
      height 90px
      border-radius 25px
      overflow hidden
      background alpha(#41b883, .08)
      transition all .25s ease

    img
      padding 20px
      width 100%

</style>
