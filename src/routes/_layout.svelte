<style lang="scss" global>
  @import '../prestyled/style/global.scss';
</style>

<script>
  import Nav from '../components/Nav.svelte';

  export let segment;
</script>

<Nav {segment} />

<main>
  <slot />
</main>
