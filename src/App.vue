<script setup lang="ts">
import { ref } from "vue";
import ItiButton from "./components/ItiButton.vue";
import ItiModal from "./components/ItiModal.vue";
import ItiDropdown from "./components/ItiDropdown.vue";
import ItiDropdownItem from "./components/ItiDropdownItem.vue";
import ItiProgressBar from "./components/ItiProgressBar.vue";

const progress = ref(0);

function incrementProgress() {
  if (progress.value < 100) {
    progress.value += 10;
  } else {
    progress.value = 0;
  }
}

setInterval(() => {
  incrementProgress();
}, 500);
</script>

<template>
  <header>
    <h1>Iti Ui Kit</h1>
  </header>

  <main>
    <h2>Boutons</h2>

    <h3>Couleurs</h3>
    <div class="demo">
      <iti-button color="primary">Primary</iti-button>

      <iti-button color="secondary">Secondary</iti-button>

      <iti-button> Default </iti-button>
    </div>
    <hr />
    <div>
      <h3>Formes</h3>
      <div class="demo">
        <iti-button color="primary" shape="rounded"> Primary </iti-button>
      </div>
    </div>

    <hr />
    <h2>Progress Bar</h2>

    <h3>Primary color</h3>
    <div class="demo">
      <iti-progress-bar :progress="progress" />
    </div>
    <hr />

    <h3>Secondary color</h3>
    <div class="demo">
      <iti-progress-bar color="secondary" :progress="50" />
    </div>

    <hr />

    <h2>Modal</h2>
    <div class="demo">
      <iti-button @click="$refs.modal.show()"> Ouvrir la modal </iti-button>
      <iti-modal ref="modal">
        Contenu de ma modal

        <template #footer>
          <iti-button color="primary" @click="$refs.modal.show()">Ok</iti-button>
          <iti-button @click="$refs.modal.hide()">Fermer</iti-button>
        </template>
      </iti-modal>
    </div>

    <hr />

    <h2>Dropdown</h2>

    <div class="demo">
      <iti-dropdown ref="dp">
        <iti-button @click="$refs.dp.toggle()">Menu</iti-button>

        <template #menu>
          <iti-dropdown-item> Item A </iti-dropdown-item>
          <iti-dropdown-item> Item B </iti-dropdown-item>
        </template>
      </iti-dropdown>
    </div>
  </main>
</template>

<style scoped>
header {
  height: 60px;
  line-height: 60px;
  background-color: var(--color-light);
  text-align: center;
}
main {
  padding: 35px 50px;
  max-width: 850px;
  margin: auto;
}

main > hr {
  margin: 17.5px auto;
  border: none;
}

h2 {
  margin-bottom: 30px;
}

.demo {
  padding: 20px;
  display: flex;
  gap: 20px;
  border: 5px solid var(--color-light);
  border-radius: 10px;
}

h3 {
  background-color: var(--color-light);
  padding: 5px 10px;
  border-radius: 10px 10px 0 0;
}

h3 + .demo {
  border-radius: 0 0 10px 10px;
}
</style>
