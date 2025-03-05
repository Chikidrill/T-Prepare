<template>
    <div class="upload-popup popup">
      <div class="upload-popup__content">
        <p class="upload-popup__title">Добавить вопросы</p>
        <label for="subjectName" class="upload"> Введите название блока вопросов:
            <input type="text" class="upload__input" placeholder="Программирование">
            <div class="upload__image">
                <img class="upload__image1 image" src="@/assets/upload.png" alt="Загрузить файлы" />
                <img class="upload__image2 image" src="@/assets/upload2.png" alt="Загрузить файлы" />
            </div>
        </label>
        <button class="close-btn btn" @click="$emit('close')"> 
          <svg class="close-btn__icon" width="20" height="20" viewBox="0 0 24 24">
          <path d="M11.9998 13.4L7.0998 18.3C6.91647 18.4834 6.68314 18.575 6.3998 18.575C6.11647 18.575 5.88314 18.4834 5.6998 18.3C5.51647 18.1167 5.4248 17.8834 5.4248 17.6C5.4248 17.3167 5.51647 17.0834 5.6998 16.9L10.5998 12L5.6998 7.10005C5.51647 6.91672 5.4248 6.68338 5.4248 6.40005C5.4248 6.11672 5.51647 5.88338 5.6998 5.70005C5.88314 5.51672 6.11647 5.42505 6.3998 5.42505C6.68314 5.42505 6.91647 5.51672 7.0998 5.70005L11.9998 10.6L16.8998 5.70005C17.0831 5.51672 17.3165 5.42505 17.5998 5.42505C17.8831 5.42505 18.1165 5.51672 18.2998 5.70005C18.4831 5.88338 18.5748 6.11672 18.5748 6.40005C18.5748 6.68338 18.4831 6.91672 18.2998 7.10005L13.3998 12L18.2998 16.9C18.4831 17.0834 18.5748 17.3167 18.5748 17.6C18.5748 17.8834 18.4831 18.1167 18.2998 18.3C18.1165 18.4834 17.8831 18.575 17.5998 18.575C17.3165 18.575 17.0831 18.4834 16.8998 18.3L11.9998 13.4Z" fill="black"/>
          </svg>
        </button>
        <div class="upload-popup__buttons">
            <button class="upload__btn btn">Загрузить в формате QuizAI</button>
            <button class="upload__btn-alt btn">Загрузить в формате самопроверки</button>
        </div>
        
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      
    },
  };
  </script>
  
  <style lang="less">
  .upload-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    &__title{
        font-family: @font1;
        font-size: 30px;
    }
    &__buttons{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        
    }
 &__content {
    position: relative; 
    background: white;
    padding: 20px;
    border-radius: 5px;
   text-align: center;
  }
  .upload {
    display: flex;
    flex-direction: column;
    font-family: @font2;
    text-align: left;
    ::placeholder{
        font-family: @font3;
    }
    &__input {
        width: 75%;
        padding-top: 5px;
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    &__image {
        display: flex;
        justify-content: flex-start; 
        align-items: center; 
        margin-top: 10px;
        cursor: pointer;
    }
    &__image1{
        padding-right: 50px;
    }
    &__btn{
        margin-top: 30px;
        padding-left: 20px;
        padding-right: 20px;
        padding: 12px 37px;

    }
    &__btn-alt{
        margin-top: 30px;
        background-color: @white;
        border:2px solid black;
    }
}
}
</style>
  