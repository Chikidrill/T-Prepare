<script>

export default {


  data() {
    return {
      tabs: [
      {
        title: "Главная",
        path: "/",
      },
      {
        title: "Контакты",
        path: "/contacts",
      }, 
      {
        title: "Личный кабинет",
        path: "/personalaccount",
      }
    ]
    };
  },
};
</script>

<template>
    <footer class="page-footer">
      <div class="page-footer__container">
        <div class="page-footer__logo-wrap">
            <div class="page-footer__logo"> 
              <svg width="70" height="75" viewBox="0 0 103 94" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 13H23.0835C28.9127 13 34.5031 15.2413 38.625 19.2308C42.7469 23.2203 45.0625 28.6312 45.0625 34.2732V69.0769H57.9375V34.2732C57.9375 28.6312 60.2531 23.2203 64.375 19.2308C68.4969 15.2413 74.0873 13 79.9164 13H103V81.5385H70.8125L57.9375 94H45.0625L32.1875 81.5385H0V13Z" fill="white"/>
<path d="M59.6904 82H44.3096V36.7363H28.4014V23.6846H75.6426V36.7363H59.6904V82Z" fill="black"/>
</svg>
            </div>
        </div>
  
        <nav class="page-footer__nav">
          <RouterLink
            v-for="tab in tabs"
            :key="tab.path"
            type="button"
            class="page-footer__nav-item"
            :to="{ path: tab.path}"
          >
            {{ tab.title }}
          </RouterLink>
      </nav>
      </div>
    </footer>
</template>

<style lang="less">
.page-footer{

    &__container{
        display: flex;
        padding-left: 160px;
        padding-right: 160px;
        padding-bottom: 10px;
    }
    background-color: @black;
    &__logo-wrap {
    display: flex;
    padding-top: 18px;
  }
  &__nav {
    display: flex;
    flex-direction:row;
    text-align: right;
    padding-top: 26px;
    justify-content: center;
    margin-left: auto;
    margin-top: 20px;
  }
  
  &__nav-item {
    color: @white;
    font-family: @font3;
    font-size: 15px;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.2s ease-out;

    & + & {
      margin-left: 103px;
    }

    &:hover {
      @media (hover: hover) {
        color: @yellow;
      }
    }
  }
}

</style>