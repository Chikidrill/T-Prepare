<template>
  <main class="list-articles">
    <div class="list-articles__container">
      
    </div>
  </main>
</template>
  
<script>


</script>
  
<style lang="less">
  .list-articles {
    margin-top: 100px;
    &__container {
      .container();
    }
    &__card {
      margin-bottom: 15px;
    }
    &__paginator {
    display: flex;
    margin-bottom: 10px;
  }

  &__paginator-item {
    list-style: none;
    padding: 5px;
    background-color: @white;
    color: @white;
    cursor: pointer;
    transition: background-color 0.2s;

    & + & {
      margin-left: 5px;
    }

    &:hover {
      @media (hover: hover) {
        background-color: @light_orange;
      }
    }

    &:active {
      background-color: @light_orange;
    }

    &--active {
      background-color: @light_orange;
    }
  }
  }

  
</style>