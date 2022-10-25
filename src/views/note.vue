<template>
  <div class="note">
    <div class="year" v-for="i in 2" :key="2">
      <h2>202{{ i }}</h2>
      <div class="list">
        <div class="item" v-for="i in 6" :key="i">
          <time class="time">2021-12-20</time>
          <router-link :to="{ name: 'article', params: { id: i } }">Hello World</router-link>
          <span class="last">上次阅读</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.year {
  h2 {
    margin: 2em 0 0.5em 0;
  }
  .list {
    text-indent: 2em;
    .item {
      margin: 5px 0;
      .time {
        margin-right: 2em;
      }
      a,
      a:active {
        color: #333;
        transition: color 0.3s;
        &:hover {
          color: var(--pink);
        }
      }
      .last {
        user-select: none;
        margin-left: 1em;
        padding: 0 0.4em;
        border-radius: 1px;
        background-color: var(--green);
        position: relative;
        font-size: 0.8em;
        &::before {
          content: ' ';
          position: absolute;
          left: -10px;
          top: 3px;
          width: 0px;
          height: 0px;
          border: 5px solid;
          border-color: transparent var(--green) transparent transparent;
        }
      }
    }
  }
}
</style>
