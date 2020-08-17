<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
  import NavBar from 'components/navbar/NavBar'
  import HomeSwiper from 'views/home/HomeSwiper'

  import {getHomeMultiData} from 'network/home/home'

  export default {
    name: 'Home',
    data() {
      return {
        banners: []
      }
    },
    components: {
      NavBar,
      HomeSwiper
    },
    created() {
      getHomeMultiData().then(res => {
        console.log(res.data);
        this.banners = res.data.banner.list
      })
    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);;
    color: #fff
  }
</style>
