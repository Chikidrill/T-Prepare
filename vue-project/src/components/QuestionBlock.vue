<template>
    <div class="question-block">
        <h2 class="subject-name">{{ subjectName }}</h2>
        <p class="question-count">Количество вопросов: {{ questionCount }}</p>
        <p class="creation-date">Дата создания: {{ creationDate }}</p>
    </div>
</template>
<script>
    export default {
    props: {
        subjectId: {
        type: Number,
        required: true
        },
        subjectName: {
        type: String,
        required: true
        },
        questionCount: {
        type: Number,
        required: true
        },
        creationDate: {
        type: String,
        required: true
        }
    }
    }
</script>
<style lang="less">
.question-block {
  align-items: center;
  padding: 35px;  
  margin-bottom: 16px; 
  border-radius: 70px;
  background-color: #EDEDED; 
}

.subject-name {
  padding-left: 20px;
  font: @font1;
  font-size: 30px; 
  font-weight: bold; 
  color: #333333; 
  margin-bottom: 12px; 
}

.question-count,
.creation-date {
  padding-left: 20px;
  font: @font3;
  font-size: 18px; 
  color: #666666; 
  margin-bottom: 12px;
}

.creation-date {
  margin-bottom: 15px; 
}
</style>