<script setup lang="ts">
import VTypical from 'vue-typical';

defineProps<{ msg: string }>();
</script>

<template>
  <h1>
    <v-typical
        class="blink typing"
        :steps="['funnyboy_roks', 2000, 'Hayden Pott', 2000, 'Funny', 2000, 'Hayden', 2000]"
        :loop="Infinity"
        :wrapper="'h2'"
    />
  </h1>

  <p class="lead">
    Hello, I'm funnyboy_roks, or Funny! I have been programming for about four years, building various applications and tools.
    <br>
    <br>
    I create many web applications, Minecraft server plugins, Discord bots, etc. <br>
    <em>If you'd like to request a tool or application, please contact me</em>
    <br>
    <br>
    You can navigate around this site by running commands in the bottom-left corner. (Run <code>help</code> for commands.)

  </p>
</template>

<style scoped>

</style>
