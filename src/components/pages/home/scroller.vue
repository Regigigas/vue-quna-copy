<template>
  <div ref="scroller">
    <ul class="content">
      <li class="item" v-for="item in sights" :key="item.id">
        <img v-lazy="item.imgUrl" alt="" class="item-img" />
        <div class="item-content">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <p class="item-price">
            <span class="price-tag">&yen;</span>
            {{ item.price }}
            <span class="price-start">起</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'home-scroller',
  props: {
    sights: Array
  },
  watch: {
    sights () {
      this.$nextTick(() => {
        this.scroller.refresh()
      })
    }
  },
  methods: {
    createScroller () {
      this.scroller = new BScroll(this.$refs.scroller, {
        probeType: 2
      })
    },
    bindEvents () {
      this.scroller.on('scroll', this.handleScroll.bind(this))
    },
    handleScroll (e) {
      console.log(e)
    }
  },
  mounted () {
    this.createScroller()
    this.bindEvents()
  }
}
</script>

<style scoped lang="stylus">
@import '../../../assets/styles/commonScoped/varibles.styl'
.item
  display flex
  padding: .24rem
  .item-img
    width 1.4rem
    height 1.4rem
    margin-right: .2rem
  .item-content
    flex: 1
    .item-title
      margin: .04rem 0 .1rem 0
      font-size: .3rem
      color: $fontColor
    .item-desc
      margin-bottom .1rem
      font-size: .28rem
      color: $lightFontColor
    .item-price
      margin-top: .2rem
      font-size: .36rem
      color: $enlightFontColor
      .price-tag
        font-size: .24rem
      .price-start
        font-size: .24rem
        color: $lightFontColor
</style>
