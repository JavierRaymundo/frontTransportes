<template>
  <div class="home container p-2 mt-5">
      
        <div class="card p-3 mt-5">
          <h2 class="text-center mt-2">Ventas</h2>
          <div class="py-2">      
            <router-link class="btn btn-warning me-2" to="/agregarVenta"><i class="fas fa-plus"></i></router-link>
            <button @click="exportExcel" class="btn btn-success"><i class="fas fa-file-excel"></i></button>
          </div>
     <table class="table table-striped text-center mt-2">
         <thead>
        <tr>
          
          <th scope="col">CLIENTE</th>
          <th scope="col">VEHÍCULO</th>
          <th scope="col">PRECIO</th>
          <th scope="col">FECHA</th>
          <th scope="col">SUCURSAL</th>
          <th scope="col">EMPLEADO</th>
          <th scope="col">OPCIONES</th>
        </tr>
      </thead>

      <tbody>
    <tr v-for="item in ventas" :key="item._id">
      
      
      <td>{{item.cliente}}</td>
      <td>{{item.vehiculo}}</td>
      <td>{{item.precio}}</td>
      <td>{{item.fecha}}</td>
      <td>{{item.sucursal}}</td>
      <td>{{item.empleado}}</td>
     
       <td style="width: 160px;"> <router-link class="btn btn-info  rounded-pill " 
      :to="item._id ? {
        name: 'EditarVenta',
         params: {
           _id: item._id 
         } 
         } : '/'"
      >Editar</router-link> 
      <button class="btn btn-danger  rounded-pill" @click="eliminarVentas(item._id)">Borrar</button></td> 
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
        ...mapActions(['eliminarVentas','obtenerVentas']),
        exportExcel () {
            saveExcel({
                data: this.ventas,
                fileName: "ventas",
                columns: [
                { field: '_id'},
                { field: 'cliente', title: 'CLIENTE' },
                { field: 'vehiculo', title: 'VEHICULO' },
                { field: 'precio', title: 'PRECIO' },
                { field: 'fecha', title: 'FECHA' },
                { field: 'sucursal', title: 'SUCURSAL' },
                { field: 'empleado', title: 'EMPLEADO' },
                
              ]
            });
        }
    },
  setup() {
    const store = useStore()

    const ventas = computed(() => store.state.ventas)


    onMounted(async()=>{
        await store.dispatch('obtenerVentas')
    })

    return {
      ventas
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