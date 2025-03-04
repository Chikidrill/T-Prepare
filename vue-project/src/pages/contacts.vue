<template>
  <div class="page-contacts">
    <div class="page-contacts__container">
      <div class="page-contacts__info">
        <h2 class="page-contacts__title">Контакты</h2>

        <p class="page-contacts__text">
          Адрес:
          <span class="page-contacts__text-regular">
            г. Томск, улица Красноармейская, д.146, ауд. 205
          </span>
        </p>
        <p class="page-contacts__text">
          Телефон:
          <span class="page-contacts__text-regular">
            +8 (800) 555 35-35
          </span>
        </p>
        <p class="page-contacts__text">
          Email:
          <span class="page-contacts__text-regular">
            tprepare@email.ru
          </span>
        </p>
      </div>

      <div class="page-contacts__map">
        <img src="@/assets/map.png" alt="Карта" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.page-contacts {
  display: flex;
  flex-direction: column;
  min-height: 80vh; /* Делаем страницу на всю высоту */
  padding: 0 160px; /* Отступы только слева и справа */
  
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 100px;
  }
  &__title {
    margin-bottom: 35px;
    color: @black;
    font-size: 40px;
  }

  &__text {
    font-family: @font1;
    font-size: 20px;
    margin-top: 5px;
    font-weight: 700;
  }

  &__text-regular {
    font-family: @font3;
    font-weight: 400;
    margin-left: 5px;
  }

  &__map {
    display: flex;
    justify-content: flex-end;
    
    img {
      max-width: 550px; /* Уменьшаем размер карты */
      height: auto;
    }
  }
}
</style>
