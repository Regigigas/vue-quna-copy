<template>
  <div class="list">
  </div>
</template>

<script>
export default {
  name: 'city-list',
  props: {
    list: Object,
    hotcitylist: Array
  },
  watch: {
    list () {
      console.log(this.list)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../../assets/styles/commonScoped/varibles.styl'
</style>
