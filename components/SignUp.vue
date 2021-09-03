<!-- Please remove this file from your project -->
<template>
  <div class="wrapper login">

    <form @submit.prevent="signup">

      <h1>Holiday Picker</h1>

      <input type="email" required name="email" placeholder="email" v-model="email">

      <input type="password" name="password" id="password" placeholder="password" required  v-model="password">

      <button type="submit" class="btn">Sign Up</button>

      <nuxt-link to="/">Login</nuxt-link>
    </form>

  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    async signup() {
      await this.$fire.auth.createUserWithEmailAndPassword(this.email,this.password);

      this.$router.push('/');
    }
  }
}
</script>
