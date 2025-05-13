<template>
  <div class="page-home">
    <!-- Main content -->
    <div class="page-home__container">
      <!-- About section -->
      <section id="about" class="page-home__about">
        <p class="page-home__text1">
          Освой любой экзамен <br>
          вместе с T-Prepare
        </p>
        <p class="page-home__text2">
          Достигни максимальных результатов на экзаменах и забудь о бесконечной зубрёжке
        </p>
        <button class="page-home__startbtn" @click="openLoginPopup">
          Начать подготовку
        </button>
        <LoginPopup v-if="isLoginPopupVisible" @close="isLoginPopupVisible = false"/>
        <div v-if="isLoginPopupVisible" class="blur-background"></div>
      </section>

      <!-- Problem section -->
      <section class="page-home__problem">
        <img class="page-home__problem-image" src="@/assets/dislike.png" alt="проблема" />
        <p class="page-home__problem-text">
          Устали метаться между учебниками и дедлайнами?
          Каждый знает это чувство:
          горы конспектов, паника от нехватки времени
          и бесконечное перечитывание одних и тех же страниц.
          Но что, если подготовка может быть другой?
        </p>
      </section>

      <!-- Solve section -->
      <section class="page-home__solve">
        <p class="page-home__solve-text">
          С <b>T-Prepare</b> подготовка к экзаменам становится проще, эффективнее и удобнее!
          Загрузи свой список вопросов в сервис, создай персонализированные тесты
          и мгновенно поделись материалами с друзьями.
        </p>
        <img class="page-home__solve-image" src="@/assets/solvepic.png" alt="решение" />
      </section>
    </div>
  </div>
</template>

<script>
import LoginPopup from '@/components/LoginPopUp.vue';
export default {
  components: { LoginPopup },
  data() {
    return {
      isLoginPopupVisible: false,
      isMenuOpen: false,
    };
  },
  methods: {
    openLoginPopup() {
      this.isLoginPopupVisible = true;
    }
  }
};
</script>

<style lang="less">
@import "src/styles/variables.less"; // содержит @bw768 и @w768 как "(max-width: 767px)" и "(min-width: 768px)"

.page-home {
  padding: 0 160px;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;

    .logo {
      font-family: @font1;
      font-size: 28px;
      font-weight: 700;
    }
    .burger {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      span {
        display: block;
        width: 25px;
        height: 3px;
        background: #000;
      }
    }
  }

  &__nav {
    ul {
      display: flex;
      gap: 30px;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    a {
      font-family: @font3;
      font-size: 18px;
      text-decoration: none;
      color: #000;
    }
    &.is-open { display: block; }
  }

  &__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__about {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 100px;

    & .page-home__text1 {
      font-family: @font1;
      font-size: 80px;
      font-weight: 700;
      margin-bottom: 25px;
    }
    & .page-home__text2 {
      font-family: @font3;
      font-size: 20px;
      font-weight: 400;
      margin-bottom: 35px;
    }
    & .page-home__startbtn {
      font-family: @font3;
      font-size: 20px;
      background-color: @yellow;
      border-radius: 25px;
      padding: 20px 45px;
      transition: all 0.5s ease;
      border: none;
      cursor: pointer;
      &:hover {
        background-color: @black;
        color: @white;
      }
    }
  }

  &__problem {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 300px;
    padding-bottom: 70px;

    &-image {
      width: 350px;
      height: 350px;
    }
    &-text {
      font-family: @font3;
      font-size: 25px;
      text-align: right;
      max-width: 500px;
      line-height: 1.5;
    }
  }

  &__solve {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 300px;
    padding-bottom: 100px;

    &-image {
      width: 350px;
      height: 350px;
    }
    &-text {
      font-family: @font3;
      font-size: 25px;
      text-align: left;
      max-width: 500px;
      line-height: 1.5;
    }
  }

  .blur-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    backdrop-filter: blur(5px);
    z-index: 999;
  }
}

// Mobile styles (<=767px)
@media @bw768 {
  .page-home {
    width: 100%;
    padding: 0;
    &__container{
      
    }
    &__about{
      padding-top: 40px;
    }

    &__about{
      flex-direction: column;
      text-align: center;
      gap: 20px;
      padding-bottom: 40px;
      margin-bottom: 20px;
    }
    &__problem,
    &__solve{
      flex-direction: row;
      text-align: center;
      gap: 20px;
      padding-bottom: 40px;
    }
    .page-home__text1 { font-size: 32px; margin-bottom: 0;}
    .page-home__text2 { font-size: 16px; }
    .page-home__problem-image,
    .page-home__solve-image { width: 150px; height: auto; }
    .page-home__problem-text,
    .page-home__solve-text{
      font-size: 20px;
    }
  }
}
</style>