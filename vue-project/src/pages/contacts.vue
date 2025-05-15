<template>
  <div class="page-contacts">
    <div class="page-contacts__container">
      <div class="page-contacts__info">
        <h2 class="page-contacts__title">Контакты</h2>
        <p class="page-contacts__subtitle">
            Мы всегда готовы вам помочь!
        </p>
        <p class="page-contacts__text">
          Адрес:
          <span class="page-contacts__text-regular">
            г. Томск, улица Вершинина, д.74, ауд. 325
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
        <div id="map" class="map-container"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (window.ymaps) {
      window.ymaps.ready(() => {
        new window.ymaps.Map("map", {
          center: [56.451061, 84.964196], 
          zoom: 17,
          controls: ["zoomControl", "fullscreenControl"],
        }).geoObjects.add(
          new window.ymaps.Placemark(
            [56.451061, 84.964196],
            { balloonContent: "г. Томск, улица Вершинина, д.74, ауд. 325" },
            { preset: "islands#icon", iconColor: "#FFDD2D" }
          )
        );
      });
    }
  },
};
</script>

<style lang="less">
.page-contacts {
  display: flex;
  flex-direction: column;
  margin: 0;
  &__container {
    .container();
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__title {
    color: @black;
    font-size: 40px;
    margin-top: 0;
    margin-bottom: 0;
  }

  &__subtitle{
    font-family: @font3;
    font-size: 25px;
    font-style: italic;
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

    .map-container {
      width: 550px;
      height: 400px;
      border-radius: 20px; // Красивое скругление
      overflow: hidden;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); // Небольшая тень для объёма
    }
  }
}
@media @bw768{
  .content{
    padding-top: 120px;
    flex: auto;
  }
  .page-contacts{
    display: block;
     &__container {
      .container();
      display: block;
      
    } 
    &__title{
      font-size: 25px;
    }
    &__subtitle{
      font-size: 20px;
    }
    &__text{
      font-size: 15px;
    }
    &__map {
    display: flex;
    justify-content: center;
    padding-top: 40px;
    .map-container {
      width: 100%;
      height: 400px;
      border-radius: 10px; // Красивое скругление
      overflow: hidden;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); // Небольшая тень для объёма
    }
  }
  }
}
</style>
