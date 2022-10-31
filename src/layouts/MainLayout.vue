<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="q-px-md">
        <q-icon class="text-secondary" name="local_atm" size="md" />
        <q-toolbar-title class="text-secondary"> MoneyHunt </q-toolbar-title>
        <q-badge color="secondary" text-color="primary" class="text-subtitle1">
          50000€
        </q-badge>
      </q-toolbar>
    </q-header>

    <!-- <q-footer class="text-secondary" style="border-top-left-radius: 50%180px; border-top-right-radius: 50%180px;">
      <q-toolbar>
        <q-toolbar-title>
          <q-tabs v-model="tab" dense narrow-indicator>
            <q-tab name="explore" label="Explore" icon="o_explore" />
            <q-tab name="clues" label="Clues" icon="o_menu_book" />
            <q-tab name="settings" label="Settings" icon="o_settings" />
          </q-tabs>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->

    <q-page-container>
      <router-view />
      <q-page-sticky position="bottom-right" :offset="[15, 15]">
        <q-btn
          fab
          color="secondary"
          @click="openDialog({ customComponent: DialogMenu })"
        >
          <q-icon name="widgets" color="primary" size="sm"></q-icon>
        </q-btn>
      </q-page-sticky>
      <q-page-sticky
        v-if="configStore.getLastPurchasedClueIndex >= 0"
        position="bottom-right"
        :offset="[80, 15]"
      >
        <q-btn
          fab
          color="secondary"
          @click="
            openDialog({
              customComponent: ClueDialog,
              componentProps: {
                clueNumber: configStore.getLastPurchasedClueIndex,
              },
            })
          "
        >
          <q-icon name="work" color="primary" size="sm"></q-icon>
        </q-btn>
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import DialogMenu from '../components/DialogMenu.vue';
import ClueDialog from 'src/components/ClueDialog.vue';
import { openDialog } from '../core/dialog';
import { useConfigStore } from 'src/stores/config-store';

const configStore = useConfigStore();
</script>
