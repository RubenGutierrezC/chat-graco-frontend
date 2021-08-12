<template>
  <div class="card px-3">
    <h2>
      usuarios <br />
      conectados
    </h2>
    <ul>
      <li v-for="(user, index) in users" :key="index">
        {{ user.username }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    users: [],
  }),
  mounted() {
    this.$socket.emit("userList", null, (resp) => {
      console.log("userlist");
      this.users = resp;
    });
  },
  sockets: {
    newUser: function(username) {
      console.log(username);
      this.users.push(username);
    },
    disconnectUser: function(username) {
      this.users.filter((user) => user !== username);
    },
  },
};
</script>

<style></style>
