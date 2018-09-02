<template>
  <div class="search">
    <input type="text" class="search-input" placeholder="输入城市名或拼音" />
  </div>
</template>

<script>
export default {
  name: 'city-search'
}
</script>

<style scoped lang="stylus">
@import '../../../assets/styles/commonScoped/varibles.styl'
.search
  height .74rem
  background $bgColor
  padding: 0 .2rem
  .search-input
    width: 100%
    line-height .62rem
    margin-top: .06rem
    padding: 0 .2rem
    box-sizing: border-box
    border-radius: .1rem
    text-align center
    font-size: .24rem
    color: $fontNormalColor
</style>
