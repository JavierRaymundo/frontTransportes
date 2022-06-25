<template>
  <div class="empleado container w-50 card p-5 d-flex mt-5">
    <h2 class="text-center mb-5">Editar Cliente</h2>
      <div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Nombres:</span>
      <input type="text" class="form-control" placeholder="Nombres" v-model.trim="cliente.nombres" >
    </div>

<div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Apellidos:</span>
      <input type="text" class="form-control" placeholder="Apellidos"  v-model.trim="cliente.apellidos">
    </div>

<div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Teléfono:</span>
      <input type="text" class="form-control" placeholder="Teléfono" v-model.trim="cliente.telefono">
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">NIT:</span>
      <input type="text" class="form-control" placeholder="NIT" v-model.trim="cliente.NIT">
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Dirección:</span>
      <input type="text" class="form-control" placeholder="Dirección" v-model.trim="cliente.direccion">
    </div>
           
            
<div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Correo:</span>
      <input type="email" class="form-control" placeholder="Correo" v-model.trim="cliente.correo">
    </div>


    <div class="container form-container d-flex justify-content-center">
        <button class="btn btn-success float-end" type="submit" :disabled="bloquear">Guardar</button>
    </div>


  </div>
</template>

<script>
import {  computed, onMounted } from 'vue'
import {mapActions, useStore} from 'vuex'
export default {

props:{
  cliente:Object
},
computed:{
  bloquear(){
    return this.cliente.nombres.trim() === "" ? true : false
  }
},
methods:{
    ...mapActions(['obtenerSucursales', 'obtenerClientes'])
},
setup() {
  const store = useStore()
        const sucursales = computed(() => store.state.sucursales)
        const clientes = computed(() => store.state.clientes)  

        onMounted(async() =>{
            await store.dispatch('obtenerSucursales')
            await store.dispatch('obtenerClientes')
        })
        return{
            clientes,
            sucursales
        }
}
}
</script>

<style>

</style>