<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
<template>
  <section class="hero-section">
    <img src="../assets/images/hero-img.jpg" alt="Hero" class="hero-image" />
    <div class="overlay"></div>
    <div class="hero-content">
      <h1>{{ t("home.hero.header") }}</h1>
      <router-link to="/services" class="hero-button">
        {{ t("home.hero.button") }}
      </router-link>
    </div>
  </section>
</template>
<style scoped>
.hero-section {
  position: relative;
  height: 70vh;
  width: 100%;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  color: white;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}
.hero-button {
  color: #111111;
  background-color: #fcfcfc;
  margin-top: 20px;
  padding: 12px 24px;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.hero-button:hover {
  background-color: #f0f0f0;
  color: #000;
}
/* Dodaj na kraj tvojeg <style scoped> bloka */

@media (max-width: 640px) {
  .hero-section {
    height: 50vh; /* manja visina na mobilnom */
  }

  .hero-content h1 {
    font-size: 1.5rem; /* manji naslov */
    margin-bottom: 12px;
    padding: 0 10px; /* da ne lepi uz ivice */
  }

  .hero-button {
    font-size: 0.875rem;
    padding: 10px 20px;
    margin-top: 12px;
    border-radius: 16px;
  }
}
</style>
