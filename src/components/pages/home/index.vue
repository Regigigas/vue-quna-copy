<template>
  <div class="main">
    <home-header></home-header>
    <home-slider :sliders="sliders"></home-slider>
    <home-icons :icons="icons"></home-icons>
    <home-scroller class="scroller" :sights="sights"></home-scroller>
  </div>
</template>

<script>
import HomeHeader from './header'
import HomeSlider from './slider'
import HomeIcons from './icons'
import HomeScroller from './scroller'

import axios from 'axios'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSlider,
    HomeIcons,
    HomeScroller
  },
  data () {
    return {
      sliders: [],
      icons: [],
      sights: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    ...mapMutations(['changeCity']),
    getIndexData () {
      axios.get('./api/index.json?city=' + this.city)
        .then(this.handleDataSucc.bind(this))
        .catch(this.handleDataError.bind(this))
    },
    handleDataSucc (res) {
      res = res ? res.data : null
      if (res && res.ret && res.data) {
        res.data.city && (this.changeCity(res.data.city))
        res.data.sliders && (this.sliders = res.data.sliders)
        res.data.icons && (this.icons = res.data.icons)
        res.data.sights && (this.sights = res.data.sights)
      } else {
        this.handleDataError()
      }
    },
    handleDataError () {
      console.log('error')
    }
  },
  created () {
    this.getIndexData()
  }
}
</script>

<style scoped lang="stylus">
.main
  display flex
  flex-direction column
  position absolute
  left 0
  right 0
  bottom 0
  top 0
  .scroller
    flex 1
    overflow hidden
</style>
