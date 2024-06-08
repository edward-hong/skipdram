<style  lang="scss" global>

$bg-color: rgba(0, 0, 0, 0.9);

:global(body) {
  margin: 0;
  background-color: $bg-color;
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  line-height: 1.3;
}

:global(button),
:global(input) {
  background: none repeat scroll 0 0 transparent;
  border: medium none;
  border-spacing: 0;
  color: #26589F;
  font-family: 'PT Sans Narrow',sans-serif;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.42rem;
  list-style: none outside none;
  margin: 0;
  padding: 0;
  text-align: left;
  text-decoration: none;
  text-indent: 0;
}

// test comment for commit

</style>

<script>
  import Nav from '../components/nav.svelte'
</script>

<Nav />
<main>
  <slot />
</main>
