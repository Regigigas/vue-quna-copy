<template>
  <div class="main">
    <home-header></home-header>
    <home-slider :sliders="sliders"></home-slider>
    <home-icons :icons="icons"></home-icons>
    <home-scroller></home-scroller>
  </div>
</template>

<script>
import HomeHeader from './header'
import HomeSlider from './slider'
import HomeIcons from './icons'
import HomeScroller from './scroller'

import axios from 'axios'
import { mapState } from 'vuex'

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
      icons: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getIndexData () {
      axios.get('./api/index.json?city=' + this.city)
        .then(this.handleDataSucc.bind(this))
        .catch(this.handleDataError.bind(this))
    },
    handleDataSucc (res) {
      res = res ? res.data : null
      if (res && res.ret && res.data) {
        res.data.sliders && (this.sliders = res.data.sliders)
        res.data.icons && (this.icons = res.data.icons)
      } else {
        this.handleDataError()
      }
    },
    handleDataError () {
      console.log('error')
    }
  },
  mounted () {
    this.getIndexData()
  }
}
</script>

<style scoped lang="stylus">

</style>
