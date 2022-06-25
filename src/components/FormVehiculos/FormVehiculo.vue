<template>
  <div class="empleado container w-50 card p-5 d-flex mt-5">
    <h2 class="text-center mb-5">Agregar Vehículo</h2>
      <div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Placa:</span>
      <input type="text" class="form-control" placeholder="Placa" v-model.trim="vehiculo.placa" >
    </div>

<div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Marca:</span>
      <input type="text" class="form-control" placeholder="Marca"  v-model.trim="vehiculo.marca">
    </div>

<div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Modelo:</span>
      <input type="text" class="form-control" placeholder="Modelo" v-model.trim="vehiculo.modelo">
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Tipo:</span>
      <input type="text" class="form-control" placeholder="Tipo" v-model.trim="vehiculo.tipo">
    </div>


<div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Estado:</span>
      <input type="text" class="form-control" placeholder="Estado" v-model.trim="vehiculo.estado">
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
  vehiculo:Object
},
computed:{
  bloquear(){
    return this.vehiculo.placa.trim() === "" ? true : false
  }
},
setup() {
  const store = useStore()
        const vehiculos = computed(() => store.state.vehiculos)  
        return{
            vehiculos
        }
}
}
</script>

<style>

</style>