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

              <svg width="70" height="75" viewBox="0 0 103 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 4.99999C0 2.23857 2.23858 0 5 0H23.0835C28.9127 0 34.5031 2.24127 38.625 6.23077C42.7469 10.2203 45.0625 15.6312 45.0625 21.2732V51.0769C45.0625 53.8383 47.3011 56.0769 50.0625 56.0769H52.9375C55.6989 56.0769 57.9375 53.8383 57.9375 51.0769V21.2732C57.9375 15.6312 60.2531 10.2203 64.375 6.23077C68.4969 2.24127 74.0873 0 79.9164 0H98C100.761 0 103 2.23858 103 5V63.5385C103 66.2999 100.761 68.5385 98 68.5385H72.8359C71.5381 68.5385 70.2911 69.0431 69.3586 69.9457L59.3914 79.5928C58.4589 80.4954 57.2119 81 55.9141 81H47.0859C45.7881 81 44.5411 80.4954 43.6086 79.5928L33.6414 69.9457C32.7089 69.0431 31.4619 68.5385 30.1641 68.5385H5C2.23858 68.5385 0 66.2999 0 63.5385V4.99999Z" fill="white"/>
<path d="M59.6905 72.5H44.3096V27.2363V20.5H31L23.4 27.2363L23.4 9H80.64V27.2363L73 20.5H59.6905V27.2363V72.5Z" fill="black"/>
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