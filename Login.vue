<template>
  <div class="ui middle aligned center aligned grid">
    <div class="column" style="max-width: 450px">
      <h2 class="ui teal image header"></h2>
      <form class="ui large form">
        <div class="ui stacked segment">
          <div class="ui teal segment">
            <div class="ui fluid action input">
              <a class="ui teal ribbon label">Login</a>
            </div>
          </div>
          <div class="field">
            <label style="text-align: left">User Account</label>
            <div class="ui input">
              <input
                type="text"
                name="username"
                v-model="account.username"
                placeholder="User Account"
              >
            </div>
          </div>
          <div class="field">
            <label style="text-align: left">Password</label>
            <div class="ui input">
              <input type="password" name="password" v-model="account.password" placeholder="Password">
            </div>
          </div>
        </div>
      </form>
      <div class="left align grid">
        <button class="ui button" style="display: block;" @click="logIn">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      account: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    logIn() {
      axios
        .get("http://localhost:3000/auth/" + this.account.username)
        .then((response) => {

          console.log(this.account.username);
          console.log(response.data.username);
          if (this.account.username != "" && this.account.password != "") {
            if (
              this.account.username == response.data.username &&
              this.account.password == response.data.password
            ) {
              
              this.$router.replace("/HelloWorld");
            } else {
              alert("The username and / or password is incorrect");
            }
          } else {
            alert("A username and password must be present");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>


<style>
</style>
