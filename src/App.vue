<script setup lang="ts">

import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';
import Contact from './components/pages/Contact.vue';
import Projects from './components/pages/Projects.vue';

import Pages from './components/Pages.vue';
import Help from './components/Help.vue';
import Terminal from './components/Terminal.vue';

import { onMounted, ref } from 'vue';
import { CommandData } from './CommandHandler';
// @ts-ignore
import { titleCase } from './util';

let show = ref(true);

let page = ref('home');

onMounted(() => {
  if (location.search.length > 1) {
    page.value = location.search.substring(1);
  }
});

const hideContent = () => {
  show.value = false;
  alert('Closing Content.  To open again, run the command \'toggle\'');
};

const runCommand = (command: CommandData) => {

  switch (command.command) {
    case 'cd':
      if (command.args[0] === '/') return page.value = 'home';
      page.value = command.args[0].replace(/^\/|\/$/gi, '').toLowerCase();
      break;
    case 'll':
    case 'ls':
      page.value = 'pages';
      break;
    case 'toggle':
      show.value = !show.value;
      break;
    case 'help':
    default:
      page.value = 'help';
      break;
  }

};

</script>

<template>
  <title>{{ titleCase(page) }} | funnyboy_roks</title>
  <div class="content" v-show="show">
    <Home msg="Hello Vue 3 + TypeScript + Vite" v-if="page === 'home'"/>
    <About v-else-if="page === 'about'"/>
    <Contact v-else-if="page === 'contact'"/>
    <Projects v-else-if="page === 'projects'"/>

    <Pages v-else-if="page === 'pages'"/>
    <Help v-else-if="page === 'help'"/>
    <div v-else>
      Page not found!
    </div>

    <div class="close" @click.prevent="hideContent()">×</div>
  </div>
  <Terminal @run-command="runCommand"/>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  height: 100vh;
}

.content {
  max-width: 75%;
  min-width: 50%;
  min-height: 25vh;
  position: fixed;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  background: #fff5;
  border-radius: 2rem;
  padding: 3rem;
}

.close {
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  cursor: pointer;
  font-size: 2rem;
}

.close:hover {
  color: #a00;
}
</style>
