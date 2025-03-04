<template>
    <div class="page-home">
      <div class="page-home__container">
        <div class="page-home__about">
          <p class="page-home__about-text1">
            Освой любой экзамен
            вместе с T-Prepare 
          </p>
          <p class="page-home__about-text2">
            Достигни максимальных результатов на экзаменах и забудь о бесконечной зубрёжке
          </p>
          <button class="page-home__startbtn">
            Начать подготовку
          </button>
        </div>
      </div>
    </div>
  </template>
  
<script>
  export default {
  };
</script>
<style lang="less">
.page-home {
  padding-left: 160px;
  padding-right: 160px;
  display: flex;
  justify-content: center;
  align-items: center;


  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  &__about {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; // Центрирование по вертикали
    text-align: center;
    margin-bottom: 550px;
  }

  &__about-text1 {
    font: @font1;
    font-size: 100px;
    font-weight: 700;
    margin-bottom: 35px;
  }

  &__about-text2 {
    font: @font3;
    font-size: 30px;
    font-weight: 400;
    margin-top: 0; // Убираем лишний отступ, если он есть
  }
  &__startbtn{
    font: @font3;
    font-size: 20px;
    font-weight: 400;
    background-color: @yellow;
    border-radius: 25px;
    padding: 29px 65px;
    transition: all 1s ease ;
    &:hover{
      background-color: @black;
      color: @white;
    }
  }
}

</style>