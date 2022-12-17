<template>
  <div class="w-100">
    <div class="col-dx flex-column d-flex flex-grow-1 w-100">
      <div
        class="border-start user-container-dx d-flex px-3 justify-content-between"
      >
        <div
          v-if="store.selectedUser !== null"
          class="d-flex align-items-center gap-3"
        >
          <img :src="store.selectedUser.picture.medium" />
          <div>{{ store.selectedUser.name.first }}</div>
        </div>
        <div v-else>{{ "" }}</div>
        <div class="d-flex gap-3">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>

      <div class="chat-container">
        <div class="mt-5 d-flex flex-column w-100 gap-3">
          <div
            v-if="store.selectedUser !== null"
            v-for="(chat, i) in store.selectedUser.msg"
            :class="chat.status === 'receipt' ? 'msg-receipt' : 'msg-sent'"
          >
            {{ chat.msg }}
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between input-chat-container py-2">
        <div class="px-3">emoji</div>
        <div class="w-100">
          <form @submit.prevent="sendMessage()" action="">
            <input
              class="w-100 border-0"
              v-model="store.inputMessage"
              type="text"
            />
          </form>
        </div>
        <div class="px-3">emoji</div>
      </div>
    </div>
  </div>
</template>
<script>
import { store } from "../store";
export default {
  name: "ColDx",
  data() {
    return {
      store,
    };
  },
  methods: {
    sendMessage: function () {
      store.selectedUser.msg.push({
        msg: this.store.inputMessage,
        status: "sent",
      });
      this.store.inputMessage = "";
      setTimeout(this.sendOk, 1000);
      console.log("click");
    },

    sendOk() {
      const resp = {
        msg: "Aiuto",
        status: "receipt",
      };
      this.store.selectedUser.msg.push(resp);
    },
  },
};
</script>
<style scope lang="scss">
.col-dx {
  height: 100%;
}
.user-container-dx {
  background-color: #eaeaea;
  min-height: 40px;
  align-items: center;
}

.chat-container {
  background-image: url(../../public/mine.jpg);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: auto;
}

.input-chat-container {
  background-color: #f4eeea;
}

img {
  width: 40px;
}
.msg-receipt {
  position: relative;
  border-radius: 10px;
  background-color: white;
  align-self: flex-start;
  min-width: 20%;
  max-width: 30%;
  padding: 1rem;

  margin-left: 3rem;
}
.msg-sent {
  position: relative;
  align-self: flex-end;
  border-radius: 10px;
  background-color: lightgreen;
  min-width: 20%;
  max-width: 30%;
  padding: 1rem;
  margin-right: 3rem;
}
</style>
