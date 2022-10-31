<template>
  <div class="column text-center" v-if="clueList && Array.isArray(clueList) && clueList.length > 0">
    <div v-for="(element, index) of clueList" :key="index" class="col fit q-my-lg">
      <q-btn @click="!element.purchased ? buyClue(index) : openClue(index)"
        :icon="element.purchased ? 'lock_open' : 'lock'" class="clue-button" color="primary">
        <div class="q-ma-xs">
          {{ $t('pages.clues.clueButton', { number: index + 1, price: element.price }) }}
        </div>
      </q-btn>
    </div>
  </div>
</template>
<style lang="scss">
.clue-button {
  width: 60%
}
</style>
<script setup lang="ts">
import { computed } from 'vue';
import { Loading } from 'quasar';
import { openConfirmDialog, openDialog } from '../core/dialog';
import ClueDialog from 'src/components/ClueDialog.vue';
import { useConfigStore } from 'src/stores/config-store';

const configStore = useConfigStore();

const clueList = computed(() => {
  return configStore.getClueList
})

function buyClue(index: number) {
  openConfirmDialog({
    title: 'Conferma Acquisto', message: `Vuoi comprare l'indizio numero ${index + 1}?`, dismissible: false, hasCancelButton: true, onOkCallback: () => {
      setTimeout(() => {
        configStore.setPurchasedClue(index)
        Loading.hide();
        openClue(index)
      }, 1000);
      Loading.show();
    }
  })
}

function openClue(index: number) {
  openDialog({ customComponent: ClueDialog, componentProps: { clueNumber: index } })
}
</script>
