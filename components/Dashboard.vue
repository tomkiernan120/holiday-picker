<template>
  <div class="wrapper">
    <div class="header">


      <button type="button" @click="signout" class="btn">Sign out</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async signout() {
      await this.$fire.auth.signOut()
        .then(res => {

          this.$store.commit( 'unsetUser' );

          this.$router.push('/');
        })
        .catch( err => console.log(err) );
    }
  }
}
</script>
