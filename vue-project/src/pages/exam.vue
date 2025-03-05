<template>
    <div class="exam-page">
      <div class="exam-page__container">
       <h2>{{ subject }}</h2>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  data() {
    return {
      subject: this.$route.query.subject || 'Неизвестный предмет' // По умолчанию, если ничего не передано
    };
  }
};
  </script>
  
<style lang="less">
    .exam-page{
        display: flex;
        height: 100vh;
    }
</style>
  