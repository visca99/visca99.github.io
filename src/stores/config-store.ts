import { defineStore } from 'pinia';

export const useConfigStore = defineStore('Config', {
  state: () => ({
    clueList: [
      {
        purchased: false,
        price: '1.00',
      },
      {
        purchased: false,
        price: '1.00',
      },
      {
        purchased: false,
        price: '2.00',
      },
      {
        purchased: false,
        price: '2.00',
      },
      {
        purchased: false,
        price: '3.50',
      },
      {
        purchased: false,
        price: '5.00',
      },
      {
        purchased: false,
        price: '10.00',
      },
    ],
    lastPurchasedClue: -1,
  }),
  getters: {
    getClueList: (state) => state.clueList,
    getLastPurchasedClueIndex: (state) => state.lastPurchasedClue,
  },
  actions: {
    setPurchasedClue(index: number) {
      this.clueList[index].purchased = true;
      this.lastPurchasedClue = index;
    },
  },
});
