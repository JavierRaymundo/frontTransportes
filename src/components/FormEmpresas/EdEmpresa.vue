<template>
  <div class="empleado container w-50 card p-5 d-flex mt-5">
    <h2 class="text-center mb-5">Editar Empresa</h2>
      <div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Nombre:</span>
      <input type="text" class="form-control" placeholder="Nombre" v-model.trim="empresa.nombre" >
    </div>

<div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Dirección:</span>
      <input type="text" class="form-control" placeholder="Dirección"  v-model.trim="empresa.direccion">
    </div>

<div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Nacionalidad:</span>
      <input type="text" class="form-control" placeholder="nacionalidad" v-model.trim="empresa.nacionalidad">
    </div>

    <div class="container form-container d-flex justify-content-center">
        <button class="btn btn-success float-end" type="submit" :disabled="bloquear">Guardar</button>
    </div>


  </div>
</template>

<script>
import {  computed } from 'vue'
import {useStore} from 'vuex'
export default {

props:{
  empresa:Object
},
computed:{
  bloquear(){
    return this.empresa.nombre.trim() === "" ? true : false
  }
},
setup() {
  const store = useStore()
        const empresas = computed(() => store.state.empresas)  
        return{
            empresas
        }
}
}
</script>

<style>

</style>