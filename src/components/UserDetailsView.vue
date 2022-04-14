<script>
export default {
  data() {
    return {
      user: {},
    }
  },
  methods: {
    async fetchUser() {
      this.user = {}
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`,
      )
      this.user = await res.json()
    },
    goBack() {
      this.$router.back()
    },
  },
  mounted() {
    this.fetchUser()
  },
}
</script>

<template>
  <div>
    <div class="user-wrapper">
      <div>
        <h3>User</h3>
        <div>
          <span>Name:</span>
          <span>{{ user.name }}</span>
        </div>
        <div>
          <span>Username:</span>
          <span>{{ user.username }}</span>
        </div>
        <div>
          <span>Email:</span>
          <span>{{ user.email }}</span>
        </div>
      </div>
    </div>
    <button v-on:click="goBack" class="btn btn-primary">
      Back
    </button>
  </div>
</template>

<style scoped>
.user-wrapper {
  height: 400px;
}
.user-wrapper > div {
  min-width: 400px;
}
</style>
