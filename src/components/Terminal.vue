<script setup lang="ts">


import { CommandData, parse } from '../CommandHandler';
import { onMounted, ref } from 'vue';

const emits = defineEmits<{
  (e: 'run-command', value: CommandData): void;
}>();

const onSubmit = () => {
  const data = parse(rawCommand.value);
  rawCommand.value = '';
  if (data?.command === 'clear') {
    history.value = [];
    return;
  }
  emits('run-command', data);
  if (history.value[history.value.length - 1] !== data.raw) {
    history.value.push(data.raw);
  }
  if (history.value.length > 10) {
    history.value.shift();
  }
};

onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (document.activeElement !== cli.value) {
      if (e.key === '/') {
        e.preventDefault();
        cli.value.focus();
      }
    } else {
      if (e.key === 'Escape') {
        e.preventDefault();
        cli.value.blur();
      }
    }
  });
});

let rawCommand = ref('');
let history = ref<string[]>([]);
let cli = ref();

</script>

<template>

  <div class="bottom-corner">
    <div id="command-history">
      <div v-for="(command, index) in history" :key="index">
        {{ command }}
      </div>
    </div>
    <form @submit.prevent="onSubmit()">
      <input type="text" v-model="rawCommand" placeholder="Enter a command..." ref="cli">
    </form>
  </div>

</template>

<style scoped>
#command-history {
  font-size: 1rem;
  background: #0004;
  color: green;
}

input {
  font-size: 2rem;
  background: none;
  outline: none;
  border: none;
  border-bottom: 1px solid #0f0;
  min-width: 30%;
  color: #0f0;

}

* {
  font-family: 'Source Code Pro', monospace;
  text-align: left;

}

.bottom-corner {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
}

</style>
