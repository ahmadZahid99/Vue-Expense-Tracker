// src/store/index.js
import { defineStore } from 'pinia';

import { useToast } from 'vue-toastification';

const toast = useToast();

export const useTransactionStore = defineStore('transaction', {
  state: () => ({
    transactions: [],
  }),
  getters: {
    total() {
      return this.transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
    },
    income() {
      return this.transactions
        .filter((transaction) => transaction.amount > 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0);
    },
    expense() {
      return this.transactions
        .filter((transaction) => transaction.amount < 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0)
        .toFixed(2);
    },
  },
  actions: {
    addTransaction(transaction) {
      this.transactions.push({
        id: this.generateUniqueId(),
        text: transaction.text,
        amount: transaction.amount,
      });

      toast.success('Transaction added successfully');
      this.saveToLocalStorage();
    },
    deleteTransaction(id) {
      this.transactions = this.transactions.filter((transaction) => transaction.id !== id);
      toast.success('Transaction deleted successfully');
      this.saveToLocalStorage();
    },
    generateUniqueId() {
      return Math.floor(Math.random() * 1000000);
    },
    saveToLocalStorage() {
      localStorage.setItem('transactions', JSON.stringify(this.transactions));
    },
    loadFromLocalStorage() {
      if (localStorage.getItem('transactions')) {
        this.transactions = JSON.parse(localStorage.getItem('transactions'));
      }
    },
  },

  getters: {
    total() {
      return this.transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
    },
    income() {
      return this.transactions
        .filter((transaction) => transaction.amount > 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0);
    },
    expense() {
      return this.transactions
        .filter((transaction) => transaction.amount < 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0)
        .toFixed(2);
    },
  },
});
