<script>
export default {
  data() {
    return {
      users: null,
      showRemoved: false,
    }
  },
  computed: {
    computedUsers() {
      return this.showRemoved
        ? this.users.filter((u) => u.removed)
        : this.users.filter((u) => !u.removed)
    },
  },
  methods: {
    async fetchAllUsers() {
      this.users = []
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
      this.users = await res.json()
    },
    removeUser(userToRemove) {
      this.users = this.users.map((user) => {
        if (user.id === userToRemove.id) {
          user.removed = true
        }
        return user
      })
    },
    goToUser(userId) {
      this.$router.push(`/user/${userId}`)
    },
  },
  mounted() {
    this.fetchAllUsers()
  },
}
</script>

<template>
  <div>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col" v-if="!showRemoved"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in computedUsers" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td v-if="!showRemoved">
            <button v-on:click="removeUser(user)" class="btn btn-secondary">
              X
            </button>
          </td>
          <td>
            <button v-on:click="goToUser(user.id)" class="btn btn-secondary">
              -->
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <button
      v-on:click="showRemoved = !showRemoved"
      class="btn btn-primary remove-user-btn"
    >
      {{ showRemoved ? 'Show all' : 'Show removed' }}
    </button>
  </div>
</template>
