<template>
  <div class="notfound">
    <div class="not">404</div>
    <p class="tip">回 <a href="/#/">首页</a> 吗</p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.notfound {
  text-align: center;
}
.not {
  font-family: 微软雅黑;
  padding: 1em 0 0 0;
  font-size: 6em;
  font-weight: 200;
}
.tip {
  a,
  a:active {
    color: var(--green);
    text-decoration: none;
  }
}
</style>
