<template>
  <div class="register">
    <div class="authBox">
      <h4 data-v-4ae25bbc=""><b>注册账号</b> <br> 或直接登录</h4>
      <div class="component13">
        <header>
          <!--          <button>-->
          <!--            <i class='bx bx-chevron-right'></i>-->
          <!--          </button>-->
        </header>
        <div class=" content-inputs">
          <!--          <validation-provider-->
          <!--            ref="messageForm"-->
          <!--            v-slot="{ errors }"-->
          <!--            rules="required|max:400"-->
          <!--            name="必填项"-->
          <!--          >-->
          <!--            <input-->
          <!--              v-model="message"-->
          <!--              type="text"-->
          <!--            />-->
          <!--            <span v-if="errors.length" v-for="(error, i) in errors" :key="`errors${i}`">-->
          <!--        {{ error }}-->
          <!--      </span>-->
          <!--          </validation-provider>-->
          <validation-provider
            ref="messageForm"
            v-slot="{ errors }"
            rules="required|max:400"
            name="必填项"
          >
            <cx-input
              type="text"
              placeholder="用户名"
              label-placeholder="用户名"
              v-model="username"
              icon-after
            >
              <template #icon>
                <i class='bx bx-user'></i>
              </template>

              <template #message-danger v-if="errors.length">
                <span v-for="(error, i) in errors" :key="`errors${i}`">
                  {{ error }}
                </span>

              </template>
            </cx-input>
          </validation-provider>
          <cx-input
            type="password"
            v-model="value"
            label-placeholder="请输入密码"
            placeholder="密码"
            :progress="pwdProgress"
            :visiblePassword="hasVisiblePassword"
            icon-after
            @click-icon="hasVisiblePassword = !hasVisiblePassword">
            <template #icon>
              <i v-if="!hasVisiblePassword" class='bx bx-show-alt'></i>
              <i v-else class='bx bx-hide'></i>
            </template>

            <template v-if="pwdProgress >= 100" #message-success>
              密码强度安全
            </template>

          </cx-input>
        </div>
        <div style="margin-bottom: 30px"></div>

        <cx-button block dark>
          注册
        </cx-button>
        <div style="margin-bottom: 30px"></div>

        <cx-button block dark border>
          登录
        </cx-button>
      </div>
    </div>

  </div>

</template>

<script lang="ts">
  import {Component, Vue} from 'nuxt-property-decorator'
  import {ValidationProvider} from 'vee-validate';

  @Component({
    components: {
      ValidationProvider
    }
  })
  export default class Register extends Vue {
    input3: string = ''
    value2: string = ''
    value: string = ''
    message: string = ''
    username: string = ''
    hasVisiblePassword: boolean = false
    $refs!: {
      messageForm: InstanceType<typeof ValidationProvider>;
    }

    public async check(): Promise<boolean> {
      const validationResult = await this.$refs.messageForm.validate();
      if (!validationResult.valid) {
        return false;
      }
      return true;
    }

    get pwdProgress() {
      let progress = 0

      // at least one number

      if (/\d/.test(this.value)) {
        progress += 20
      }

      // at least one capital letter

      if (/(.*[A-Z].*)/.test(this.value)) {
        progress += 20
      }

      // at menons a lowercase

      if (/(.*[a-z].*)/.test(this.value)) {
        progress += 20
      }

      // more than 5 digits

      if (this.value.length >= 6) {
        progress += 20
      }

      // at least one special character

      if (/[^A-Za-z0-9]/.test(this.value)) {
        progress += 20
      }

      return progress
    }
  }
</script>

<style lang="stylus">
  .register
    width 100%
    display flex
    justify-content center
    align-items center

  .authBox
    padding-top 180px
    display flex
    flex-direction column

  .content-inputs
    .cx-input-parent
      width 100%
      margin-bottom 30px

  .component13
    width 360px
    background getVar(theme-layout)
    border-radius 20px
    padding 50px
    /*top 180px*/
    /*left 0px*/
    /*position absolute*/
    box-shadow 0px 8px 20px 0px rgba(0, 0, 0, .04)
    transition all .25s ease
    animation componentAnimate 18s infinite ease

    //&:hover
    //  box-shadow 0px 0px 0px 0px rgba(0, 0, 0, .1)
    //  transform translate(0, 5px)

    .cx-input
      width 100%

      >>> input
        width 100% !important

    ul
      margin 0px
      padding 10px 0px
      list-style none

      li
        position relative
        display flex
        align-items center
        justify-content flex-start
        padding 3px 3px
        cursor pointer
        transition all .25s ease

        &:hover
          label
            opacity .6

        label
          transition all .25s ease

        .check
          width 22px
          height 22px
          display block
          background getVar(theme-bg2)
          border-radius 5px
          display flex
          align-items center
          justify-content center
          transition all .25s ease
          margin-right 10px

          i
            transition all .3s ease
            font-size 1.1rem
            transform scale(.5)
            opacity 0

        input
          position absolute
          width 100%
          height 100%
          opacity 0
          z-index 100
          cursor pointer

          &:checked
            ~ .check
              background getColor('primary')

              i
                opacity 1
                color #fff
                transform scale(1)

    header
      display flex
      align-items center
      justify-content center
      width 100%

      button
        border 2px solid rgba(0, 0, 0, .15)
        width 38px
        height 38px
        opacity .5
        background transparent
        padding 0px
        margin-left 10px
        display flex
        align-items center
        transition all .25s ease
        justify-content center

        &:hover
          background getColor('primary')
          border 2px solid getColor('primary')
          color #fff
          opacity 1

        i
          font-size 1.5rem

      input
        padding 9px 20px
        border 0px
        background getVar(theme-bg2)
        width calc(100% - 50px)
        border-radius 14px
        transition all .25s ease

        &:focus
          padding-left 25px

    button
      margin 0px
      padding 2px 0px
      border-radius 16px

</style>
