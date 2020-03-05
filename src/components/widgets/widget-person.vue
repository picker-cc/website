<template>
  <div class="component1 grid-item">
    <div class="avatar">
      <img class="not-darken" src="/persons/baisheng.jpeg" alt="">
      <img class="back not-darken" src="/foto1.png" alt="">
      <img class="has-darken" src="/foto12.png" alt="">
      <img class="back has-darken" src="/foto12.png" alt="">
      <span class="badge">8</span>
    </div>

    <div class="con-text">
      <h4>
        刘佰晟
      </h4>
      <p>
        一个反脆弱践行者，一个独立创业者。
      </p>

      <footer>
        <cx-button  dark icon>
          <i class='bx bx-home-smile'></i>
        </cx-button>
        <cx-button dark icon>
          <i class='bx bxl-linkedin' ></i>
        </cx-button>
        <cx-button dark icon>
          <i class='bx bxl-github' ></i>
        </cx-button>
<!--        <cx-button icon>-->
<!--          Open-->
<!--        </cx-button>-->
<!--        <cx-button dark shadow>-->
<!--          cancel-->
<!--        </cx-button>-->
      </footer>
    </div>
  </div>
</template>
<script lang="ts">
  import {Component, Vue} from 'nuxt-property-decorator'
  @Component({})
  export default class WidgetPerson extends Vue{
  }
</script>
<style lang="stylus">
  getColor(colorx, alpha = 1)
    unquote("rgba(var(--cx-" + colorx + "), " +alpha + ")")

  getVar(var)
    unquote("var(--cx-" + var + ")")
  .grid-item
    margin-bottom: 40px;
  .component1
    border-radius 35px
    /*width 400px*/
    /*width 260px;*/
    width 30%
    box-shadow 0px 15px 30px -8px rgba(0, 0, 0, .08)
    display flex
    align-items center
    justify-content center
    padding 8px 10px
    background getVar(theme-layout)
    transition all .25s ease
    animation componentAnimate 15s infinite ease
    /*position absolute*/
    /*top 0px*/
    /*left 0px*/

    .con-text
      padding 0px 20px
      position relative
      background transparent
      width calc(100% - 100px)
      padding-left 23px

      footer
        display flex
        align-items center
        justify-content center
        position absolute
        bottom -30px

        .cx-button--shadow
          background getVar(theme-layout) !important
          color getVar(theme-color) !important

      p
        font-size .8rem
        padding-bottom 20px
        margin 0px
        opacity .6

      h4
        margin 0px
        padding 0px
        padding-bottom 5px

    .avatar
      border-radius 30%
      position relative
      width 90px
      height 90px
      z-index 200

      img
        border-radius inherit
        z-index 100
        position relative
        width 100%

        &.back
          opacity .25
          position absolute
          bottom -20px
          left 0px
          filter blur(15px)
          z-index 10

      .badge
        position absolute
        bottom 4px
        right -6px
        background getColor('danger')
        box-shadow 0px 4px 10px 0px getColor('danger', .6)
        width 20px
        height 20px
        color #fff
        font-weight bold
        display flex
        align-items center
        justify-content center
        font-size .6rem
        border-radius 50%
        z-index 120
        user-select none

</style>
