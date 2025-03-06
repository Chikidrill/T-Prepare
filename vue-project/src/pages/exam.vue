<template>
    <div class="exam-page">
      <div class="exam-page__container">
        <h2 class="exam-page__title">{{ subject }}</h2>
        
        <div v-if="randomQuestions.length > 0">
          <div v-for="(question, index) in randomQuestions" :key="index" class="question">
            <p>{{ question.question }}</p>
  
            <!-- Для каждого варианта ответа создаем radio button с label -->
            <div v-for="(option, idx) in question.allOptions" :key="idx" class="option">
              <input 
                type="radio" 
                :id="`question-${index}-option-${idx}`" 
                :name="`question-${index}`"
                :value="option"
                v-model="answers[index]" 
              />
              <label :for="`question-${index}-option-${idx}`">{{ option }}</label>
            </div>
          </div>
        </div>
        <div v-else>
          <p>Вопросы не загружены. Пожалуйста, загрузите вопросы.</p>
        </div>
        <div class="exam-page__buttons">
            <button class="check-btn btn" @click="checkAnswers">Проверить ответы</button>
            <button class="back-btn btn" @click="goToPersonalAccount">Вернуться</button>
        </div>
        
        <div v-if="result !== null" class="result">
            <p>{{ resultMessage }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        subject: this.$route.query.subject || 'Неизвестный предмет', // Получаем название из маршрута
        questions: this.$route.query.questions ? JSON.parse(this.$route.query.questions) : [], // Получаем вопросы из маршрута
        answers: {},  // Модель для сохранения выбранных вариантов
        result:null,
        resultMessage: '',
      };
    },
    computed: {
      randomQuestions() {
        if (this.questions && Array.isArray(this.questions) && this.questions.length > 0) {
          let shuffled = [...this.questions];  // Копия массива вопросов
          shuffled.sort(() => 0.5 - Math.random());  // Перемешивание вопросов
          // Процесс формирования всех вариантов ответа (правильный + неправильные)
          shuffled.forEach(question => {
            question.allOptions = this.allOptions(question);
          });
          return shuffled.slice(0, 3);  // Берем только 3 случайных вопроса
        }
        return [];
      }
    },
    methods: {
  // Составляем все варианты ответа (правильный + неправильные)
  allOptions(question) {
  const correctAnswer = question.correct_answer;
  return [correctAnswer, ...question.wrong_answers]; // Создаем массив с правильным и неправильными ответами
},


  checkAnswers() {
    let correctCount = 0; // Обнуляем счетчик перед каждым запуском теста

    this.randomQuestions.forEach((question, index) => {
      // Проверяем, что ответ был выбран
      if (this.answers[index] !== undefined) {
        // Сравниваем выбранный ответ с правильным (первым элементом массива answers)
        if (this.answers[index] === question.correct_answer) {
          correctCount++;
        }
      }
    });

    // Формируем сообщение в зависимости от количества правильных ответов
    if (correctCount === this.randomQuestions.length) {
      this.resultMessage = `Поздравляю! Вы ответили правильно на все ${correctCount} вопроса.`;
    } else {
      this.resultMessage = `Вы ответили правильно на ${correctCount} из ${this.randomQuestions.length} вопросов.`;
    }
    this.result = correctCount; // Сохраняем результат
  },
  goToPersonalAccount() {
    this.$router.push({path: '/personalaccount' })
  },
}
}
  </script>
  
  <style lang="less">
  .exam-page {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;

  &__title{
    font-family: @font1;
    font-size: 30px;
  }
  
  &__container {
    max-width: 800px;
    width: 100%;
  }
  &__buttons{
    display: flex;
    gap: 50px;
  }
  
  .question {
    margin-bottom: 20px;
    font-family: @font1;
    font-size: 20px;
  }
  
  .option {
    display: flex;
    align-items: center;
    margin: 10px 0;
    font-family: @font3;
  }
  
  input[type="radio"] {
    margin-right: 10px;
  }
  
  label {
    font-size: 16px;
    cursor: pointer;
  }
}
  </style>
  