<template>
  <div>
    <h1>Admin Page</h1>
    <router-link to="/admin/dashboard" class="btn btn-primary m-2">Dashboard</router-link>
    <router-link to="/admin/settings" class="btn btn-secondary m-2">Settings</router-link>
    <router-view />
  </div>
</template>
