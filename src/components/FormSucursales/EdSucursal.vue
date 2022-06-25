<template>
  <div class="empleado container w-50 card p-5 d-flex mt-5">
    <h2 class="text-center mb-5">Editar Sucursal</h2>
      <div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Nombre:</span>
      <input type="text" class="form-control" placeholder="Nombre" v-model.trim="sucursal.nombre" >
    </div>

<div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Dirección:</span>
      <input type="text" class="form-control" placeholder="Dirección"  v-model.trim="sucursal.direccion">
    </div>

<div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Tipo de Planta:</span>
      <input type="text" class="form-control" placeholder="Tipo de Planta" v-model.trim="sucursal.tipoPlanta">
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
  sucursal:Object
},
computed:{
  bloquear(){
    return this.sucursal.nombre.trim() === "" ? true : false
  }
},
setup() {
  const store = useStore()
        const sucursales = computed(() => store.state.sucursales)  
        return{
            sucursales
        }
}
}
</script>

<style>

</style>