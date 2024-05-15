<script setup lang="ts">
defineProps({
  cardType: {
    type: String, // pets or products
    required: true,
  },
  value1: {
    type: String,
    default: "",
  },
  value2: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <p v-if="cardType == 'pets'">
    Gene: <span>{{ value1 }}</span> <span class="spacer">&#x2022;</span> 
    Age:
    <span>{{value2}}</span>
  </p>
  <p v-if="cardType == 'products'">
    Product: <span>{{ value1 }}</span> <span class="spacer">&#x2022;</span> Size:
    <span>{{value2}}</span>
  </p>
</template>
