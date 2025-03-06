<template>
  <div class="popup">
    <div class="popup__content">
      <p class="popup__title"><b>Выбранный предмет:</b> {{ subjectName }}</p> 
      <button class="close-btn btn" @click="$emit('close')"> 
        <svg class="close-btn__icon" width="20" height="20" viewBox="0 0 24 24">
        <path d="M11.9998 13.4L7.0998 18.3C6.91647 18.4834 6.68314 18.575 6.3998 18.575C6.11647 18.575 5.88314 18.4834 5.6998 18.3C5.51647 18.1167 5.4248 17.8834 5.4248 17.6C5.4248 17.3167 5.51647 17.0834 5.6998 16.9L10.5998 12L5.6998 7.10005C5.51647 6.91672 5.4248 6.68338 5.4248 6.40005C5.4248 6.11672 5.51647 5.88338 5.6998 5.70005C5.88314 5.51672 6.11647 5.42505 6.3998 5.42505C6.68314 5.42505 6.91647 5.51672 7.0998 5.70005L11.9998 10.6L16.8998 5.70005C17.0831 5.51672 17.3165 5.42505 17.5998 5.42505C17.8831 5.42505 18.1165 5.51672 18.2998 5.70005C18.4831 5.88338 18.5748 6.11672 18.5748 6.40005C18.5748 6.68338 18.4831 6.91672 18.2998 7.10005L13.3998 12L18.2998 16.9C18.4831 17.0834 18.5748 17.3167 18.5748 17.6C18.5748 17.8834 18.4831 18.1167 18.2998 18.3C18.1165 18.4834 17.8831 18.575 17.5998 18.575C17.3165 18.575 17.0831 18.4834 16.8998 18.3L11.9998 13.4Z" fill="black"/>
        </svg>
      </button>
      <div class="popup__listing" v-show="isExpanded">
        <ol>
          <li v-for="(question, index) in questions" :key="index">
            {{ question.question }}
          </li>
        </ol>
      </div>
      
      <div class="popup__buttons">
        
        <button class="share-btn btn" @click="isSharePopupVisible = true">Поделиться
          <svg class="share-btn__icon" width="15" height="12" viewBox="0 0 18 15">
            <path d="M18 7L11 0V4C4 5 1 10 0 15C2.5 11.5 6 9.9 11 9.9V14L18 7Z" fill="black"/>
          </svg>
        </button>
        <button @click="toggleQuestions" class="toggle-btn btn">
          {{ isExpanded ? 'Скрыть вопросы' : 'Показать вопросы' }}
        </button>
        <button class="test-btn btn"  @click="goToExam" :subject-name="selectedSubject?.name" :questions="selectedSubject?.questions">Создать тест</button>
      </div>
      
    </div>
    <ReferralPopup v-if="isSharePopupVisible" @close="isSharePopupVisible = false" />
  </div>
</template>

<script>
import ReferralPopup from './ReferalPopUp.vue';

export default {
  components: {
    ReferralPopup,
    selectedSubject: null,
  },
  props: {
    subjectName: String,
    questions: Array,
    selectedSubject: {
    type: Object,
    default: () => null, // Это обеспечит значение по умолчанию
  },
  },
  data() {
    return {
      isExpanded: false,
      isPopupVisible: true,
      isSharePopupVisible: false,
      visibleCount: 10, // Сколько вопросов показывать
    };
  },
  computed: {
    visibleQuestions() {
      return this.questions.slice(0, this.visibleCount);
    }
  },
  methods: {
    toggleQuestions() {
      this.isExpanded = !this.isExpanded; 
    },
    close() {
      this.$emit('close');
    },
    goToExam() {
    // Сериализуем вопросы в строку перед передачей
    const questionsString = JSON.stringify(this.questions);
    this.$router.push({ 
      path: '/exam', 
      query: { 
        subject: this.subjectName, 
        questions: questionsString 
      }
    });

  }
}
};
</script>

<style lang="less">
.popup {
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup__content {
  position: relative; 
  background: white;
  padding: 30px;
  border-radius: 5px;
  text-align: center;
}
.popup__title {
  font-family: @font3;
  font-size: 25px;
}
.popup__listing {
  text-align: left;
  margin-top: 10px;
  margin-bottom: 35px;
  font-family: @font3;
  max-height: 200px; /* Ограничиваем максимальную высоту */
  overflow-y: auto; /* Добавляем вертикальную прокрутку */
  padding-right: 10px; /* Отступ для вертикального скроллбара */
}

.popup__buttons {
  display: flex;
  gap: 45px;
}


.btn {
  padding: 10px 15px;
  background: @yellow;
  font-family: @font3;
  text-align: right;
  color: @black;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: all 0.1s ease-in ;
}
.close-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding: 0;
  width: 30px;
  height: 30px;
  top: -15px;
  right: -15px;
  background: @yellow;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  &:hover path, &:focus path {
    fill: white;
  }
}  
.share-btn {
  cursor: pointer;
  &:hover path, &:focus path {
    fill: white;
  }
}
</style>
