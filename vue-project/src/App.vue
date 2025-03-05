<template>
  <div class="app">
    <PageHeader />
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
    <PageFooter />
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
/* Плавный переход без резкого обрыва */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s; /* Дольше, мягче */
}

/* Начальное состояние при входе */
.fade-enter {
  opacity: 0;
}

/* Состояние при выходе */
.fade-leave-to {
  opacity: 0;
}
</style>