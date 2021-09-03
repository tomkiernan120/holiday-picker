<template>
  <Dashboard/>
</template>

<script>
export default {
  mounted() {
    if( !this.$store.state.user ) {
      this.$store.commit('unsetUser');
      this.$router.push('/');
    }
  }
}
</script>
