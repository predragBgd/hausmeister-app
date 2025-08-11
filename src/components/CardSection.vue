<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n({ useScope: "global" });

const services = computed(() =>
  tm("home.card.services", { returnObjects: true })
);
</script>
<template>
  <div class="card">
    <!-- Naslov -->
    <div class="card-header">
      <h2 class="card-title">{{ t("home.card.mainHeader") }}</h2>
    </div>

    <!-- Sadržaj u dve kolone -->
    <div class="card-content">
      <!-- Leva kolona: usluge -->
      <div class="card-services">
        <div class="service" v-for="(service, index) in services" :key="index">
          <h3 class="service-title">
            {{ service.header }}
          </h3>
          <p class="service-description">
            {{ service.paragraf }}
          </p>
        </div>
      </div>
      <!-- Desna kolona: slika -->
      <div class="card-image">
        <img src="@/assets/images/image-1.jpg" alt="Service image" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  text-align: center;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* Naslov */
.card-header {
  padding: 24px;
}

.card-title {
  text-align: center;
  font-size: clamp(20px, 2vw, 32px);
  font-weight: bold;
  margin: 0;
}

/* Sadržaj */
.card-content {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .card-content {
    flex-direction: row;
    margin: 40px;
  }
}

/* Leva kolona */
.card-services {
  flex: 1;
  padding: 24px;
}

.service {
  margin-bottom: 24px;
  padding: 50px;
}

.service-title {
  font-size: clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.625), 20px);
  line-height: 1.5;
  margin: 0;
  font-weight: 600;
  color: #de7607;
}

.service-description {
  font-size: 0.875rem;
  margin-top: 8px;
  line-height: 1.4;
  color: #de7507;
}

/* Desna kolona */
.card-image {
  flex: 1;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 3 / 4;
}
</style>
