// sr/App.vue
<script>
 import Button from '../Button.vue';
 import Card from '../components/Card.vue'

export default {
  data(){
    return{
      entries: [
      {
        id: 1,
        text:"Lorem - ipsum dolor sit, amet consectetur adipisicing elit. Commodi, laudantium!"   
      },
      {
        id: 2,
        text:"Lorem - --ipsum dolor sit, amet consectetur adipisicing elit. Commodi, laudantium!"   
      },
      {
        id: 3,
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, laudantium!"   
      },
      {
        id: 4,
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, laudantium!"   
      },
      {
        id: 5,
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, laudantium!"   
      },
      {
        id: 6,
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, laudantium!"   
      },
    
    ]
    }
  },
  components: {
    Button, 
    Card
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
  <div v-for="item in entries" class="container">
    <Card :username="item.text" :key="item.id"/>
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
  flex-wrap: wrap;
  .card{
    width: 200px;
    height: 240px;
    border: 1px solid #bcb1b1;
    padding: 2rem;
    border-radius: 3rem;
  }
}
</style>