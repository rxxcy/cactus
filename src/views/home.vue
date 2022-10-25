<template>
  <!-- <home-loading /> -->
  <div class="home">
    <section class="welcome">
      <p>
        披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸舰弥津，青雀黄龙之舳。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨；雁阵惊寒，声断衡阳之浦。
      </p>
      <p>Find me on</p>
    </section>

    <section class="note">
      <h2>
        <a href="/#/note">推荐</a>
      </h2>
      <div class="list">
        <div class="item" v-for="i in 6" :key="i">
          <time class="time">2020-10-20</time>
          <router-link class="title" :to="{ name: 'article', params: { id: i } }"
            >示例文章</router-link
          >
        </div>
      </div>
    </section>
    <section class="project">
      <h2>
        <a href="/#/project">项目</a>
      </h2>
      <div class="list">
        <div class="item" v-for="i in 5" :key="i">
          <a href="">Cactus Blog</a>: <span>this</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// import { useLoadingBar } from 'naive-ui'
import { onMounted } from 'vue'
import homeLoading from '../components/home-loading.vue'

onMounted(() => {
  // window.$loadingBar = useLoadingBar()
  // window.$loadingBar.start()
})
</script>

<style lang="scss" scoped>
.home {
  h2 {
    margin-top: 50px;
    margin-bottom: 12px;
    a {
      color: var(--green);
    }
  }
  .note {
    .list {
      &:empty::before {
        content: '啥也没有...';
      }
    }
    .item {
      margin: 5px 0;
      .time {
        color: #666;
        margin-right: 2em;
      }
      .title,
      .title:active {
        border-bottom: 1px solid #666;
        transition: border 0.3s;
        color: #333;
      }
      .title:hover {
        border-bottom: 1px solid var(--pink);
      }
    }
  }
  .project {
    .list {
      &:empty::before {
        content: '啥也没有...';
      }
    }
    .item {
      a,
      a:active {
        color: #333;
        transition: color 0.3s;
        &:hover {
          color: var(--pink);
        }
      }
    }
  }
}
</style>
