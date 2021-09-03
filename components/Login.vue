<!-- Please remove this file from your project -->
<template>
  <div class="wrapper login">

    <form @submit.prevent="login">

      <h1>Holiday Picker</h1>

      <input type="email" required name="email" placeholder="email" v-model="email">

      <input type="password" name="password" id="password" placeholder="password" required v-model="password">

      <button type="submit" class="btn">Login</button>

      <div class="logins">
        <button type="button" @click="googleLogin" class="btn btn--small-transparant">Google <font-awesome-icon icon="cog"/></button>
      </div>

      <nuxt-link to="sign-up">Sign Up</nuxt-link>
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
    async login() {
      await this.$fire.auth.signInWithEmailAndPassword( this.email, this.password )
        .then((res) => {
          const user = res.user;

          const { displayName, email, phoneNumber, photoURL, refreshToken } = user;

          this.$store.commit( 'setUser', { displayName, email, phoneNumber, photoURL, refreshToken } );

          this.$router.push( 'dashboard' );
        })
    },
    googleLogin() {
      const getMethods = (obj) => {
        let properties = new Set()
        let currentObj = obj
        do {
          Object.getOwnPropertyNames(currentObj).map(item => properties.add(item))
        } while ((currentObj = Object.getPrototypeOf(currentObj)))
        return [...properties.keys()].filter(item => typeof obj[item] === 'function')
    }

    console.log(this.$fireModule.auth);

    const provider = new firebase.auth.GoogleAuthProvider();

    this.$fire.auth.signInWithPopup(provider)
      .then(result => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        this.$store.commit( 'setUser', user );


        this.$router.push('dashboard');
      })
      .catch(err => {
        console.log( err );
      })
      // const provider = this.$fire.auth.GoogleAuthProvider();


      // this.$fire.auth.signInWithProvider(provider)
      // .then((result) => {
      //   var credential = result.credential;
      //   var token = credential.accessToken;
      //   var user = result.user;
      // })
      // .catch(err => {
      //   const errCode = error.close;
      // })
    }
  }
}
</script>
