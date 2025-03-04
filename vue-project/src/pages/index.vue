<template>
  <div class="page-home">
    <div class="page-home__background-image">
      <img src="@/assets/background1.png" />
    </div>
    
    <div class="page-home__container">
      <div class="page-home__about">
        <p class="page-home__text1">
          Освой любой экзамен
          вместе с T-Prepare 
        </p>
        <p class="page-home__text2">
          Достигни максимальных результатов на экзаменах и забудь о бесконечной зубрёжке
        </p>
        <button class="page-home__startbtn">
          Начать подготовку
        </button>
      </div>
      <div class="page-home__problem">
        <img class="page-home__problem-image" src="@/assets/dislike.png" />
        <p class="page-home__problem-text"> 
          Устали метаться между 
          учебниками и дедлайнами?
          Каждый знает это чувство: 
          горы конспектов, паника 
          от нехватки времени 
          и бесконечное перечитывание 
          одних и тех же страниц. 
          Но что, если подготовка 
          может быть другой? 
        </p>
      </div>
      <div class="page-home__solve">
        <p class="page-home__solve-text">
          С <b>T-Prepare</b> подготовка к экзаменам становится проще, эффективнее и удобнее! 
          Загрузи свой список вопросов    в сервис, создай персонализированные тесты 
          и мгновенно поделись материалами с друзьями. 
        </p>
        <img class="page-home__solve-image" src="@/assets/solvepic.png" alt="solve">
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
  max-width: 1920px;

  &__container {
    
    justify-content: center;
    align-items: center;
    width: 100%;
  }
    &__background-image {
    position: fixed; /* Фиксируем фон */
    top: 0;
    left: 0;
    width: 100vw; /* Занимает всю ширину экрана */
    height: 100vh; /* Занимает всю высоту экрана */
    overflow: hidden; /* Обрезает лишнее */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1; /* Отправляем изображение назад */
    }
  &__about {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; // Центрирование по вертикали
    text-align: center;
    margin-bottom: 150px;
  }

  &__text1 {
    font: @font1;
    font-size: 100px;
    font-weight: 700;
    margin-bottom: 35px;
  }

  &__text2 {
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
  &__problem {
    display: flex;
    align-items: center; /* Выравниваем по центру вертикали */
    justify-content: center; /* Центрируем по горизонтали */
    gap: 300px; /* Отступ между картинкой и текстом */
    padding-bottom: 100px;
  }
  &__problem-image{
    width: 350px;
    height: 350px;
  }
  &__problem-text{
    font: @font3;
    font-size: 30px;
    font-weight: 400;
    margin-top: 0;
    text-align: right; /* Выравниваем текст справа */
    max-width: 500px; /* Ограничиваем ширину текста */
  }
  &__solve{
    display: flex;
    align-items: center; /* Выравниваем по центру вертикали */
    justify-content: center; /* Центрируем по горизонтали */
    gap: 300px; /* Отступ между картинкой и текстом */
    padding-bottom: 100px;
    padding-left: 80px;
  }
  &__solve-image{
    width: 350px;
    height: 350px;
  }
  &__solve-text{
    font: @font3;
    font-size: 30px;
    font-weight: 400;
    margin-top: 0;
    text-align: left; /* Выравниваем текст справа */
    max-width: 500px; /* Ограничиваем ширину текста */
  }
}

</style>