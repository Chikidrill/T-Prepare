<template>
  <div class="popup">
    <div class="popup__content">
      <p class="popup__title"><b>Выбранный предмет:</b> {{ subjectName }}</p> 
      
      <div class="popup__listing" v-show="isExpanded">
        <ol>
          <li v-for="(question, index) in questions" :key="index" class="popup__question">
            {{ question }}
          </li>
        </ol>
      </div>
      <div class="popup__buttons">
        <button @click="toggleQuestions" class="toggle-btn btn">
        {{ isExpanded ? 'Скрыть вопросы' : 'Показать вопросы' }}
      </button>
      <button class="close-btn btn" @click="$emit('close')">Закрыть</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    subjectName: String, 
    questions: Array
  },
  data() {
    return {
      isExpanded: false, // Состояние списка вопросов
    };
  },
  methods: {
    toggleQuestions() {
      this.isExpanded = !this.isExpanded; // Переключаем состояние
    },
    close() {
      this.$emit('close');
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
&__content {
  background: white;
  padding: 30px;
  border-radius: 5px;
  text-align: center;
}
&__title{
  font-family: @font3;
  font-size: 25px;
}
&__listing {
    text-align: left;
    margin-top: 10px;
  }

  &__question {
    font-family: @font3;
    font-size: 18px;
    margin-bottom: 5px;
  }
  &__buttons{
    text-align: right;
  }

.btn {
  padding: 10px 15px;
  
  background: @yellow;
  font-family: @font3;
  text-align: right;
  color:@black;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease ;
    &:hover{
      background-color: @black;
      color: @white;
    }
    
}
.toggle-btn{
      margin-right: 20px;
    }
}
</style>
