<template>
  <div class="home-nav">
    <div class="home-nav-war">
      <div class="demo-image__placeholder">
        <div class="block">
          <el-image :src="src"></el-image>
          <div
            class="home-nav-img"
            @mouseleave="leave"
            @mousemove="move"
            ref="card"
          >
            <img :src="img" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: require("@img/1.jpg"),
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
    };
  },
  methods: {
    leave() {
      const card = this.$refs.card;
      card.style.transform = ` scale(1)`;
    },
    move() {
      const card = this.$refs.card;
      const relX = (event.offsetX + 1) / card.offsetWidth;
      const relY = (event.offsetY + 1) / card.offsetHeight;
      const rotY = `rotateY(${(relX - 0.5) * 60}deg)`;
      const rotX = `rotateX(${(relY - 0.5) * -60}deg)`;
      card.style.transform = `scale(2) ${rotY} ${rotX}`;
    }
  }
};
</script>
<style lang="scss" scoped>
.demo-image__placeholder {
  width: 350px;
  height: 450px;
  background-color: #d98719;
  position: relative;
  .home-nav-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -50px 0 0 -50px;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }
}
</style>
