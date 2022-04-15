<script>
export default {
  data() {
    return {
      user: {
        address: {
          street: '',
          suite: '',
          city: '',
        }
      },
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
    goPosts() {
      let userId = this.$route.params.id;
      let url = `/user/${userId}/posts`;
      this.$router.push(url);
    },
  },
  mounted() {
    this.fetchUser()
  },
}
</script>

<template>
  <div class="general-wrapper">
    <div class="user-wrapper">
      <div class="internal_wrapper">
        <h3>User</h3>
        <div class="section">
          <span class="fw-bold">Name:</span>
          <span class="details">{{ user.name }}</span>
        </div>
        <div class="section">
          <span class="fw-bold">Username:</span>
          <span class="details">{{ user.username }}</span>
        </div>
        <div class="section">
          <span class="fw-bold">Email:</span>
          <span class="details">{{ user.email }}</span>
        </div>
        <div class="section">
          <span class="fw-bold">Address:</span>
          <span class="details">{{ user.address.street }}, {{user.address.suite}}, {{user.address.city}}</span>
        </div>
      </div>
    </div>
    <div class="actions">
      <button v-on:click="goBack" class="btn btn-primary">
        Back
      </button>
      <button v-on:click="goPosts" class="btn btn-primary">
        Posts
      </button>
    </div>
  </div>
</template>

<style scoped>

.general-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.user-wrapper {
  height: 400px;
  display: flex;
  align-items: center;
}
.user-wrapper > div {
  min-width: 400px;
}

.details {
  text-align: right;
}

.actions {
  display: flex;
  justify-content: space-between;
  width: 65%;
}
.btn.btn-primary {
  width: fit-content;
}

.section {
  display: flex;
  justify-content: space-between;
}
</style>
