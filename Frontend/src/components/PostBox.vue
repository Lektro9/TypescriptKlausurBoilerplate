<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-navbar-brand href="#" center>
          <h1>Personenverwaltung</h1>
        </b-navbar-brand>
      </b-navbar-nav>
    </b-navbar>
    <ul id="AllUsers">
      <li v-for="user in users" :key="user.id"></li>
    </ul>
    <b-list-group class="userlist">
      <b-list-group-item v-for="user in users" :key="user.id">
        {{ user.firstName }}
        {{ user.lastName }}
      </b-list-group-item>
    </b-list-group>
    <b-container class="pt-3">
      <b-row>
        <b-col>
          <b-form-input
            class="mb-2"
            v-model="url"
            placeholder="URL eingeben"
          ></b-form-input>
          <b-form-input
            class="mb-2"
            v-model="firstName"
            placeholder="Vorname"
          ></b-form-input>
          <b-form-input
            class="mb-2"
            v-model="lastName"
            placeholder="Nachname"
          ></b-form-input>
          <b-form-input
            type="number"
            class="mb-2"
            v-model="age"
            placeholder="alter"
          ></b-form-input>
          <b-button variant="success" @click="getRequest">GET</b-button>
          <b-button variant="dark" @click="postRequest">POST</b-button>
        </b-col>
      </b-row>
      {{ $data }}
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PostBox",
  props: {
    msg: String,
  },
  data: function () {
    return {
      users: [],
      firstName: "",
      lastName: "",
      age: 0,
      newUser: "",
      url: "http://localhost:3000",
    };
  },
  methods: {
    getRequest() {
      axios
        .get("http://localhost:3000/users", {
          withCredentials: false,
        })
        .then((response) => {
          this.users = response.data;
        });
    },
    postRequest() {
      axios
        .post(
          "http://localhost:3000/user",
          {
            firstName: this.firstName,
            lastName: this.lastName,
            age: this.age,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          this.firstName = "";
          this.lastName = "";
          this.age = 0;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    putRequest() {
      axios
        .put(
          this.url,
          {
            content: this.newPost,
          },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          this.posts = response.data;
          this.posts.reverse();
          this.newPost = "";
        });
    },
  },
  mounted() {
    console.log("first get here?");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.userlist {
  margin: auto;
  width: 50%;
}
h3 {
  margin: 40px 0 0;
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
