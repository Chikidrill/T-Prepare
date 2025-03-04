<template>
    <div class="blog-article">
      <div class="blog-article__container">
        <h2 class="blog-article__title">{{ listItem.title }}</h2>
  
        <div class="blog-article__author">{{ listItem.author }}</div>
  
        <div class="blog-article__sections">
          <div
            class="blog-article__sections-item"
            v-for="item in listItem.sections"
            :key="item"
          >
            {{ item }}
          </div>
        </div>
  
        <p class="blog-article__text">
          {{ listItem.description }}
        </p>
      </div>
    </div>
  </template>

<script>
    export default {
    data() {
        return {
        listItem: {},
        };
    },
    computed: {
        id() {
        return +this.$route.params.id;
        },
    },
    methods: {
        getPost() {
        if (!this.id) return;
        this.$axios(`https://jsonplaceholder.typicode.com/posts/${this.id}`).then(
            (response) => {
            this.listItem = {
                title: response.data.title,
                description: response.data.body,
                author: response.data.userId,
            };
            }
        );
        },
    },
    created() {
        this.getPost();
    },
    };
</script>
  
  <style lang="less">
  .blog-article {
    &__container {
      .container();
    }
  
    &__title {
      margin: 0 0 10px;
      color: @light_orange;
    }
  
    &__author {
      margin-bottom: 10px;
      text-decoration: underline;
      font-size: 14px;
    }
  
    &__sections {
      margin-bottom: 15px;
      display: flex;
    }
  
    &__sections-item {
      margin-right: 10px;
      padding: 5px 10px;
      background-color: @white;
      border: 1px solid @light_orange;
      border-radius: 5px;
    }
  
    &__text {
      line-height: 24px;
      font-size: 18px;
  
      &::first-letter {
        color: @light_orange;
      }
    }
  }
  </style>