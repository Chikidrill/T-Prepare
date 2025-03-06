<template>
  <main class="profile">
    <div class="profile__block">
      <div class="profile__introduction">
        <p class="profile__introduction-text">Личный кабинет</p>
        <div class="profile__icon">
          <svg width="75" height="75" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="76.5" cy="76.5" r="76.5" fill="black"/>
            <path d="M116.776 106.073C112.999 99.3588 106.813 91.7541 96.7422 87.431C90.9823 91.4606 83.9849 93.8332 76.4415 93.8332C68.8938 93.8332 61.8965 91.4608 56.1364 87.431C46.0656 91.7541 39.8793 99.359 36.1045 106.073C31.0946 114.978 35.0224 127.578 43.6868 127.578C52.3514 127.578 76.4417 127.578 76.4417 127.578C76.4417 127.578 100.53 127.578 109.194 127.578C117.859 127.578 121.786 114.978 116.776 106.073Z" fill="white"/>
            <path d="M76.4415 85.407C91.2351 85.407 103.224 73.4139 103.224 58.6223V52.206C103.224 37.4146 91.2351 25.4215 76.4415 25.4215C61.6457 25.4215 49.6548 37.4146 49.6548 52.2062V58.6225C49.6548 73.4139 61.6459 85.407 76.4415 85.407Z" fill="white"/>
          </svg>
        </div>
      </div>
      <div class="profile__user">
        <h1 class="profile__username">
          Привет, {{ username }}!
        </h1>
        <div class="profile__user-content">
          <p class="profile__user-text">Проверим твои знания?</p>
        <button class = "profile__newblock-btn" @click="isUploadPopupVisible = true">
          <svg class = "profile__newblock-icon" width="20" height="16" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.625 28C2.62812 28 1.77504 27.6482 1.06575 26.9447C0.356458 26.2412 0.00120833 25.3945 0 24.4045V20.809C0 20.2996 0.174 19.873 0.522 19.529C0.869999 19.185 1.30017 19.0124 1.8125 19.0112C2.32483 19.01 2.7556 19.1826 3.10481 19.529C3.45402 19.8754 3.62741 20.302 3.625 20.809V24.4045H25.375V20.809C25.375 20.2996 25.549 19.873 25.897 19.529C26.245 19.185 26.6751 19.0124 27.1875 19.0112C27.6998 19.01 28.1306 19.1826 28.4798 19.529C28.829 19.8754 29.0024 20.302 29 20.809V24.4045C29 25.3933 28.6453 26.24 27.936 26.9447C27.2267 27.6494 26.3731 28.0012 25.375 28H3.625ZM12.6875 6.15732L9.28905 9.52811C8.92655 9.88766 8.49639 10.0602 7.99856 10.0459C7.50072 10.0315 7.06995 9.84391 6.70624 9.48316C6.37395 9.12361 6.19995 8.70414 6.18425 8.22474C6.16854 7.74534 6.34254 7.32586 6.70624 6.96631L13.2312 0.494408C13.4125 0.314633 13.6088 0.187593 13.8203 0.113285C14.0318 0.0389784 14.2583 0.00122616 14.5 2.76581e-05C14.7417 -0.00117084 14.9682 0.0365814 15.1797 0.113285C15.3911 0.18999 15.5875 0.31703 15.7687 0.494408L22.2937 6.96631C22.6562 7.32586 22.8302 7.74534 22.8157 8.22474C22.8012 8.70414 22.6272 9.12361 22.2937 9.48316C21.9312 9.84271 21.5011 10.0303 21.0032 10.0459C20.5054 10.0614 20.0746 9.88886 19.7109 9.52811L16.3125 6.15732V19.0112C16.3125 19.5206 16.1385 19.9479 15.7905 20.293C15.4425 20.6382 15.0123 20.8102 14.5 20.809C13.9877 20.8078 13.5575 20.6352 13.2095 20.2912C12.8615 19.9473 12.6875 19.5206 12.6875 19.0112V6.15732Z" fill="black"/>
          </svg>
          Добавить
        </button> 
        </div>
      </div>
    </div>
    

    <div class="profile__question-block" v-for="subject in subjects" :key="subject.id">
      <QuestionCard
        :subject-id="subject.id"
        :subject-name="subject.name"
        :question-count="subject.questionCount"
        :creation-date="subject.creationDate"
      />

      <div class="button-container">
        <button @click="openPopup(subject)" class="pp-btn">Открыть вопросы для блока "{{ subject.name }}"</button>
        <button @click="deleteSubject(subject.id)" class="delete-btn pp-btn">Удалить</button>
      </div>

    </div>
    <Popup v-if="isPopupOpen" :subject-name="selectedSubject?.name" :questions="selectedSubject?.questions" @close="closePopup" />
    <UploadPopUp v-if="isUploadPopupVisible" @close="isUploadPopupVisible = false" @addSubject="addNewSubject" />
    <div class ="background-img">
      <img src = @/assets/background2.png/>
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from 'vue';
import Popup from '@/components/PopUp.vue';
import QuestionCard from '@/components/QuestionBlock.vue';
import UploadPopUp from '@/components/UploadPopUp.vue';

