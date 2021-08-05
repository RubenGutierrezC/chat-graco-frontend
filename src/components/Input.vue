<template>
  <div class="input-container">
    <input
      type="email"
      class="form-control"
      v-model="message"
      id="exampleFormControlInput1"
      placeholder=""
    />
    <button @click="sendMessage">enviar</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    message: "",
  }),
  methods: {
    sendMessage() {
      if (this.message) {
        this.$socket.emit("sendMessage", {
          username: this.$store.state.username,
          message: this.message,
        });
        this.message = "";
      }
    },
  },
};
</script>

<style>
.input-container {
  height: 5%;
  width: 100%;
  background-color: #fff;
  display: flex;
}
</style>
