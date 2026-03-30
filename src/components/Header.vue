<template>
  <header class="top-bar">
    <!-- LOGO -->
    <router-link to="/" class="logo-container" @click="closeAllMenus">
      <img :src="logo" alt="Blackcoin Logo" class="logo-img" />
      <span class="logo-text">Blackcoin</span>
    </router-link>

    <div class="right-section">
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
    </div>
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
  if (menuOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
    dropdownOpen.value = false;
  }
};

const closeMenu = () => {
  menuOpen.value = false;
  document.body.style.overflow = "auto";
  dropdownOpen.value = false;
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
const toggleDropdownMobile = (e) => {
  e.stopPropagation();
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

.right-section {
  display: flex;
  align-items: center;
  gap: 1rem;
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

/* NAV DESKTOP */
.nav-links {
  display: flex;
  gap: 2rem;
  position: relative;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
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
  left: 0;
  min-width: 200px;
  background: rgba(91, 45, 139, 0.98);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 0.5rem 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.dropdown:hover .dropdown-menu,
.dropdown-menu.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  display: block;
  padding: 0.75rem 1.5rem;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.dropdown-item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--accent);
}

/* MOBILE STYLES */
.menu-toggle {
  display: none;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid rgba(255, 255, 255, 0.3);
    color: white;
    font-size: 1.8rem;
    width: 50px;
    height: 50px;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 2000;
    position: relative;
  }

  .menu-toggle:active {
    transform: scale(0.95);
    background: rgba(255, 255, 255, 0.3);
  }

  .right-section {
    position: relative;
  }

  .nav-links {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(91, 45, 139, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 2rem;
    gap: 0.5rem;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    z-index: 1500;
    overflow-y: auto;
  }

  .nav-links.open {
    transform: translateX(0);
  }

  /* Dropdown en mobile */
  .dropdown {
    width: 100%;
    position: relative;
  }

  .dropdown-trigger {
    width: 100%;
    justify-content: space-between;
    display: flex;
    align-items: center;
  }

  .dropdown-arrow {
    transition: transform 0.3s ease;
  }

  .dropdown-menu {
    position: static;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    margin-top: 0.5rem;
    margin-left: 1rem;
    padding: 0;
    opacity: 0;
    visibility: hidden;
    transform: scaleY(0);
    transform-origin: top;
    height: 0;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: none;
  }

  .dropdown-menu.active {
    opacity: 1;
    visibility: visible;
    transform: scaleY(1);
    height: auto;
    padding: 0.5rem 0;
  }

  .nav-link, 
  .dropdown-trigger {
    width: 100%;
    text-align: left;
    padding: 1rem;
    font-size: 1.1rem;
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
  }

  .dropdown-item {
    padding: 0.75rem 1rem;
    margin-left: 1rem;
  }
}
</style>