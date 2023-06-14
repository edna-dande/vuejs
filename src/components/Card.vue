// sr/App.vue
<script>
 import Button from '../Button.vue';

export default {
  components: {
    Button
  },
  props:{
    username: String
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
    
    <div class="card">
      <div class="card-top"></div>
      <div class="card-bottom">
        <p>{{ username }}</p>
      </div>
      <Button text="Text">Text</Button>
    </div> 
</template>

<style lang="scss">
// @import "./styles.scss";
.container{
  width: 90%;
  margin: 0 auto;
  background: #faf8f8;
  min-height: 100vh;
  display: flex;
  gap: 1rem;
  .card{
    width: 200px;
    height: 240px;
    border: 1px solid #bcb1b1;
    padding: 2rem;
    border-radius: 3rem;
  }
}
</style>