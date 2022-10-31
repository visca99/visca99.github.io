<template>
  <q-page>
    <div
      style="
        display: table-cell;
        vertical-align: middle;
        height: 100vh;
        width: 100vw;
      "
    >
      <div style="width: 85vw; align-content: center; margin: auto">
        <div class="q-py-sm">
          <q-img src="logo.png"></q-img>
        </div>
        <div class="q-py-sm">
          <q-input
            rounded
            outlined
            v-model="loginData.username"
            :label="$t('pages.login.username')"
          >
            <template v-slot:prepend>
              <q-icon name="person" color="info" />
            </template>
          </q-input>
        </div>
        <div class="q-py-sm">
          <q-input
            rounded
            outlined
            v-model="loginData.password"
            :label="$t('pages.login.password')"
            type="password"
          >
            <template v-slot:prepend>
              <q-icon name="key" color="info" />
            </template>
          </q-input>
        </div>
        <div class="q-py-sm">
          <q-btn
            rounded
            color="primary"
            text-color="secondary"
            class="full-width"
            @click="$router.push('map')"
            :label="$t('pages.login.login')"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const loginData = ref({
  username: null,
  password: null,
});
</script>
