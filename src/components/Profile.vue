<template>
    <div>
        <h1>Profile Page</h1>
        <button @click="navigateToHome" class="btn btn-success">Go to Home</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

// Lấy router từ useRouter
const router = useRouter();

// Định nghĩa hàm điều hướng
const navigateToHome = () => {
    router.push('/main'); // Điều hướng đến trang Home
};
</script>