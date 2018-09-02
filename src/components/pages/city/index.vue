<template>
  <div class="main">
    <city-header class="main"></city-header>
    <city-search></city-search>
    <city-list class="list" :list="list" :hotcitylist="hotcitylist"></city-list>
  </div>
</template>

<script>
import CityHeader from './header'
import CitySearch from './search'
import CityList from './list'
import axios from 'axios'
export default {
  name: 'cityIndex',
  data () {
    return {
      list: {},
      hotcitylist: []
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList
  },
  methods: {
    getListInfo () {
      axios.get('./api/cityList.json')
        .then(this.handleGetListSucc.bind(this))
        .catch(this.handleGetListErr.bind(this))
    },
    handleGetListSucc (res) {
      res && (res = res.data)
      if (res && res.data) {
        res.data.list && (this.list = res.data.list)
        res.data.hotcitylist && (this.hotcitylist = res.data.hotcitylist)
      } else {
        this.handleGetListErr()
      }
    },
    handleGetListErr () {
      console.log('请求返回失败')
    }
  },
  created () {
    this.getListInfo()
  }
}
</script>

<style scoped lang="stylus">
.main
  display flex
  flex-direction column
  position absolute
  top: 0
  right 0
  bottom 0
  left: 0
  .list
    flex: 1
</style>
