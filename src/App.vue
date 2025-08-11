<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const isMenuOpen = ref(false);
const isLangOpen = ref(false);
const toggleLang = () => (isLangOpen.value = !isLangOpen.value);
const setLang = (lang) => {
  locale.value = lang;
  isLangOpen.value = false;
};
const { t, locale } = useI18n();
</script>

<template>
  <header>
    <div class="top-bar">
      <nav :class="{ open: isMenuOpen }">
        <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen">☰</button>
        <ul>
          <li>
            <router-link to="/">{{ t("nav.home") }}</router-link>
          </li>
          <li>
            <router-link to="/services">{{ t("nav.services") }}</router-link>
          </li>
          <li>
            <router-link to="/contact">{{ t("nav.contact") }}</router-link>
          </li>
        </ul>
      </nav>
      <div class="lang-dropdown" @click="toggleLang">
        <span>{{ locale === "de" ? "Deutsch" : "Eglish" }}</span>
        <span class="arrow" :class="{ open: isLangOpen }"></span>
        <ul v-if="isLangOpen" class="dropdown-list">
          <li @click.stop="setLang('de')">Deutsch</li>
          <li @click.stop="setLang('en')">Eglish</li>
        </ul>
      </div>
    </div>

    <h1>Hausmeister & lieferservice</h1>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  background: #fffae6;
  padding: clamp(1rem, 4vw, 2rem);
  border-bottom: 1px solid #ddd;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

nav ul li a {
  text-decoration: none;
  color: #de7507;
  font-size: 20px;
  font-weight: 500;
  transition: color 0.2s;
}

nav ul li a:hover {
  color: #188da2;
}

/* Languages */

.lang-dropdown {
  position: relative;
  display: inline-block;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px 36px 10px 12px;
  cursor: pointer;
  font-size: 1rem;
  width: 160px;
  user-select: none;
}

.selected {
  display: inline-block;
}

.arrow {
  position: absolute;
  right: 12px;
  top: 50%;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #555;
  transform: translateY(-50%);
  transition: transform 0.2s ease;
}

.arrow.open {
  transform: translateY(-50%) rotate(180deg);
}

.dropdown-list {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 10;
}

.dropdown-list li {
  padding: 10px;
  cursor: pointer;
}

.dropdown-list li:hover {
  background: #f5f5f5;
}

/* Strelica */
.custom-select .arrow {
  position: absolute;
  top: 50%;
  right: 12px;
  width: 0;
  height: 0;
  pointer-events: none;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #555;
  transform: translateY(-50%);
}

.custom-select select:focus {
  border-color: #0078d4;
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 120, 212, 0.2);
}

header h1 {
  text-transform: uppercase;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 1rem;
  color: #188da2;
}

/* Hamburger */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
}

/* Responsive */
@media (max-width: 768px) {
  .top-bar {
    flex-direction: row;
  }

  /* Hamburger  */
  .menu-toggle {
    display: block;
  }

  nav ul {
    display: none;
    flex-direction: column;
    background: white;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    padding: 1rem;
    border-top: 1px solid #ddd;
  }

  nav.open ul {
    display: flex;
  }

  .lang-select {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
}
</style>
