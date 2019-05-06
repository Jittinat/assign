<template>
  <div class="hello">
    <div class="ui padded segment">
      <div class="column">
        <div class="ui teal segment">
          <div class="ui fluid action input">
            <a class="ui teal left ribbon label">Contacts</a>
            <input type="text" placeholder="Search..." v-model="search">
            <div class="ui button">Search</div>
            <div class="ui orange button">
              <a class="item" href="#/contact">
                <i class="plus icon"></i> Add
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="ui segment">
        <p>
          <br>
        </p>
      </div>
      <div class="ui segment">
        <div class="ui grid">
          <div v-for="auser in filterdUsers" v-bind:key="auser.id">
            <div class="ui card">
              <div class="image">
                <img v-bind:src="auser.imageurl">
              </div>
              <div class="content">
                <div class="center aligned header">{{auser.firstName}} {{auser.lastName}}</div>
              </div>
              <div class="center aligned meta">
                <p>Mobile : {{auser.mobileno}}</p>
                <p>Email : {{auser.email}}</p>
                <p>Facebook : {{auser.facebook}}</p>
              </div>
              <div class="extra content">
                <span class="center floated">
                  <router-link :to="{ path: 'editcontact/' + auser._id}">
                  <button class="ui blue icon button" style="margin-left:35%">
                    <i class="edit icon"></i>
                  </button>
                  </router-link>
                  <button class="ui red icon button" @click="delUser(auser._id)">
                    <i class="eraser icon"></i>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axois from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      Users: [],
      uid: "",
      search: ""
    };
  },
  methods: {
    delUser(userId) {
      var url = "http://localhost:3000/users/" + userId;
      axois
        .delete(url)
        .then(response => {
          console.log("Delete UserId: " + userId);
        })
        .catch(error => {
          console.log(error);
        });
      window.location.reload();
    }
  },
  computed: {
    filterdUsers: function() {
      return this.Users.filter(user => {
        return user.firstName.match(this.search) || user.lastName.match(this.search);
      });
    }
  },
  mounted() {
    axois
      .get("http://localhost:3000/users")
      .then(response => {
        console.log(response.data);
        this.Users = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
