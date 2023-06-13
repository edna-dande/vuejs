<template>
  <button class="btn" @click="handleClick">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit('button-clicked');
    }
  }
};
</script>

<!-- <style scoped>
.btn {
 background-color: beige;
 padding: 20px;
}
</style> -->
