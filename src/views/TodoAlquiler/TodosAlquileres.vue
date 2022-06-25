<template>
  <div class="home container p-2 mt-5">
      
        <div class="card p-3 mt-5">
          <h2 class="text-center mt-2">Alquileres</h2>
          <div class="py-2">  
            <router-link class="btn btn-warning me-2" to="/agregarAlquiler"><i class="fas fa-plus"></i></router-link>
            <button @click="exportExcel" class="btn btn-success"><i class="fas fa-file-excel"></i></button>
          </div>
     <table class="table table-striped text-center mt-2">
         <thead>
        <tr>
          
          <th scope="col">CLIENTE</th>
          <th scope="col">VEHÍCULO</th>
          <th scope="col">TIEMPO</th>
          <th scope="col">FECHA</th>
          <th scope="col">SUCURSAL</th>
          <th scope="col">EMPLEADO</th>
          <th scope="col">OPCIONES</th>
        </tr>
      </thead>

      <tbody>
    <tr v-for="item in alquileres" :key="item._id">
      
      
      <td>{{item.cliente}}</td>
      <td>{{item.vehiculo}}</td>
      <td>{{item.tiempo}}</td>
      <td>{{item.fecha}}</td>
      <td>{{item.sucursal}}</td>
      <td>{{item.empleado}}</td>
     
       <td style="width: 160px;"> <router-link class="btn btn-info  rounded-pill " 
      :to="item._id ? {
        name: 'EditarAlquiler',
         params: {
           _id: item._id 
         } 
         } : '/'"
      >Editar</router-link> 
      <button class="btn btn-danger  rounded-pill" @click="eliminarAlquileres(item._id)">Borrar</button></td> 
    </tr>
   
  </tbody>
    </table>

     </div>
    
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
// @ is an alias to /src
import {mapGetters, useStore,  mapActions} from 'vuex'
import { Grid } from '@progress/kendo-vue-grid';
import { saveExcel } from '@progress/kendo-vue-excel-export';
export default {
  name: 'HomeView',
  components: {
     'Grid': Grid,
  },
  computed:{
        ...mapGetters(['usuarioAutenticado']),
    },
    methods:{
        ...mapActions(['eliminarAlquileres','obtenerAlquileres']),
        exportExcel () {
            saveExcel({
                data: this.alquileres,
                fileName: "alquileres",
                columns: [
                { field: 'cliente', title: 'CLIENTE' },
                { field: 'vehiculo', title: 'VEHICULO' },
                { field: 'tiempo', title: 'TIEMPO' },
                { field: 'fecha', title: 'FECHA' },
                { field: 'sucursal', title: 'SUCURSAL' },
                { field: 'empleado', title: 'EMPLEADO' },
                
                 
              ]
            });
        }
    },
  setup() {
    const store = useStore()

    const alquileres = computed(() => store.state.alquileres)


    onMounted(async()=>{
        await store.dispatch('obtenerAlquileres')
    })

    return {
      alquileres
    }


  }
}
</script>
<style scoped>
thead{
  background: grey;
  color: white;
}
</style>