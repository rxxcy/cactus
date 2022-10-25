<template>
  <header class="header">
    <div class="logo"></div>
    <div class="nav">
      <h2>
        <a href="/">Cactus</a>
      </h2>
      <nav>
        <ul>
          <li v-for="i in navs" :key="i.name">
            <router-link :to="i.path">{{ i.name }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
const navs = [
  { name: '主页', path: '/' },
  { name: '笔记', path: 'note' },
  { name: '项目', path: 'project' },
  { name: '关于', path: 'about' },
]
</script>

<style lang="scss" scoped>
.header {
  user-select: none;
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  .logo {
    margin-right: 20px;
    width: 50px;
    height: 50px;
    background-image: url(//img.rxxcy.com/i/images/2022/10/6357a59e88ff8.jpg);
    background-size: 50px 50px;
    background-repeat: no-repeat;
    border-radius: 3px;
    // -webkit-filter: grayscale(100%);
  }
  .nav {
    a {
      color: #383838;
    }

    ul {
      padding: 0;
    }
    li {
      display: inline-block;
    }
    li:not(:last-child) {
      padding-right: 15px;
      margin-right: 15px;
      border-right: 1px dotted;
      border-color: var(--green);
      vertical-align: middle;
    }
    .router-link-active {
      color: var(--green);
    }
  }
}
</style>
