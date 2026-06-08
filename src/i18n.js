import { createI18n } from "vue-i18n";

// ========================
// CONFIG
// ========================

const SUPPORTED_LOCALES = ["fr", "en"];

const namespaces = [
  "CtaSection",
  "DesktopNav",
  "Cotation",
  "MobileMenu",
  "Conclusion",
  "Distribution",
  "Ecosystem",
  "Footer",
  "Header",
  "HelloWorld",
  "HeroSection",
  "Home",
  "InfoAlert",
  "Introduction",
  "Mining",
  "ProblemSection",
  "Progression",
  "Regulation",
  "Risks",
  "StatsSection",
  "TableOfContents",
  "Token",
  "Vision",
  "Whitepaper",

  // LEGAL PAGES
  "PrivacyPolicy",
  "TermsOfUse",
];

// ========================
// LOAD JSON FILES
// ========================

async function loadMessages(locale) {

  const messages = {};

  for (const ns of namespaces) {

    try {

      const res = await fetch(
        `/locales/${locale}/${ns}.json`
      );

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      messages[ns] = await res.json();

    } catch (e) {

      console.warn(
        `[i18n] Missing: /locales/${locale}/${ns}.json`,
        e.message
      );

    }

  }

  return messages;
}

// ========================
// DETECT LOCALE
// ========================

function detectLocale() {

  const savedLang = localStorage.getItem("lang");

  const browserLang =
    navigator.language?.split("-")[0];

  if (
    savedLang &&
    SUPPORTED_LOCALES.includes(savedLang)
  ) {
    return savedLang;
  }

  if (
    browserLang &&
    SUPPORTED_LOCALES.includes(browserLang)
  ) {
    return browserLang;
  }

  return "fr";
}

// ========================
// INIT I18N
// ========================

export async function setupI18n() {

  const locale = detectLocale();

  const [frMessages, enMessages] =
    await Promise.all([
      loadMessages("fr"),
      loadMessages("en"),
    ]);

  const i18n = createI18n({

    legacy: false,

    globalInjection: true,

    locale,

    fallbackLocale: "fr",

    messages: {
      fr: frMessages,
      en: enMessages,
    },

    missingWarn: false,

    fallbackWarn: false,

  });

  // ========================
  // HTML LANG
  // ========================

  document.documentElement.lang = locale;

  return i18n;
}

// ========================
// SWITCH LANGUAGE
// ========================

export function setLocale(i18n, locale) {

  if (!SUPPORTED_LOCALES.includes(locale)) {
    return;
  }

  // Vue I18n reactive update
  i18n.global.locale.value = locale;

  // Save localStorage
  localStorage.setItem("lang", locale);

  // Update HTML lang=""
  document.documentElement.lang = locale;
}