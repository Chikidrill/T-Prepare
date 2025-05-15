<template>
  <div id="app">
    <div class="layout">
      <PageHeader />

      <main class="content">
        <RouterView v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </RouterView>
      </main>

      <PageFooter />
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";

export default {
  components: {
    PageHeader,
    PageFooter,
  },
};
</script>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Контент занимает минимум, но не больше */
.content {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  padding: 40px 0; /* Немного отступа, чтобы не прилипал */
}

/* Переходы */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
</style>
