<template>
    <q-dialog ref="dialogRef" @hide="onDialogHide">
        <q-card class="q-dialog-plugin bg-info" style="width: 80%; border-radius: 20px;">
            <div class="col">
                <div class="row justify-center q-py-sm q-mx-sm">
                    <q-btn rounded color="primary" text-color="secondary" class="full-width"
                        @click="$router.push('map')">
                        <q-icon name="explore" class="q-pr-sm" />
                        <div>
                            {{ $t('dialogMenu.map') }}
                        </div>
                    </q-btn>
                </div>
                <div class="row justify-center q-py-sm q-mx-sm">
                    <q-btn rounded color="primary" text-color="secondary" class="full-width"
                        @click="$router.push('clues')">
                        <q-icon name="menu_book" class="q-pr-sm" />
                        <div>
                            {{ $t('dialogMenu.clues') }}
                        </div>
                    </q-btn>
                </div>
                <div class="row justify-center q-py-sm q-mx-sm">
                    <q-btn rounded color="primary" text-color="secondary" class="full-width"
                        @click="$router.push('settings')">
                        <q-icon name="settings" class="q-pr-sm" />
                        <div>
                            {{ $t('dialogMenu.settings') }}
                        </div>
                    </q-btn>
                </div>
                <div class="row justify-center q-py-sm q-mx-sm">
                    <q-btn rounded color="primary" text-color="secondary" class="full-width"
                        @click="$router.push('participants')">
                        <q-icon name="people" class="q-pr-sm" />
                        <div>
                            {{ $t('dialogMenu.participants') }}
                        </div>
                    </q-btn>
                </div>
            </div>
        </q-card>
    </q-dialog>
</template>
<style lang="scss">
.dialog-menu-button {
    width: 55%;
}
</style>
<script setup>
import { useDialogPluginComponent } from 'quasar'

// const props = defineProps({
//     // ...your custom props
// })

defineEmits([
    // REQUIRED; need to specify some events that your
    // component will emit through useDialogPluginComponent()
    ...useDialogPluginComponent.emits
])

const { dialogRef, onDialogHide } = useDialogPluginComponent()
</script>
  