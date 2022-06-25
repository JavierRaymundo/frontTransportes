<template>
  <div class="home container p-2 mt-5">
      
        <div class="card p-3 mt-5">
          <h2 class="text-center mt-2">Vehículos</h2>
          <div class="py-2">
            <router-link class="btn btn-warning me-2" to="/agregarVehiculo"><i class="fas fa-plus"></i></router-link>
            <button @click="exportExcel" class="btn btn-success"><i class="fas fa-file-excel"></i></button>
          </div>
     <table class="table table-striped text-center mt-2">
         <thead>
        <tr>
          
          <th scope="col">PLACA</th>
          <th scope="col">MARCA</th>
          <th scope="col">MODELO</th>
          <th scope="col">TIPO</th>
          <th scope="col">ESTADO</th>
          <th scope="col">OPCIONES</th>
        </tr>
      </thead>

      <tbody>
    <tr v-for="item in vehiculos" :key="item._id">
      
      
      <td>{{item.placa}}</td>
      <td>{{item.marca}}</td>
      <td>{{item.modelo}}</td>
      <td>{{item.tipo}}</td>
      <td>{{item.estado}}</td>
      
       <td style="width: 160px;"> <router-link class="btn btn-info  rounded-pill " 
      :to="item._id ? {
        name: 'EditarVehiculo',
         params: {
           _id: item._id 
         } 
         } : '/'"
      >Editar</router-link> 
      <button class="btn btn-danger  rounded-pill" @click="eliminarVehiculos(item._id)">Borrar</button></td> 
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
        ...mapActions(['eliminarVehiculos','obtenerVehiculos']),
        exportExcel () {
            saveExcel({
                data: this.vehiculos,
                fileName: "vehiculos",
                columns: [
                { field: '_id'},
                { field: 'placa', title: 'PLACA' },
                { field: 'marca', title: 'MARCA' },
                { field: 'tipo', title: 'TIPO' },
                { field: 'estado', title: 'ESTADO' },
                

              ]
            });
        }
    },
  setup() {
    const store = useStore()

    const vehiculos = computed(() => store.state.vehiculos)


    onMounted(async()=>{
        await store.dispatch('obtenerVehiculos')
    })

    return {
      vehiculos
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