<template>
  <div class="progress-bar">
    <div class="progress-bar-inner" :class="colorClasses">
      <span class="progress-bar-inner-text">{{ props.progress + "%" }}</span>
    </div>
  </div>
</template>


<script setup lang="ts">


import { computed } from 'vue';

const props = defineProps({
	color: {
		type: String,
		default: "primary"
	},
  progress: {
    type: Number,
    default: "0"
  }
});

const percentage = computed(() => [
    `${props.progress}%`,
]);

const colorClasses = computed(() => [
    `bar-color-${props.color}`,
]);



</script>

<style scoped>
.progress-bar {
  background: var(--color-gray-light);
  border-radius: 50px;
  overflow: hidden;
  width: 100%;
  height: 15vh;
}

.progress-bar > .progress-bar-inner {
  text-align: right;
  border-radius: 50px;
  width:  v-bind('percentage');
  height: 15vh;
  color : white;
  padding-top: 25px;
}

.progress-bar-inner-text {
  padding-right: 50px;
  font-size: 30px;
}

.bar-color-primary {
  background: rgb(188, 244, 58);
}

.bar-color-secondary {
  background: rgb(244, 58, 58);
}

</style>
