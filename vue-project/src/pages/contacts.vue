<template>
    <div class="page-contacts">
      <div class="page-contacts__container">
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
        <div class="page-contacts__map-container">
            <div class="page-contacts__map">
                <img src="@/assets/map.png" alt="Map" />
            </div>
            
        </div>
      </div>
      
    </div>
  </template>
  
  <script>

export default {

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
        width: 450px;
        margin-bottom: 35px;
        color: @black;
        font-size: 40px;
      }
    
      &__text {
        font:@font1;
        width: 500px;
        font-size: 20px;
        margin-top: 5px;
        font-weight: 700;
      }
    
      &__text-regular {
        font: @font3;
        width: 500px;
        font-weight: 400;
        margin-left: 5px;
      }

    }
    </style>