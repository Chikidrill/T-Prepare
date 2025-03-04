<template>
    <div class="page-rules">
      <div class="page-rules__container">
        <h2 class="page-rules__title">Правила</h2>
  
        <ul class="page-rules__list">
          <li class="page-rules__list-item">
            Не использовать ненормативную лексику
          </li>
          <li class="page-rules__list-item">
            Материалы не должны нарушать авторские права
          </li>
          <li class="page-rules__list-item">
            Будьте добры и мир будет добр к вам
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style lang="less">
  .page-rules {
    &__container {
      .container();
    }
  
    &__title {
      margin: 0 0 15px;
      color: @light_orange;
    }
  
    &__list {
      padding-left: 20px;
    }
  
    &__list-item {
      margin-bottom: 5px;
  
      &:not(:last-child)::after {
        content: ";";
      }
    }
  }
  </style>