export default {
  components: { QuestionCard, Popup, UploadPopUp },
  data() {
    return {
      username: "user",
      subjects: [
        { id: 1, name: 'Программирование', creationDate: new Date().toLocaleDateString(), questionCount: '0', questions: [] },
        { id: 2, name: 'Математика', creationDate: new Date().toLocaleDateString(), questionCount: '0', questions: [] }
      ],
      isPopupOpen: false,
      selectedSubject: null,
      isUploadPopupVisible: false
    };
  },
  methods: {
  openPopup(subject) {
    this.selectedSubject = subject;
    this.isPopupOpen = true;
  },
  closePopup() {
    this.isPopupOpen = false;
  },
  addNewSubject(subjectName, jsonData) {
    const newSubject = {
      id: this.subjects.length + 1,
      name: subjectName,
      creationDate: new Date().toLocaleDateString(),
      questionCount: jsonData.length,  // Количество вопросов из JSON
      questions: jsonData,  // Сохраняем вопросы
    };
    this.subjects.push(newSubject);
    this.saveSubjectsToLocalStorage();
  },
  deleteSubject(subjectId) {
    this.subjects = this.subjects.filter(subject => subject.id !== subjectId);
    this.saveSubjectsToLocalStorage();
  },
  saveSubjectsToLocalStorage() {
    localStorage.setItem('subjects', JSON.stringify(this.subjects));
  },
  loadSubjectsFromLocalStorage() {
    const savedSubjects = localStorage.getItem('subjects');
    if (savedSubjects) {
      this.subjects = JSON.parse(savedSubjects);
    }
  }
},
mounted() {
  this.loadSubjectsFromLocalStorage();
}
};
</script>



<style lang="less">
.button-container {
  display: flex;
  justify-content: flex-end; /* Выравнивание кнопки вправо */
  gap: 50px;
}
.pp-btn {
  padding: 10px 15px;
  background: @yellow;
  font-family: @font3;
  text-align: right;
  color:@black;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  transition: all 0.5s ease ;
    &:hover{
      background-color: @black;
      color: @white;
    }
}

.profile {
  margin-top: 50px;
  margin-bottom: 50px;
  padding-left: 160px;
  padding-right: 160px;
  
  &__introduction {
    display: flex;
    text-align: center;
    gap: 30px;
  }
  
  &__introduction-text {
    font: @font1;
    font-size: 60px;

  }
  
  &__user-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__icon {
    width: 75px;
    height: 75px;
    margin-top: 50px;
  }

  &__user {
    margin-top: 20px;
  }

  &__username {
    font-family: @font1;
    font-size: 40px;
  }

  &__user-text {
    font-family: @font3;
    font-size: 40px;

  }

  &__user-text,
  &__btn{
    display: inline-block;
  }

  &__newblock-btn{
    padding: 15px 20px;
    background: @yellow;
    font-family: @font3;
    border-radius: 20px;
    margin-left: 10px;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.1s ease ;
    &:hover{
        background-color: @black;
        color: @white;
      }
      &:hover path,
    &:focus path{
      fill: white;
    }
  }

  &__newblock-icon{
    margin-right: 10px;
    &:hover path,
    &:focus path{
      fill: white;
    }
  }

  &__question-block {
    margin-top: 50px;
    margin-bottom: 10px;
  }

}

.background-img{
  position: fixed; 
    bottom: 0;
    left: 0;
    width: 100vw; 
    height: auto; 
    overflow: hidden; 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1; 
}
</style>