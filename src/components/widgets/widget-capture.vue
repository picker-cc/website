<template>
  <div class="component7 grid-item">
    <div class="con-img">
      <i class='bx bx-bookmark'></i>
      <img class="not-darken" src="/foto4.png" alt="">
      <img class="has-darken" src="/foto11.png" alt="">
    </div>

    <header>
<!--      <button icon dark shadow>-->
<!--        <i class='bx bxs-heart'></i>-->
<!--      </button>-->
      <button dark shadow>
        <i class='bx bxs-chat'></i> 12
      </button>
    </header>

    <div class="content-text">
      <h4>
        {{title}}
      </h4>
      <p>
        {{description}}
      </p>
    </div>

    <footer>
<!--      <cx-input v-model="input1" placeholder="Comment"/>-->
      <!-- <input placeholder="Comment" type="text" name="" id="comment"> -->
      <cx-button icon flat>
        <i class='bx bx-send'></i>
      </cx-button>
    </footer>
  </div>
</template>
<script lang="ts">
  import {Component, Vue} from 'nuxt-property-decorator'

  @Component({})
  export default class WidgetCapture extends Vue {
    title: string = '从这里开始'
    description: string = '这是一个好的资源站，她能给你与众不同的体验'
  }
</script>

<style scoped lang="stylus">
 /*
  @keyframes componentAnimate
    0%
      transform translate(0px)
    30%
      transform translate(0, -10px)
    50%
      transform translate(0, 4px)
    70%
      transform translate(0, -15px)
    100%
      transform translate(0px)
*/
  getColor(colorx, alpha = 1)
    unquote("rgba(var(--cx-" + colorx + "), " +alpha + ")")

  getVar(var)
    unquote("var(--cx-" + var + ")")
 .grid-item
    margin-bottom: 40px;
  .component7
    /*width 260px*/
    /*width 20%*/
    width 30%
    background getVar(theme-layout)
    border-radius 30px
    padding 15px
    /*position absolute*/
    /*left 760px*/
    /*top 410px*/
    z-index 100
    box-shadow 0px 15px 30px -8px rgba(0, 0, 0, .08)
    transition all .25s ease
    animation componentAnimate 15s infinite ease

    &:hover
      box-shadow 0px 0px 0px 0px rgba(0, 0, 0, .1)
      transform translate(0, 7px)

    footer
      display flex
      align-items center
      justify-content center
      margin-top 15px

      button
        width 41px
        height 41px
        margin-left 10px

      >>> .cx-input-parent
        width calc(100% - 60px)

      >>> input
        width 100%
        padding 12px 14px
        border 0px
        background getVar(theme-bg)
        border-radius 10px
        font-size .7rem
        transition all .25s ease

        &:focus
          background getVar(theme-bg2)

    .content-text
      h4
        margin 0px
        margin-top 15px

      p
        margin 5px 0px
        font-size .7rem
        opacity .6

    header
      display flex
      align-items center
      justify-content flex-start
      padding-left 10px
      margin-top -20px
      z-index 200
      position relative

      button
        padding 5px 12px
        display flex
        align-items center
        justify-content center
        min-height 40px
        border-radius 16px
        border 0px
        margin 0px 5px
        background getVar(theme-layout)
        color getVar(theme-color)
        box-shadow 0px 5px 15px 0px rgba(0, 0, 0, .08)
        font-weight bold
        font-size .75rem
        transition all .25s ease

        &:hover
          background getColor('danger')

          i
            color #fff

        i
          font-size 1.1rem
          color getColor('danger')
          text-shadow 0px 4px 15px getColor('danger', .4)

        &:last-child
          &:hover
            background getColor('primary')
            color #fff

            i
              color #fff

          i
            color getColor('primary')
            text-shadow 0px 4px 15px getColor('primary', .4)
            margin-right 5px


    .con-img
      width 100%
      height 200px
      position relative
      overflow hidden
      border-radius 30px 30px 30px 8px
      z-index 100

      i
        position absolute
        top 20px
        left 20px
        color #fff
        font-size 1.2rem

      img
        width 100%

</style>
