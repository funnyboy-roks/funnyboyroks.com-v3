<script setup lang="ts">

import { onMounted, ref } from 'vue';

let href = ref('');

onMounted(() => {
  href.value = encodeURIComponent(`${window.location.href}?contact`);
});

</script>

<template>

  <div class="contact">
    <h1>Contact Me</h1>
    <p class="lead">The most reliable method to contact me is on Discord, my tag is <code>funnyboy_roks#0001</code>,
      though
      if needed, you can email me at
      <a href="mailto:funnyboyroks@gmail.com">funnyboyroks@gmail.com</a>.</p>
  </div>
  <img src="http://www.textfiles.com/underconstruction/Atlantis8044constructionheavy.gif" alt="under construction">

  <form id="contact-form" :action="`https://api.funnyboyroks.com/contact?from=${href}`" method="POST">
    <fieldset>
      <fieldset>
        <div class="form-group">
          <label for="name" class="form-label mt-4">Name</label>
          <input name="name" type="text" class="form-control" id="name" aria-describedby="name-help"
                 placeholder="Name" required>
        </div>

        <div class="form-group">
          <label for="contact-info" class="form-label mt-4">Contact Info</label>
          <input name="contact" type="text" class="form-control" id="contact-info"
                 aria-describedby="contact-info-help"
                 placeholder="Enter email or Discord tag" required>
          <small id="contact-info-help" class="form-text text-muted">This will allow me to get back to
            you</small>
        </div>

        <div class="form-group">
          <label for="exampleTextarea" class="form-label mt-4">Message</label>
          <textarea name="message" class="form-control" id="exampleTextarea" rows="3"
                    placeholder="Message..." required></textarea>
        </div>

      </fieldset>
      <button type="submit" class="btn btn-primary mt-3">Submit</button>
    </fieldset>
  </form>


</template>

<style scoped>

</style>
