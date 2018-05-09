<template>
  <div id="app">
    <router-view></router-view>
    <div class="tabbar" @click="select">
      <router-link :class="{'selected':indexPage === 'index'}" to="/index">
        <img src="./assets/icon_nav_button.png" alt="">
        <label>主页</label>
      </router-link>
      <router-link :class="{'selected':indexPage === 'info'}" to="/info">
        <img src="./assets/icon_nav_msg.png" alt="">
        <label>信息</label>
      </router-link>
      <router-link :class="{'selected':indexPage === 'discovery'}" to="/discovery">
        <img src="./assets/icon_nav_article.png" alt="">
        <label>发现</label>
      </router-link>
      <router-link :class="{'selected':indexPage === 'setting'}" to="/setting">
        <img src="./assets/icon_nav_cell.png" alt="">
        <label>设置</label>
      </router-link>
    </div>
   </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      radio: "1",
      indexPage: "index"
    };
  },
  methods: {
    select(event) {
      function findA(target) {
        if (target.nodeName != "A") {
          return findA(target.parentNode);
        }
        return target;
      }

      var modules = findA(event.target).lastElementChild.innerHTML;

      if (modules == "主页") {
        this.indexPage = "index";
      } else if (modules == "信息") {
        this.indexPage = "info";
      } else if (modules == "发现") {
        this.indexPage = "discovery";
      } else if (modules == "设置") {
        this.indexPage = "setting";
      }
    }
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "microsoft yahei", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.tabbar {
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 55px;
  flex-direction: row;
  background: rgba(247, 247, 250, 0.9);
  font-size: 12px;
}
.tabbar:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  border-top: 1px solid #979797;
  color: #979797;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  background-color: white;
}
.tabbar a {
  flex: 1;
  color: #888;
}
.tabbar a img {
  display: block;
  width: 24px;
  height: 24px;
  margin: 3px auto;
  padding-top: 5px;
}

.selected {
  color: #09bb07 !important;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  text-decoration: none;
}
</style>
