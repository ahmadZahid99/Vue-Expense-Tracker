<!-- Balance.vue -->
<template>
  <h4>Your Balance</h4>
  <h1 id="balance">${{ transactionStore.total }}</h1>
</template>

<script setup>
import { useTransactionStore } from '../store/tracker';
const transactionStore = useTransactionStore();
</script>

<!-- <template>
  <h4>Your Balance</h4>
  <h1 id="balance">${{ total }}</h1>
</template>
<script setup>
const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
});
</script> -->
