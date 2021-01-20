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
        {{ user.id }}
        {{ user.firstName }}
        {{ user.lastName }}
        <b-button variant="danger" @click="deleteRequest(user.id)"
          >Delete</b-button
        >
      </b-list-group-item>
    </b-list-group>
    <b-container class="pt-3">
      <b-row>
        <b-col>
          <b-form-input
            class="mb-2"
            type="number"
            v-model="inputID"
            placeholder="UserID eingeben (nur zum updaten)"
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
          <b-button variant="dark" @click="putRequest()">UPDATE</b-button>
        </b-col>
      </b-row>
      {{ this.messageFromServer }}
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
      inputID: "",
      firstName: "",
      lastName: "",
      age: "",
      newUser: "",
      url: "http://localhost:3000",
      messageFromServer: "",
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
          this.users.push(response.data);
          this.firstName = "";
          this.lastName = "";
          this.age = "";
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    putRequest() {
      axios
        .put("http://localhost:3000/user/" + this.inputID, {
          firstName: this.firstName,
          lastName: this.lastName,
          age: this.age,
        })
        .then((response) => {
          console.log(response.data);
          this.messageFromServer = JSON.stringify(response.data);
          this.users = this.users.map((u) => {
            if (u.id == this.inputID) {
              u.firstName = this.firstName;
              u.lastName = this.lastName;
              u.age = this.age;
            }
            return u;
          });
          this.firstName = "";
          this.lastName = "";
          this.age = "";
        });
    },
    deleteRequest(userID) {
      axios.delete("http://localhost:3000/user/" + userID).then((response) => {
        console.log(response.data);
        this.messageFromServer = JSON.stringify(response.data);
        this.users = this.users.filter((u) => u.id !== userID);
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
