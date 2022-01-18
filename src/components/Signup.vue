<template>
  <img src="../assets/logo.png" class="logo" alt="LOGO" />
  <h1>Create an account</h1>
  <div class="register">
    <input type="text" name="name" v-model="name" placeholder="Enter Name" />
    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="Enter Email"
    />
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="Enter Password"
    />
    <button @click="signUp">Sign up</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Signup",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      if (!this.name && !this.email && !this.password) {
        alert("Enter details!!!");
      } else {
        const result = await axios.post("api/users", {
          name: this.name,
          email: this.email,
          password: this.password,
        });

        if (result.status === 201) {
          this.name = "";
          this.email = "";
          this.password = "";

          localStorage.setItem("user", JSON.stringify(result.data));
          this.$router.push({ name: "Home" });
        }
      }
    },
  },
  mounted() {
      let user = localStorage.getItem("user")
      if(user) {
          this.$router.push({name: 'Home'})
      }
  }
};
</script>

<style scoped>
.logo {
  width: 100px;
}

.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
}

.register button {
  width: 320px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid black;
  background: skyblue;
}

.register button:hover {
  color: #ffffff;
  background-color: rgb(6, 50, 71);
}
</style>