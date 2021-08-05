<template>
  <div class="message-container">
    <div v-for="(msg, index) in messages" :key="index" class="message">
      <div class="card rounded-lg">
        <h5 class=" fw-light secondary">{{ msg.username }}</h5>
        <p>{{ msg.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    messages: [
      {
        username: "prueba",
        message: "123",
      },
      {
        username: "prueba",
        message: "123",
      },
    ],
  }),
  sockets: {
    receiveMessage: function(data) {
      this.messages.push(data);
    },
  },
};
</script>

<style>
.message-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #f3f6fb;
}

.message {
  width: 30%;
}
</style>
