<template>
    <div class="popUp__overlay">
      <div class="popUp__content">
        <button class="popUp__btn-close btn" @click="closePopup">
        <svg class="close-btn__icon" width="20" height="20" viewBox="0 0 24 24">
        <path d="M11.9998 13.4L7.0998 18.3C6.91647 18.4834 6.68314 18.575 6.3998 18.575C6.11647 18.575 5.88314 18.4834 5.6998 18.3C5.51647 18.1167 5.4248 17.8834 5.4248 17.6C5.4248 17.3167 5.51647 17.0834 5.6998 16.9L10.5998 12L5.6998 7.10005C5.51647 6.91672 5.4248 6.68338 5.4248 6.40005C5.4248 6.11672 5.51647 5.88338 5.6998 5.70005C5.88314 5.51672 6.11647 5.42505 6.3998 5.42505C6.68314 5.42505 6.91647 5.51672 7.0998 5.70005L11.9998 10.6L16.8998 5.70005C17.0831 5.51672 17.3165 5.42505 17.5998 5.42505C17.8831 5.42505 18.1165 5.51672 18.2998 5.70005C18.4831 5.88338 18.5748 6.11672 18.5748 6.40005C18.5748 6.68338 18.4831 6.91672 18.2998 7.10005L13.3998 12L18.2998 16.9C18.4831 17.0834 18.5748 17.3167 18.5748 17.6C18.5748 17.8834 18.4831 18.1167 18.2998 18.3C18.1165 18.4834 17.8831 18.575 17.5998 18.575C17.3165 18.575 17.0831 18.4834 16.8998 18.3L11.9998 13.4Z" fill="black"/>
        </svg>
        </button>
        <svg width="50" height="40" viewBox="0 0 103 94" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 13H23.0835C28.9127 13 34.5031 15.2413 38.625 19.2308C42.7469 23.2203 45.0625 28.6312 45.0625 34.2732V69.0769H57.9375V34.2732C57.9375 28.6312 60.2531 23.2203 64.375 19.2308C68.4969 15.2413 74.0873 13 79.9164 13H103V81.5385H70.8125L57.9375 94H45.0625L32.1875 81.5385H0V13Z" fill="white"/>
            <path d="M59.6904 82H44.3096V36.7363H28.4014V23.6846H75.6426V36.7363H59.6904V82Z" fill="black"/>
            </svg>
        <h2 class = "popUp__text">Вход</h2>
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label class = "form-group__text" for="email">Email:</label>
            <input
              class = "form-group__input"
              type="email"
              id="email"
              v-model="email"
              placeholder="Введите ваш email"
              required
            />
          </div>
          <div class="form-group">
            <label class = "form-group__text" for="password">Пароль:</label>
            <input
              class = "form-group__input"
              type="password"
              id="password"
              v-model="password"
              placeholder="Введите ваш пароль"
              required
            />
          </div>
          <button type="submit" class="popUp__btn-login btn">Войти</button>
        </form>
        <button class="popUp__btn-register btn" @click="handleRegister">Регистрация</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      handleLogin() {
        console.log("Вход с email:", this.email);
        this.closePopup(); 
      },
      handleRegister() {
      this.closePopup(); 
      this.$router.push({ name: "registration" });
    },
      closePopup() {
        this.$emit("close"); 
      },
    },
  };
  </script>
  
  <style lang="less">
  .popUp{
    &__overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  &__btn-close{
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 40px;
  height: 40px;
  top: -40px;
  left: 310px;
  background: @yellow;
  border-radius:20px;
  border: none;
  cursor: pointer;
  &:hover path,
  &:focus path{
    fill: white;
  }
 }  
    &__btn-register,
    &__btn-login{
        box-sizing: border-box;
        padding: 10px 15px;
        font-family: @font3;
    }
    &__btn-login{
        margin-bottom: 15px;
    }
  &__content {
    background-color: @light_gray;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
    position: relative; /* Позволяет правильно спозиционировать close-btn */
    background: @light_gray;
    padding: 30px;
  }

  &__text{
    font-family: @font1;
  }
}
  .form-group {
    margin-bottom: 15px;
    text-align: left;
  &__text {
    font-family: @font1;
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  &__input {
    font-family: @font3;
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
  }
  }
  .btn {
  background: @yellow;
  font-family: @font3;
  text-align: right;
  color:@black;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: all 0.1s ease-in ;
    &:hover{
      background-color: @black;
      color: @white;
      fill: white;
    }
}
  </style>