<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Vue App</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/home" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/profile" class="nav-link">Profile</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/dashboard" class="nav-link">Admin Dashboard</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/protected" class="nav-link">Protected</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Router View -->
    <div class="container mt-4">
      <router-view />
    </div>
  </div>
</template>