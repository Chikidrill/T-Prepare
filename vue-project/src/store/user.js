import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({ 
    firstName: 'Иван',
    middleName: 'Иванович',
    secondName: 'Иванов'
  }),
  getters: {
    fullName: state => (
      state.secondName + " " +
      state.firstName + " " + 
      state.middleName
    )
  },
  actions: {
    setFullName() {
      this.firstName = "Петр";
      this.middleName = "Петрович";
      this.secondName = "Петров";
    }
  }
})