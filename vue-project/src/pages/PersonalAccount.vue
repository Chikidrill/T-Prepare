<template>
  <main class="profile">
    <div class="profile__block">
    <div class="profile__introduction">
      <p class="profile__introduction-text">Личный кабинет</p>
    <div class = "profile__icon">
      <svg width="153" height="153" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="76.5" cy="76.5" r="76.5" fill="black"/>
        <path d="M116.776 106.073C112.999 99.3588 106.813 91.7541 96.7422 87.431C90.9823 91.4606 83.9849 93.8332 76.4415 93.8332C68.8938 93.8332 61.8965 91.4608 56.1364 87.431C46.0656 91.7541 39.8793 99.359 36.1045 106.073C31.0946 114.978 35.0224 127.578 43.6868 127.578C52.3514 127.578 76.4417 127.578 76.4417 127.578C76.4417 127.578 100.53 127.578 109.194 127.578C117.859 127.578 121.786 114.978 116.776 106.073Z" fill="white"/>
        <path d="M76.4415 85.407C91.2351 85.407 103.224 73.4139 103.224 58.6223V52.206C103.224 37.4146 91.2351 25.4215 76.4415 25.4215C61.6457 25.4215 49.6548 37.4146 49.6548 52.2062V58.6225C49.6548 73.4139 61.6459 85.407 76.4415 85.407Z" fill="white"/>
        </svg>
    </div>
  </div>
    <div class="profile__user">
    <h1 class="profile__user1">
      Привет, {{username}}!
    </h1>
    <p class="profile__user-text">Проверим твои знания?</p>
    </div>
    </div>

    <div class="question-block">
      <QuestionCard
        :subject-id="subject.id"
        :subject-name="subject.name"
        :question-count="subject.questionCount"
        :creation-date="subject.creationDate"
      />
    </div>
  </main>
</template>
  
<script>


export default {

};
</script>
  
<style lang="less">
  .profile {
    margin-top: 50px;
    padding-left: 50px;
    &__introduction{
      display: flex;
    }
    &__introduction-text{
      @font1;
      font-size:100px;
      padding-right: 100px;
    }
    &__icon{
      margin-top: 75px;
    }
    &__user{
      margin-top: 20px;
    }
    &__user1{
      @font1;
      font-size: 100px;
    }
    &__user-text{
      @font3;
      font-size: 100px;
    }
  }
  
  

  
</style>