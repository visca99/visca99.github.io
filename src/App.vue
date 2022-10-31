<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { loadLocaleMessages } from './i18n';

onMounted(async () => {
  await loadLocaleMessages(navigator.language.split('-')[0] || 'en');
})
</script>
