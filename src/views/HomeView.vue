<template>
  <div class="home container mt-5">
      <Dasboard />
  </div>
</template>

<script>

import {mapGetters, mapState} from 'vuex'
import Dasboard from '@/components/Dasboard.vue'
export default {
  name: 'HomeView',
  components: {
    Dasboard
  },
  computed:{
        ...mapGetters(['usuarioAutenticado']),
        ...mapState(['user'])
    },
  setup() {
   
    return {
      
    }


  }
}
</script>
<style scoped>
.btn1 {
  border-radius: 8px;

}
.btn1:hover{
  background-color: skyblue;
  color: grey;
}
</style>