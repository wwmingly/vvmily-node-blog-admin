<template>
  <div class="home">
    {{ pathRoute }}
  </div>
</template>
<script>
import { blogList } from '../../api/home/index.js'
export default {
  name: 'Home',
  components: {},
  data() {
    return {}
  },
  computed: {
    pathRoute() {
      return this.$route.path
    }
  },
  created() {},
  methods: {
    getList() {
      blogList().then(res=>{
        console.log(res)
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>
