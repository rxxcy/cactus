<template>
  <footer class="footer">
    <div class="copy">Copyright © {{ new Date().getFullYear() }} rxxct</div>
    <div class="o">
      <p>powered by vue3</p>
      <p>稳定运行200天13小时2秒</p>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  font-size: 11px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  .o {
    p {
      margin: 0;
    }
  }
}
</style>
