<template>
  <div class="dropdown" @click="toggle()">
    <slot></slot>
    <div v-if="visibile" class="dropdown-menu">
      <slot name="menu"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

  import { computed , ref} from 'vue';

  let visibile = ref(false);

  function show() {
    visibile.value = true;
    window.addEventListener("click", onWindowClick);
  }

  function hide() {
    visibile.value = false;
    window.removeEventListener("click", onWindowClick);
  }

  function toggle() {
    if(visibile.value) {
      setTimeout(() => {
        hide();
      });
    }
    else {
      setTimeout(() => {
        show();
      });
    }

  }

  function onWindowClick(e: MouseEvent) {
    hide();
  }

  defineExpose({
    show,
    hide,
    toggle
  })


</script>
<style scoped>
.dropdown {
  position: relative;
  padding-bottom: 500px;
}

.dropdown-menu {
  background: white;
  position: absolute;
  left: 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
