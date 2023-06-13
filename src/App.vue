// sr/App.vue
<script>
 import Button from './Button.vue';

export default {
  components: {
    Button
  },
  methods: {
    handleButtonClick() {
      console.log('Button clicked!');
    },
    handleSubmit() {
      console.log('Form submitted!');
    }
  }
};
</script>

<template>
  
  <div>
    <Button text="Click me!" @button-clicked="handleButtonClick"></Button>
    <Button text="Submit" @button-clicked="handleSubmit"></Button>
  </div>
</template>

<style lang="scss">
@import "./styles.scss";
</style>