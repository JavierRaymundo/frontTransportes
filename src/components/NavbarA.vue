<template>
 
<nav class="navbar navbar-dark navbar-expand-lg fixed-top bg-gradient navnav" id="nava">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand" style="padding-left: 18px; padding-right: 12px;">
      <i class="fas fa-home-lg" style="font-size: 35px;"></i>
    </router-link>

    <div class="navbar-nav justify-content-end">
      <button class="btn rounded-pill"  id="sal" v-if="usuarioAutenticado" @click="cerrarSesion">
      <i class="fa-solid fa-right-from-bracket" ></i>
      </button>
    </div>
  </div>
</nav>
  
</template>

<script>
import {mapGetters, mapActions, mapState} from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    computed:{
        ...mapGetters(['usuarioAutenticado']),
         ...mapState(['user'])
        
    },
    methods: {
        ...mapActions(['cerrarSesion'])
    },
}
</script>

<style>
#nava {
    background-color: #F7D200;
    color: white;

}
.nav-link:hover{
    color: white;
}
#sal{
   background: #F7D200;
}
#sal:hover{
   background: grey;
}
.nav-link{
  font-size: 20px;
}
</style>