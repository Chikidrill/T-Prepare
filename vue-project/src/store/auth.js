import { reactive } from "vue";
import axios from "axios";

const state = reactive({
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null
});

function login(token) {
  state.token = token;
  localStorage.setItem("token", token);
}

function logout() {
  state.token = null;
  state.user = null;
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}

function setUser(user) {
  state.user = user;
  localStorage.setItem("user", JSON.stringify(user));
}

function isAuthenticated() {
  return !!state.token;
}

// Вызывается после логина или при обновлении страницы (если токен есть)
async function getUserFromAPI() {
  if (!state.token) return;

  try {
    const response = await axios.get("http://localhost:8000/users/me", {
      headers: {
        Authorization: `Bearer ${state.token}`
      }
    });
    setUser(response.data);
  } catch (error) {
    console.error("Ошибка получения пользователя:", error);
    logout(); // если токен недействителен
  }
}

export default {
  state,
  login,
  logout,
  setUser,
  isAuthenticated,
  getUserFromAPI
};
