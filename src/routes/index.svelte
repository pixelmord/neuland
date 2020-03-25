<style>
  .map {
    width: 100%;
    height: 100vh;
  }
</style>

<script>
  import { onMount } from 'svelte';

  let container;
  onMount(async () => {
    const interval = window.setInterval(() => {
      if (typeof mapboxgl !== 'undefined') {
        mapboxgl.accessToken =
          'pk.eyJ1IjoicGl4ZWxtb3JkIiwiYSI6ImNrODdpazd3NDAyMWQzcG4zbXBxa3g1MG0ifQ.KUT3Lkd1wZnbRHTpWm2_tw';
        // eslint-disable-next-line no-unused-vars
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/thecjreynolds/ck117fnjy0ff61cnsclwimyay',
        });
        map.on('click', e => {
          console.log(e);
        });
        clearInterval(interval);
      }
    }, 10);
  });
</script>

<svelte:head>
  <title>Neuland Travel Log</title>
</svelte:head>

<div bind:this="{container}" id="map" class="map"></div>
