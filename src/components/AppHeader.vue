<template>
  <header class="mt6 mb5 mw8 center">
    <h1 class="tc f5 mt0">Tachyons tldr <small class="gray normal">v4.6.1</small></h1>

    <nav class="tc mt3">
      <router-link to="/"
        class="link dim gray f6 f5-ns dib mr3"
        title="Home">
        classes
      </router-link>
      <router-link to="/scales"
        class="link dim gray f6 f5-ns dib mr3"
        title="About">
        scales
      </router-link>
      <router-link to="/palette"
        class="link dim gray f6 f5-ns dib"
        title="Store">
        palette
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'app-header',
};
</script>
