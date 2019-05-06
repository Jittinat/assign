<template>
  <div class="contact">
    <h2>
      Contact
      <div class="teal ui buttons">
        <button class="ui button">Add</button>
      </div>
    </h2>

    <div class="ui segment">
      <div class="vframe">
        <form class="ui form">
          <div class="required field">
            <label>Contact ID</label>
            <input name="contact-id" type="text" v-model="User.contactid">
          </div>
          <div class="required field">
            <label>First Name</label>
            <input name="first-name" type="text" v-model="User.firstName">
          </div>
          <div class="required field">
            <label>Last Name</label>
            <input name="last-name" type="text" v-model="User.lastName">
          </div>
          <div class="required field">
            <label>Mobile No</label>
            <input name="mobile-no" type="text" v-model="User.mobileno" placeholder="Mobile No">
          </div>
          <div class="field">
            <label>Email</label>
            <input name="email" type="text" v-model="User.email" placeholder="Email">
          </div>
          <div class="field">
            <label>Facebook</label>
            <input name="facebook" type="text" v-model="User.facebook" placeholder="Facebook">
          </div>
          <div class="field">
            <label>Image Url</label>
            <input name="image-url" type="text" v-model="User.imageurl" placeholder="Image Url">
          </div>
          <div class="center align grid">
            <div class="ui buttons">
              <button class="ui primary basic button" @click="updateToAPI">
                <i class="save icon"></i> Save
              </button>
              <button class="ui primary basic button">
                <i class="red close icon"></i> Close
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EditUser",
  data() {
    return {
      User: {
        contactid: "",
        firstName: "",
        lastName: "",
        mobileno: "",
        email: "",
        facebook: "",
        imageurl: ""
      }
    };
  },
  methods: {
    updateToAPI() {
      console.log(this.$route.params.userId);
      let newUser = {
        contactid: this.User.contactid,
        firstName: this.User.firstName,
        lastName: this.User.lastName,
        mobileno: this.User.mobileno,
        email: this.User.email,
        facebook: this.User.facebook,
        imageurl: this.User.imageurl
      };
      console.log(newUser);
      axios
        .post(
          "http://localhost:3000/users/" + this.$route.params.userId,
          newUser
        )
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/users/" + this.$route.params.userId)
      .then(response => {
        console.log(response.data);
        this.User = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
</style>


