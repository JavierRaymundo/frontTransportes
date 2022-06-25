<template>
  <div class="venta container w-50 card p-5 d-flex mt-5">
    <h2 class="text-center mb-5">Editar Venta</h2>
      <div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Cliente:</span>
       <select class="form-select" aria-label="cliente"  v-model="venta.cliente">
            <option selected v-for="item of clientes" :key="item._id" :value="item.nombres +' '+ item.apellidos">{{item.nombres +' '+ item.apellidos}}</option>
        </select>
    </div>

<div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Vehículo:</span>
     <select class="form-select" aria-label="cliente"  v-model="venta.vehiculo">
            <option selected v-for="item of vehiculos" :key="item._id" :value="item.marca +' '+ item.modelo">{{item.marca +' '+ item.modelo}}</option>
    </select>
    </div>

<div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Precio:</span>
      <input type="text" class="form-control" placeholder="Precio" v-model.trim="venta.precio">
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Fecha:</span>
      <input type="date" class="form-control" placeholder="Fecha" v-model.trim="venta.fecha">
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Sucursal:</span>
            <select class="form-select" aria-label="cliente"  v-model="venta.sucursal">
            <option selected v-for="item of sucursales" :key="item._id" :value="item.nombre">{{item.nombre}}</option>
            </select>
    </div>
            <div class="input-group mb-3">
            <span class="input-group-text py-2" id="basic-addon1">Empleado:</span>
            <select class="form-select" aria-label="Sucursal"  v-model="venta.empleado">
            <option selected v-for="item of empleados" :key="item._id" :value="item.nombres +' '+ item.apellidos">{{item.nombres +' '+ item.apellidos}}</option>
            </select>
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
  venta:Object
},
computed:{
  bloquear(){
    return this.venta.cliente.trim() === "" ? true : false
  }
},
methods:{
    ...mapActions(['obtenerSucursales', 'obtenerVentas'])
},
setup() {
  const store = useStore()
        const sucursales = computed(() => store.state.sucursales)
        const ventas = computed(() => store.state.ventas)  
        const clientes = computed(() => store.state.clientes)
        const vehiculos = computed(() => store.state.vehiculos)
        const empleados = computed(() => store.state.empleados)

        onMounted(async() =>{
            await store.dispatch('obtenerSucursales')
            await store.dispatch('obtenerVentas')
            await store.dispatch('obtenerClientes')
            await store.dispatch('obtenerVehiculos')
            await store.dispatch('obtenerEmpleados')
        })
        return{
            ventas,
            sucursales,
            clientes,
            vehiculos,
            empleados
        }
}
}
</script>

<style>

</style>