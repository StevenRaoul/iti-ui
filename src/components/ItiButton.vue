<template>
  <Button class="iti-button" :class=buttonClasses>
    <slot></slot>
  </Button>
</template>

<script setup lang="ts">  
import { computed } from 'vue';

const props = defineProps({
	color: {
		type: String,
		default: "default"
	},
  shape: {
    type: String,
    default: "square"
  }
});


const buttonClasses = computed(() => [
    `button-color-${props.color}`,
    `button-shape-${props.shape}`,
]);
</script>

<style scoped>

.button-color-primary {
  background-color : #61cf7f;
}

.button-color-secondary {
  background-color : #de5a7d;
}

.button-color-default {
  background-color : #BBBBBB;
}

.button-shape-square {
  border-radius: 5px;
}

.button-shape-rounded {
  border-radius: 50px;
}

.iti-button {
  /* padding: 15px; */
  width: 20vw;
  height: 8vh;
}

.iti-button:hover {
  background-color: black;
  color: white;
}
</style>
