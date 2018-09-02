<template>
  <swiper class="icons" :options="swiperOption" ref="mySwiper">
    <swiper-slide class="icons-page"
                  v-for="page of pages"
                  :key="page.id">
      <div class="icons-list">
        <div v-for="item in page" :key="item.id" class="icons-item">
          <img class="icons-img" :src="item.imgUrl" />
          <p class="icons-title">{{ item.title }}</p>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'home-icons',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  props: {
    icons: Array
  },
  computed: {
    pages () {
      const pages = []
      this.icons.forEach((value, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(value)
      })
      return pages
    }
  },
  mounted () {
    setTimeout(() => {
      console.log(this.pages)
    }, 3000)
  }
}
</script>

<style scoped lang="stylus">
@import '../../../assets/styles/commonScoped/varibles.styl'
.icons >>> .swiper-pagination-bullet
  background: #bgColor
.icons
  overflow hidden
  height: 0
  width 100%
  padding-bottom: 3.4rem
  .icons-list
    display flex
    flex-wrap wrap
    .icons-item
      width 25%
      padding-top .3rem
      text-align center
      .icons-img
        width: .66rem
        height .66rem
        margin: 0 auto
      .icons-title
        margin-top .16rem
        color: #333
        font-size: .28rem
</style>
