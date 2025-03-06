<template>
    <div class="reg">
      <h1 class = "reg__text">Регистрация</h1>
      <form @submit.prevent="handleRegistration">
        <div class="reg__form">
          <label class = "reg__form-text" for="name">Имя:</label>
          <input
            class = "reg__form-input"
            type="text"
            id="username"
            v-model="username"
            placeholder="Введите ваше имя"
            required
          />
        </div>
        <div class="reg__form">
          <label class = "reg__form-text" for="email">Почта:</label>
          <input
            class = "reg__form-input"
            type="email"
            id="email"
            v-model="email"
            placeholder="Введите вашу почту"
            required
          />
        </div>
        <div class="reg__form">
          <label class = "reg__form-text" for="password">Пароль:</label>
          <input
            class = "reg__form-input"
            type="password"
            id="password"
            v-model="password"
            placeholder="Введите ваш пароль"
            required
          />
        </div>
        <button type="submit" class="reg__btn btn">Зарегистрироваться</button>
      </form>
      <p class="login-link">
        <router-link to="/">Вернуться на главную</router-link>
      </p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        username: "",
        email: "",
        password: "",
      };
    },
    methods: {
      async handleRegistration() {
        // Логика для регистрации
        const response = await axios.post('http://127.0.0.1:8000/auth/register/',{
            username: this.username,
            email: this.email,
            password: this.password
        });
        console.log("Регистрация с данными:", userData);


        this.username = "";
        this.email = "";
        this.password = "";
      },
    },
  };
  </script>
  
  <style lang="less">
  .reg {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    text-align: center;
  
  &__text {
    font-family: @font1;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  &__form {
    margin-bottom: 15px;
    text-align: left;
  }
  
  &__form-text {
    font-family: @font1;
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  &__form-input {
    font-family: @font3;
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
  }
  
  &__btn {
    padding: 10px 15px;
    padding: 10px;
    border: none;
    border-radius: 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    :hover {
    background-color: #45a049;
  }
  }
  
}
  .login-link {
    margin-top: 15px;
    font-size: 14px;
    a {
    color: black;
    text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
  }

  </style>