<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { tm, t } = useI18n();

const services = computed(() =>
  tm("services.services", {}, { returnObjects: true })
);
</script>

<template>
  <section class="services-section">
    <!-- Naslov i paragraf iznad, desno poravnati -->
    <div class="header-wrapper">
      <h1 class="main-header">{{ t("services.mainHeader") }}</h1>
      <p class="main-paragraf">{{ t("services.mainParagraf") }}</p>
    </div>

    <!-- Sadržaj ispod: slika levo, kartice desno -->
    <div class="content-wrapper">
      <img
        src="@/assets/images/image-4.jpg"
        alt="Services"
        class="services-image"
      />
    </div>
    <div class="content-wrapper">
      <div class="card" v-for="(service, index) in services" :key="index">
        <div class="card-content">
          <h3 class="service-title">{{ service.header }}</h3>
          <p class="service-description">{{ service.paragraf }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #222;
}

/* Naslov i paragraf, desno poravnati, cela širina */
.header-wrapper {
  text-align: left;
  margin-bottom: 40px;
}

.main-header {
  font-size: clamp(2rem, 2.5vw, 3rem);
  font-weight: 200;
  margin-bottom: 12px;
  color: #de7507;
}

.main-paragraf {
  font-size: 1.125rem;
  line-height: 1.5;
  color: #555;
}

/* Glavni sadržaj: slika levo, kartice desno */
.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

/* Slika */
.services-image {
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
  max-height: 400px;
  box-shadow: 0 6px 15px rgb(0 0 0 / 0.1);
}

/* Kartice */
.right-column {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.card {
  /* background-color: #f7ce9b; */
  /* background-color: #f7b772b8; */
  background-color: rgba(255, 252, 232, 1);
  border-radius: 2px;
  padding: 20px 24px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
  transition: transform 0.3s ease;
  cursor: default;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 20px rgb(0 0 0 / 0.15);
}

.service-title {
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: #de7507;
  margin-bottom: 10px;
}

.service-description {
  padding: 25px;
  font-size: 1rem;
  line-height: 1.5;
  color: #de7507;
}

/* Mobilni prikaz */
@media (max-width: 767px) {
  .header-wrapper {
    text-align: center;
    margin-bottom: 24px;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .services-image {
    max-height: 250px;
  }
}
</style>
