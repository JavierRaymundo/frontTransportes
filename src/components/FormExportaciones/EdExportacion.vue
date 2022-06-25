<template>
  <div class="exportacion container w-50 card p-5 d-flex mt-5">
    <h2 class="text-center mb-5">Editar Exportación</h2>
    <div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Vehículo:</span>
     <select class="form-select" aria-label="cliente"  v-model="exportacion.vehiculo">
            <option selected v-for="item of vehiculos" :key="item._id" :value="item.marca +' '+ item.modelo">{{item.marca +' '+ item.modelo}}</option>
    </select>
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Sucursal:</span>
            <select class="form-select" aria-label="cliente"  v-model="exportacion.sucursal">
            <option selected v-for="item of sucursales" :key="item._id" :value="item.nombre">{{item.nombre}}</option>
            </select>
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Extracción:</span>
      <input type="text" class="form-control" placeholder="Extracción" v-model.trim="exportacion.extraccion">
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Fecha:</span>
      <input type="date" class="form-control" placeholder="Fecha " v-model.trim="exportacion.fecha">
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Cantidad:</span>
      <input type="text" class="form-control" placeholder="Cantidad " v-model.trim="exportacion.cantidad">
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text py-2" id="basic-addon1">Precio:</span>
      <input type="text" class="form-control" placeholder="Precio " v-model.trim="exportacion.precio">
    </div>

    
            <div class="input-group mb-3">
            <span class="input-group-text py-2" id="basic-addon1">Empresa:</span>
            <select class="form-select" aria-label="Sucursal"  v-model="exportacion.empresa">
            <option selected v-for="item of empresas" :key="item._id" :value="item.nombre">{{item.nombre}}</option>
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
  exportacion:Object
},
computed:{
  bloquear(){
    return this.exportacion.vehiculo.trim() === "" ? true : false
  }
},
methods:{
    ...mapActions(['obtenerSucursales', 'obtenerExportaciones'])
},
setup() {
  const store = useStore()
        const sucursales = computed(() => store.state.sucursales)
        const exportaciones = computed(() => store.state.exportaciones) 
        const vehiculos = computed(() => store.state.vehiculos)
        const empresas = computed(() => store.state.empresas)

        onMounted(async() =>{
            await store.dispatch('obtenerSucursales')
            await store.dispatch('obtenerExportaciones')
            await store.dispatch('obtenerVehiculos')
            await store.dispatch('obtenerEmpresas')
        })
        return{
            exportaciones,
            sucursales,
            vehiculos,
            empresas
        }
}
}
</script>

<style>

</style>