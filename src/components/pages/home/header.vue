<template>
  <div class="header">
    <div class="back iconfont">&#xe624;</div>
    <div class="search">
      <div class="search-content">
        <span class="iconfont search-icon">&#xe632;</span>
        请输入城市/景点/游玩主题
      </div>
    </div>
    <div class="city">{{ city }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'home-header',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style scoped lang="stylus">
@import '../../../assets/styles/commonScoped/varibles.styl'
.header
  display flex
  height .88rem
  background $bgColor
  .back
    width .8rem
    line-height .88rem
    text-align center
    font-weight bold
    font-size .44rem
    color #fff
  .search
    flex 1
    .search-icon
      position relative
      top .02rem
    .search-content
      width 100%
      height: .6rem
      line-height .6rem
      margin-top .14rem
      text-indent: .2rem
      border-radius: .1rem
      background #fff
      color: #ccc
  .city
    float: right
    overflow hidden
    max-width 1.6rem
    white-space nowrap
    text-overflow: ellipsis
    padding: 0 .46rem 0 .22rem
    position relative
    line-height .88rem
    font-size: .28rem
    color: #fff
    &::before
      position absolute
      right .16rem
      top: .38rem
      content '\0020'
      width: 0
      height: 0
      border-left: .12rem solid transparent
      border-right: .12rem solid transparent
      border-top: .12rem solid #fff
</style>
