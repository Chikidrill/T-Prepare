<template>
  <div class="question-block">
      <h2 class="subject-name">{{ subjectName }}</h2>
      <p class="creation-date">Дата создания: {{ creationDate }}</p>
  </div>
</template>
<script>
export default {
  props: {
    ubjectId: Number,
    subjectName: String,
    questionCount: Number,
    creationDate: String
  },
  computed: {
    questionCount() {
      return this.questions ? this.questions.length : 0;
    }
  }
};
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