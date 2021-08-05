<template>
  <div class="card-container">
    <div class="card card-form mt-5">
      <div class="card-header">
        Iniciar sesión
      </div>
      <div class="card-body">
        <input
          class="form-control mb-3"
          type="text"
          placeholder="username"
          aria-label="default input example"
          v-model="username"
        />
        <button @click="login" class="btn btn-primary">Iniciar sesión</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    username: "",
  }),
  methods: {
    login() {
      this.$socket.emit("join", { username: this.username }, (resp) => {
        if (resp) {
          this.$store.dispatch("user", this.username);
          this.$router.push("/chat");
        }
      });
    },
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
}

.card-form {
  width: 100%;
  max-width: 400px;
}
</style>
