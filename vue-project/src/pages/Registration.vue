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
        <p class="login-link">
        <router-link to="/">Вернуться на главную</router-link>
      </p>
      </form>
    </div>
  </template>
  
  <script>
import axios from 'axios';
import auth from "@/store/auth"; // 👈 подключение хранилища

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
      try {
        const response = await axios.post("http://127.0.0.1:8000/auth/register/", {
          username: this.username,
          email: this.email,
          password: this.password,
        });

        console.log("Регистрация прошла успешно:", response.data);

        const token = response.data.token; // 👈 предполагаем, что backend отдаёт токен
        if (token) {
          auth.login(token); // 👈 сохраняем токен в localStorage и в стейт
          this.$router.push({ name: "personalaccount" }); // переходим в ЛК
        } else {
          alert("Токен не получен от сервера.");
        }

        this.username = "";
        this.email = "";
        this.password = "";
      } catch (error) {
        if (error.response) {
          console.error("Ошибка регистрации:", error.response.data);
          alert("Ошибка регистрации: " + (error.response.data.message || "Проверьте введённые данные"));
        } else {
          console.error("Сетевая ошибка:", error.message);
          alert("Произошла ошибка при регистрации. Попробуйте снова.");
        }
      }
    },
  },
};
</script>

  
  <style lang="less">
  .reg {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    text-align: center;
  
  &__text {
    font-family: @font1;
    font-size: 40px;
    margin-bottom: 20px;
  }
  &__form {
    margin-top: 15px;
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
    margin-top: 20px;
    padding: 13px 13px 13px 13px;
    border: none;
    border-radius: 20px;
    font-size: 15px;
    font-family: @font1;
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