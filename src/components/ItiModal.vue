<template>

  <div v-if="visibile" class="iti-modal-wrapper" >
	  <!-- En premier plan. Doit masquer la modal au click -->
    <div class="iti-modal-backdrop" @click="hide()"></div>
    <div class="iti-modal">
      <main class="iti-modal-body">
		  <slot></slot>
      </main>
      <footer class="iti-modal-footer" v-show="$slots.footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>

</template>

<script setup lang="ts">

  import { computed , ref} from 'vue';

  let visibile = ref(false);

  function show() {
    console.log("AAAAA");
    visibile.value = true;
  }

  function hide() {
    console.log("BBBBB")
    visibile.value = false;
  }

  defineExpose({
    show,
    hide
  })

</script>

<style>

/**
 * Le wrapper prend tout l'écran
 */
 .iti-modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
}

/**
 * La backdrop prend tout l'écran
 */
.iti-modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.3;
    backdrop-filter: blur(10px);  
}

/**
 * La modal doit se trouver "au dessus" de la backdrop
 */
.iti-modal {
    z-index: 101;
    background-color: white;
    padding: 25px 50px 50px 50px;
    border-radius: 12px;
}

.iti-modal>.iti-modal-body {
  margin-bottom: 50px;
}

.iti-modal>.iti-modal-footer {
}

</style>
