<template>
  <div class="formu" id="ingreso"  >
    <form class="loginform p-3 form card" @submit.prevent="procesarFormulario">
      <div class="ms-5 me-5">
        <div  class="text-center my-2" style="font-size: 25px; color: black; padding-top: 140px;"><strong>TRANSPORTES</strong><br>Log in</div>
        <label  class="form-label  my-2"><strong>Usuario:</strong></label>    
        <input type="email"
        placeholder="Ingrese su e-mail"
        class=" form-control my-2 mb-3  "
        v-model.trim="email"
        >
        <label  class="form-label"><strong>Contraseña:</strong></label>  
        <input type="password"
        placeholder="Ingrese la contraseña"
        class="form-control my-2 mb-5"
        v-model.trim="pass1"
        >
          <div class="text-center mt-2 mb-3">
            <span>
                <router-link to="/registrar" class="texto">
                ¿No tienes Cuenta?
                </router-link>
            </span>
        </div>
        <div class="text-center">
            <button type="submit" class="btn boton btn-block fw-bold" :disabled="bloquear">Ingresar</button>
        </div>
      </div>
    </form>
  
</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
 
data() {
    return {
        email:'',
        pass1:''
    }
},
computed:{
    bloquear(){
        if(!this.email.includes('@')){
            return true
        }
        if(this.pass1.length > 5){
            return false
        }
        return true
    }
},
methods: {
    ...mapActions(['ingresoUsuario']),
    procesarFormulario(){
       this.ingresoUsuario({email: this.email, password: this.pass1})
       this.email = '';
       this.pass1 = '';
    }
},
}
</script>

<style>
#ingreso {
      background: url('../assets/back.jpg');
  }
.formu{
   display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh; 
}
.form{
    width: 35%;
    height: 100vh;
    position: fixed;
    right: 0;
    bottom: 0;
    background: #ffffff;
} 
input[type="email"]{
   background:white;
   color: black;
}
input[type="email"]::placeholder{
   background:white;
   color: black;
}
input[type="password"]::placeholder{
   background:white;
   color: black;
}
input[type="password"]{
   background:white;
   color: black;
}
.boton{
    background:  #A3A4A8;
    color: white;
}
.boton:hover{
    background: #D1D2D5;
    color: black;
}
.texto{
    color: grey;
}
.texto:hover{
    color: black;
}
</style>