<template>
  <nav
    class="nav-links"
    v-if="userLinks.length || repoLink"
  >
    <!-- user links -->
    <div
      class="nav-item"
      v-for="item in userLinks"
      :key="item.link"
    >
      <DropdownLink
        v-if="item.type === 'links'"
        :item="item"
      />
      <NavLink
        v-else
        :item="item"
      />
    </div>

    <!-- repo link -->
    <!-- <a
      v-if="repoLink"
      :href="repoLink"
      class="repo-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ repoLabel }}
      <OutboundLink/>
    </a> -->
  </nav>
</template>

<script>
  import { Component, Prop, Vue } from 'nuxt-property-decorator'
  import DropdownLink from '../components/DropdownLink.vue'
  import { resolveNavLinkItem } from '../util'
  import NavLink from '../components/NavLink.vue'

  @Component({
    name: 'NavLinks',
    components: {
      NavLink,
      DropdownLink,
    }
  })
  export default class NavLinks extends Vue {
    get userNav() {
      return ''
    }

    get nav() {
      return this.userNav
    }

    get userLinks() {
      const links = [ {
        text: 'Guide',
        link: '/',
        items: [
          { text: 'Introduction', link: '/' }
        ]
      }, {
        text: 'License',
        link: '/licence/'
      }, {
        text: '...',
        items: [
          { text: 'Branding', link: '/branding/' }
        ]
      } ].map(link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem)
        })
      })
      console.log(links)
      return links;
      // return (this.nav || []).map(link => {
      //   return Object.assign(resolveNavLinkItem(link), {
      //     items: (link.items || []).map(resolveNavLinkItem)
      //   })
      // })
      // return [{
      //   type: 'links',
      //   link: '/',
      //   title: 'guide',
      //   items: [{
      //     title: '指南'
      //   }]
      // }]
    }

    get repoLink() {
      // const { repo } = this.$site.themeConfig
      // if (repo) {
      //   return /^https?:/.test(repo)
      //     ? repo
      //     : `https://github.com/${repo}`
      // }
      return ''
    }

    get repoLabel() {
      if (!this.repoLink) return
      if (this.$site.themeConfig.repoLabel) {
        return this.$site.themeConfig.repoLabel
      }

      const repoHost = this.repoLink.match(/^https?:\/\/[^/]+/)[ 0 ]
      const platforms = [ 'GitHub', 'GitLab', 'Bitbucket' ]
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[ i ]
        if (new RegExp(platform, 'i').test(repoHost)) {
          return platform
        }
      }

      return 'Source'
    }
  }
</script>

<style lang="stylus">
  getVar(var)
    unquote("var(--vs-" + var + ")")

  .nav-links
    display flex
    align-items center
    justify-content center

    a
      line-height 1.4rem
      color inherit

      &:hover, &.router-link-active
        color getVar(theme-color)

    .nav-item
      position relative
      display inline-block
      transition all .25s ease

      a
        opacity .5
        transition all .25s ease
        font-weight bold
        display block
        padding 18px

        &:after
          content: ''
          position absolute
          left 50%
          transform translate(-50%)
          bottom -3px
          width 0px
          height 3px
          background getVar(theme-color)
          border-radius 2px
          transition all .25s ease

        &:hover, &.router-link-active
          opacity 1 !important

        &.router-link-active
          &:after
            width 18px

      &:first-child
        margin-left 0

    .repo-link
      margin-left 1.5rem

  @media (max-width: $MQMobile)
    .nav-links
      .nav-item, .repo-link
        margin-left 0

  @media (min-width: $MQMobile)
    .nav-links a
      &:hover, &.router-link-active
        color getVar(theme-color)
</style>
