<template>
  <header class="top-bar">
    <!-- LOGO -->
    <router-link to="/" class="logo-container" @click="closeAllMenus">
      <img :src="logo" alt="Blackcoin Logo" class="logo-img" />
      <span class="logo-text">Blackcoin</span>
    </router-link>

    <!-- MENU BUTTON MOBILE -->
    <button
      ref="menuButton"
      class="menu-toggle"
      @click="toggleMenu"
      :aria-expanded="menuOpen"
      aria-label="Menu principal"
    >
      <span v-if="menuOpen">✕</span>
      <span v-else>☰</span>
    </button>

    <!-- NAV -->
    <nav
      ref="navRef"
      class="nav-links"
      :class="{ open: menuOpen }"
    >
      <!-- DROPDOWN -->
      <div
        ref="dropdownRef"
        class="nav-item dropdown"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <button
          class="nav-link dropdown-trigger"
          @click="toggleDropdownMobile"
          :aria-expanded="isDropdownOpen"
        >
          Blockchain <span class="dropdown-arrow">▾</span>
        </button>

        <div
          class="dropdown-menu"
          :class="{ active: isDropdownOpen }"
        >
          <router-link
            to="/whitepaper"
            class="dropdown-item"
            @click="closeAllMenus"
          >
            Livre blanc
          </router-link>

          <router-link
            to="/roadmap"
            class="dropdown-item"
            @click="closeAllMenus"
          >
            Feuille de route
          </router-link>
        </div>
      </div>

      <!-- LINKS -->
      <router-link to="/ecosystem" class="nav-link" @click="closeMenu">
        Écosystème
      </router-link>

      <router-link to="/about" class="nav-link" @click="closeMenu">
        À propos
      </router-link>

      <router-link to="/community" class="nav-link" @click="closeMenu">
        Communauté
      </router-link>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import logo from "../assets/blackcoin-logo.png";

/* =========================
   STATE
========================= */
const menuOpen = ref(false);
const dropdownOpen = ref(false);
const hoverOpen = ref(false);

/* =========================
   REFS DOM
========================= */
const navRef = ref(null);
const dropdownRef = ref(null);
const menuButton = ref(null);

/* =========================
   COMPUTED
========================= */
const isDropdownOpen = computed(() => {
  return window.innerWidth <= 768
    ? dropdownOpen.value
    : hoverOpen.value;
});

/* =========================
   MENU ACTIONS
========================= */
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  document.body.style.overflow = menuOpen.value ? "hidden" : "auto";
};

const closeMenu = () => {
  menuOpen.value = false;
  document.body.style.overflow = "auto";
};

const closeAllMenus = () => {
  menuOpen.value = false;
  dropdownOpen.value = false;
  hoverOpen.value = false;
  document.body.style.overflow = "auto";
};

/* =========================
   DROPDOWN
========================= */
const toggleDropdownMobile = () => {
  if (window.innerWidth <= 768) {
    dropdownOpen.value = !dropdownOpen.value;
  }
};

const handleMouseEnter = () => {
  if (window.innerWidth > 768) {
    hoverOpen.value = true;
  }
};

const handleMouseLeave = () => {
  if (window.innerWidth > 768) {
    hoverOpen.value = false;
  }
};

/* =========================
   EVENTS
========================= */
const handleClickOutside = (e) => {
  if (
    !navRef.value?.contains(e.target) &&
    !menuButton.value?.contains(e.target)
  ) {
    closeAllMenus();
  }
};

const handleResize = () => {
  if (window.innerWidth > 768) {
    dropdownOpen.value = false;
    menuOpen.value = false;
    document.body.style.overflow = "auto";
  }
};

const handleKeydown = (e) => {
  if (e.key === "Escape") {
    closeAllMenus();
  }
};

/* =========================
   LIFECYCLE
========================= */
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  window.addEventListener("resize", handleResize);
  document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
  window.removeEventListener("resize", handleResize);
  document.removeEventListener("keydown", handleKeydown);
  document.body.style.overflow = "auto";
});
</script>

<style scoped>
/* =========================
   HEADER
========================= */
.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: rgba(91, 45, 139, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* LOGO */
.logo-container {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  transition: var(--transition);
}

.logo-container:hover {
  transform: translateY(-2px);
}

.logo-img {
  width: 48px;
  height: 48px;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #fff, var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* NAV */
.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.75rem 1rem;
  border-radius: 8px;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--accent);
}

/* DROPDOWN */
.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  background: var(--secondary);
  border-radius: 12px;
  opacity: 0;
  visibility: hidden;
  transition: var(--transition);
}

.dropdown-menu.active {
  opacity: 1;
  visibility: visible;
}

/* MOBILE */
.menu-toggle {
  display: none;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    flex-direction: column;
    transform: translateX(100%);
    transition: 0.3s;
  }

  .nav-links.open {
    transform: translateX(0);
  }
}
</style>