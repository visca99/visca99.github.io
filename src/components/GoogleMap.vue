<template>
  <div style="height: calc(100vh - 50px)">
    <GMapMap
      :center="center"
      :zoom="15"
      map-type-id="hybrid"
      style="width: 100vw; height: 100vh"
      :options="{
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
      }"
    >
      <GMapMarker
        :position="center"
        :icon="{
          url: 'https://cdn3.iconfinder.com/data/icons/map-14/144/Map-10-512.png',
          scaledSize: { width: 45, height: 45 },
        }"
      />"
    </GMapMap>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

navigator.geolocation.watchPosition((position) => {
  center.value = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };
  //   const x = document.getElementsByClassName('vue-map');
  //   y.style.display = 'none';
});

let center = ref({ lat: 51.093048, lng: 6.84212 });
</script>
