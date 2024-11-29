<template>
  <div>
    <h1>User Page</h1>
    <p>User ID: {{ id }}</p>
    <router-link to="/main" class="btn btn-secondary">Back to Home</router-link>
  </div>
</template>

<script setup>
const props = defineProps(['id']);
</script>
