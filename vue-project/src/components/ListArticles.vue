<template>
  <main class="list-articles">
    <div class="list-articles__container">
      <div class="list-articles__list">
        <CardArticle
          v-for="item in newsList"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :description="item.body"
          class="list-articles__card"
        />
      </div>
      <div v-if="totalPages > 1" class="list-articles__paginator">
        <button
          v-for="item in totalPages"
          type="button"
          class="list-articles__paginator-item"
          :class="{
            'list-articles__paginator-item--active': page === item,
          }"
          :key="item"
          @click="setPage(item)"
        >
          {{ item }}
        </button>
      </div>
    </div>
  </main>
</template>
  
<script>
import CardArticle from "@/components/card/CardArticle.vue";

export default {
  components: {
    CardArticle,
  },
  data() {
    return {
      newsList: [],
      limit: 10,
      page: 1,
      totalCount: 1,
      totalPages: 1,
    };
  },
  methods: {
    getNewsList(page) {
      this.$axios("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _limit: this.limit,
          _page: page || this.page,
        },
      }).then((response) => {
        if (response) {
          this.newsList = response.data;
          this.page = page;
          this.totalCount = response.headers["x-total-count"];
          this.totalPages = Math.ceil(this.totalCount / this.limit);
        }
        this.hasData = true;
      });
    },
    setPage(page) {
      this.getNewsList(page);
    },
  },
  created() {
    this.getNewsList();
  },
};
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