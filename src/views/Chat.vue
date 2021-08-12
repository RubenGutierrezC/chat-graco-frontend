<template>
  <div class="main-container">
    <Users />
    <div class="message-container">
      <Messages />
      <Input />
    </div>
  </div>
</template>

<script>
import Users from "../components/Users.vue";
import Messages from "../components/Messages.vue";
import Input from "../components/Input.vue";
export default {
  components: {
    Users,
    Messages,
    Input,
  },
};
</script>

<style>
.main-container {
  display: flex;
  height: 100%;
}

.message-container {
  display: flex;
  flex: 1;
}
</style>
