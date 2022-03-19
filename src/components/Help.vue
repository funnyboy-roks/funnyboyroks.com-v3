<script setup lang="ts">

const commands = [
  {
    name: 'cd',
    description: 'Open a specific page',
    usage: 'cd <page>',
  },
  {
    name: 'help',
    description: 'Show this help',
    usage: 'help',
  },
  {
    name: 'toggle',
    description: 'Toggle the content window',
    usage: 'toggle',
  },
  {
    name: 'll',
    description: 'List all pages',
    usage: 'ls',
  }
];

</script>

<template>
  <h1>Valid Commands:</h1>
  <p class="lead">
  <p v-for="command in commands">
    {{ command.usage }} - {{ command.description }}
  </p>
  </p>
</template>

<style scoped>

</style>
