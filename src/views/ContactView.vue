<script setup></script>
<template>
  <section class="contact-page">
    <h1>Kontaktieren Sie uns</h1>
    <div class="contact-info">
      <div class="contact-item">
        <h2>Address</h2>
        <p>123 Main Street, Cityville, Country</p>
      </div>
      <div class="contact-item">
        <h2>Phone</h2>
        <p>+1 (555) 123-4567</p>
      </div>
      <div class="contact-item">
        <h2>Email</h2>
        <p>info@example.com</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-page {
  max-width: 600px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: Arial, sans-serif;
  color: #de7507;
}

h1 {
  text-align: center;
  margin-bottom: 32px;
  font-weight: 700;
  font-size: 2rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.contact-item h2 {
  font-weight: 600;
  font-size: 1.25rem;
  margin-bottom: 8px;
}

.contact-item p {
  font-size: 1rem;
  line-height: 1.5;
  color: #555;
}
</style>
