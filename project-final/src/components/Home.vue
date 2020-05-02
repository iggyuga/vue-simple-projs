<template>
  <div>
    <h1>Trade or View your Portfolio</h1>
    <p>You may Save &amp; Load your Data</p>
    <p>Click on 'End Day' to begin a new Day!</p>
    <hr>
    <p>Your Funds: {{ funds | currency }}</p>
  </div>
</template>

<script>
  export default {
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    }

  }
</script>

<style>

</style>