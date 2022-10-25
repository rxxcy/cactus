<template>
  <app-provider>
    <main class="main">
      <app-header v-if="show_header" />
      <router-view />
    </main>
    <app-footer />
  </app-provider>

  <!-- <n-watermark
    content="来点东西"
    cross
    fullscreen
    :font-size="16"
    :line-height="16"
    :width="384"
    :height="384"
    :x-offset="12"
    :y-offset="60"
    :rotate="-15"
  /> -->
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import appHeader from './components/app-header.vue'
import appFooter from './components/app-footer.vue'
import appProvider from './components/app-provider.vue'
import { useRootStore } from './store'
import { computed } from 'vue'

const store = useRootStore()
const show_header = computed(() => store.show_header)
</script>

<style>
:root {
  /* #2bbc8a */
  /* var(--green) */
  --green: #2bbc8a;
  --orange: #ff6900;
  --pink: #f78da7;
}

::selection {
  color: #fff;
  background: var(--orange);
}

body,
h2,
ul {
  margin: 0;
}
a,
a:active {
  text-decoration: none;
}
body {
  font-family: HarmonyOS_Regular;
  font-size: 14px;
  color: #383838;
  max-width: 50em;
  margin: 0 auto;
}
.main {
  /* background-color: #2bbc8a; */
  padding-top: 64px;
  min-height: calc(100vh - 122px);
}
</style>
