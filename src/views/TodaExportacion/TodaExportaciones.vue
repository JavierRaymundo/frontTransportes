<template>
  <div class="home container p-2 mt-5">
      
        <div class="card p-3 mt-5">
          <h2 class="text-center mt-2">Exportaciones</h2>
          <div class="py-2">      
            <router-link class="btn btn-warning me-2" to="/agregarExportacion"><i class="fas fa-plus"></i></router-link>
            <button @click="exportExcel" class="btn btn-success"><i class="fas fa-file-excel"></i></button>
          </div>
     <table class="table table-striped text-center mt-2">
         <thead>
        <tr>
          
          <th scope="col">VEHÍCULO</th>
          <th scope="col">SUCURSAL</th>
          <th scope="col">EXTRACCIÓN</th>
          <th scope="col">FECHA</th>
          <th scope="col">CANTIDAD</th>
          <th scope="col">PRECIO</th>
          <th scope="col">EMPRESA</th>
          <th scope="col">OPCIONES</th>
        </tr>
      </thead>

      <tbody>
    <tr v-for="item in exportaciones" :key="item._id">
      
      
      <td>{{item.vehiculo}}</td>
      <td>{{item.sucursal}}</td>
      <td>{{item.extraccion}}</td>
      <td>{{item.fecha}}</td>
      <td>{{item.cantidad}}</td>
      <td>{{item.precio}}</td>
     <td>{{item.empresa}}</td>
       <td  style="width: 160px;"> <router-link class="btn btn-info  rounded-pill " 
      :to="item._id ? {
        name: 'EditarExportacion',
         params: {
           _id: item._id 
         } 
         } : '/'"
      >Editar</router-link> 
      <button class="btn btn-danger  rounded-pill" @click="eliminarExportaciones(item._id)">Borrar</button></td> 
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
        ...mapActions(['eliminarExportaciones','obtenerExportaciones']),
        exportExcel () {
            saveExcel({
                data: this.exportaciones,
                fileName: "exportaciones",
                columns: [
                { field: '_id'},
                { field: 'vehiculo', title: 'VEHICULO' },
                { field: 'sucursal', title: 'SUCURSAL' },
                { field: 'fecha', title: 'FECHA' },
                { field: 'cantidad', title: 'CANTIDAD' },
                { field: 'precio', title: 'PRECIO' },
                { field: 'empresa', title: 'EMPRESA' },

              ]
            });
        }
    },
  setup() {
    const store = useStore()

    const exportaciones = computed(() => store.state.exportaciones)


    onMounted(async()=>{
        await store.dispatch('obtenerExportaciones')
    })

    return {
      exportaciones
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