<template>
    <q-dialog ref="dialogRef" @hide="onDialogHide">
        <q-card class="q-dialog-plugin bg-info q-pa-xs" style="border-radius: 20px;">
            <q-img :src="`clues/clue${props.clueNumber + 1}.png`" :no-spinner="true">
                <template v-slot:loading>
                    <q-spinner></q-spinner>
                </template>
            </q-img>
        </q-card>
    </q-dialog>
</template>
<style lang="scss">

</style>
<script setup lang="ts">
import { useDialogPluginComponent } from 'quasar'

const props = defineProps<{
    clueNumber: number // zero based
}>();

defineEmits([
    // REQUIRED; need to specify some events that your
    // component will emit through useDialogPluginComponent()
    ...useDialogPluginComponent.emits
])

const { dialogRef, onDialogHide } = useDialogPluginComponent()
</script>
  