<template>
  <div class="popup">
    <div class="popup__content">
      <h2>Выбранный предмет: {{ subjectName }}</h2> 
      <button class="close-btn" @click="close">Закрыть</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subjectName: String, 
  },
  methods: {
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
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

.close-btn {
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
}
</style>
