<template>
<h1>Home</h1>
    <h1>Home welcome user</h1>
</template>

<script>
export default {
    name: 'Home',
     mounted() {
      let user = localStorage.getItem("user")
      if(user) {
          this.$router.push({name: 'Signup'})
      }
  }
}
</script>