<template>
    <div class="page-contacts">
      <div class="page-contacts__container">
        <h2 class="page-contacts__title">Контакты</h2>
  
        <p class="page-contacts__text">
          Адрес:
          <span class="page-contacts__text-italic">
            {{ query.address || "г. Томск, Пушкина 65/1" }}
          </span>
        </p>
        <p class="page-contacts__text">
          Телефон:
          <span class="page-contacts__text-italic">
            {{ query.phone || "+7 499 350 0730" }}
          </span>
        </p>
        <p class="page-contacts__text">
          Email:
          <span class="page-contacts__text-italic">
            {{ query.email || "hi@tagree.ru" }}
          </span>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import { mapStores } from "pinia";
  import { useUserStore } from '@/store/user';
  
  export default {
    computed: {
      ...mapStores(useUserStore),
      query() {
        return this.$route.query;
      },
    },
  };
  </script>
    
    <style lang="less">
    .page-contacts {
        margin-top: 100px;
      &__container {
        .container();
        margin-top: 20px;
      }
    
      &__title {
        margin-bottom: 15px;
        color: @light_orange;
      }
    
      &__text {
        margin-top: 5px;
        font-weight: 700;
      }
    
      &__text-italic {
        font-style: italic;
        font-weight: 400;
        margin-left: 5px;
      }
    }
    </style>