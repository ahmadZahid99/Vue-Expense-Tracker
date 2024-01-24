<!-- App.vue -->
<template>
  <Header />
  <div class="container">
    <Balance />
    <IncomeExpenses />
    <TransactionList />
    <AddTransaction />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import Balance from '../components/Balance.vue';
import IncomeExpenses from '../components/IncomeExpenses.vue';
import TransactionList from '../components/TransactionList.vue';
import AddTransaction from '../components/AddTranscation.vue';

import { onMounted } from 'vue';

import { useTransactionStore } from '../store/tracker';

const transactionStore = useTransactionStore();

onMounted(() => {
  console.log('transactionStore::', transactionStore);
  transactionStore.loadFromLocalStorage();
});

// import { useTransactionStore } from './store/tracker';
// const transactionStore = useTransactionStore();

// const transactions = transactionStore.transactions;
// const total = transactionStore.total;
// const income = transactionStore.income;
// const expense = transactionStore.expense;
</script>

<!-- <template>
    <Header />
    <div class="container">
      <Balance :total="+total" />
      <IncomeExpenses :income="+income" :expense="+expense" />
      <TransactionList :transactions="transactions" @transactionDeleted="handleTransactionDeleted" />
      <AddTranscation @transactionSubmitted="handleTransactionSubmitted" />
    </div>
  </template>
  
  <script setup>
  import Header from './components/Header.vue';
  import Balance from './components/Balance.vue';
  import IncomeExpenses from './components/IncomeExpenses.vue';
  import TransactionList from './components/TransactionList.vue';
  import AddTranscation from './components/AddTranscation.vue';
  
  import { useToast } from 'vue-toastification';
  
  import { ref, computed, onMounted } from 'vue';
  
  const toast = useToast();
  
  const transactions = ref([]);
  
  onMounted(() => {
    if (localStorage.getItem('transactions')) {
      const savedTransacton = JSON.parse(localStorage.getItem('transactions'));
      transactions.value = savedTransacton;
    }
  });
  
  const total = computed(() => {
    return transactions.value.reduce((acc, transaction) => acc + transaction.amount, 0);
  });
  const income = computed(() => {
    return transactions.value
      .filter((transaction) => transaction.amount > 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  });
  
  const expense = computed(() => {
    return transactions.value
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0)
      .toFixed(2);
  });
  
  const handleTransactionSubmitted = (transactionData) => {
    transactions.value.push({
      id: generateUniqueId(),
      text: transactionData.text,
      amount: transactionData.amount,
    });
  
    saveToLocalStorage();
  
    toast.success('Transaction added successfully');
  };
  
  const generateUniqueId = () => {
    return Math.floor(Math.random() * 1000000);
  };
  
  const handleTransactionDeleted = (id) => {
    transactions.value = transactions.value.filter((transaction) => transaction.id !== id);
    saveToLocalStorage();
    toast.success('Transaction deleted successfully');
  };
  
  // Save to localStroage
  const saveToLocalStorage = () => {
    localStorage.setItem('transactions', JSON.stringify(transactions.value));
  };
  </script> -->
