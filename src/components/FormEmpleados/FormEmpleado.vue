<template>
  <div class="empleado container w-50 card p-5 d-flex mt-5">
    <h2 class="text-center mb-5">Agregar Empleado</h2>
      <div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Nombres:</span>
      <input type="text" class="form-control" placeholder="Nombre" v-model.trim="empleado.nombres" >
    </div>

<div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Apellidos:</span>
      <input type="text" class="form-control" placeholder="Apellidos"  v-model.trim="empleado.apellidos">
    </div>

<div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Teléfono:</span>
      <input type="text" class="form-control" placeholder="Teléfono" v-model.trim="empleado.telefono">
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Fecha de Nacimiento:</span>
      <input type="date" class="form-control" placeholder="Fecha de Nacimiento" v-model.trim="empleado.fechaNacimiento">
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Puesto:</span>
      <input type="text" class="form-control" placeholder="Puesto" v-model.trim="empleado.puesto">
    </div>
            <div class="input-group mb-3">
            <span class="input-group-text py-2" id="basic-addon1">Sucursal:</span>
            <select class="form-select" aria-label="Sucursal"  v-model="empleado.sucursal">
            <option selected v-for="item of sucursales" :key="item._id" :value="item.nombre">{{item.nombre}}</option>
        </select>
            </div>
            
<div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Correo:</span>
      <input type="email" class="form-control" placeholder="Correo" v-model.trim="empleado.correo">
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
  empleado:Object
},
computed:{
  bloquear(){
    return this.empleado.nombres.trim() === "" ? true : false
  }
},
methods:{
    ...mapActions(['obtenerSucursales', 'obtenerEmpleados'])
},
setup() {
  const store = useStore()
        const sucursales = computed(() => store.state.sucursales)
        const empleados = computed(() => store.state.empleados)  

        onMounted(async() =>{
            await store.dispatch('obtenerSucursales')
            await store.dispatch('obtenerEmpleados')
        })
        return{
            empleados,
            sucursales
        }
}
}
</script>

<style>

</style>