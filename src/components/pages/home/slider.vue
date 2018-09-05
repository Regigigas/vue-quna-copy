<template>
  <swiper class="banner home-banner" :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="item of sliders" :key="item.id">
      <img class="banner-img" :src="item.imgUrl" />
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'home-slider',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  props: {
    sliders: Array
  }
}
</script>

<style scoped lang="stylus">
@import '../../../assets/styles/commonScoped/varibles.styl'
.banner
  width: 100%
  overflow hidden
  height 0
  padding-bottom: 29.25%
  background: #fff
  .banner-img
    width: 100%
</style>

<style lang="stylus">
.home-banner
  .swiper-pagination-bullet
    background: #fff
</style>
