<template>
  <div class="home container p-2 mt-5">
      
        <div class="card p-3 mt-5">
          <h2 class="text-center mt-2">Sucursales</h2>
          <div class="py-2">
            <router-link class="btn1 btn btn-warning  me-2" to="/agregarSucursal"><i class="fas fa-plus"></i></router-link>
            <button @click="exportExcel" class="btn btn-success"><i class="fas fa-file-excel"></i></button>
          </div>
     <table class="table table-striped text-center mt-2">
         <thead>
        <tr>
          
          <th scope="col">NOMBRE</th>
          <th scope="col">DIRECCIÓN</th>
          <th scope="col">TIPO DE PLANTA</th>
          <th scope="col">OPCIONES</th>
        </tr>
      </thead>

      <tbody>
    <tr v-for="item in sucursales" :key="item._id">
      
      
      <td>{{item.nombre}}</td>
      <td>{{item.direccion}}</td>
      <td>{{item.tipoPlanta}}</td>
       <td style="width: 160px;"> <router-link class="btn btn-info  rounded-pill " 
      :to="item._id ? {
        name: 'EditarSucursal',
         params: {
           _id: item._id 
         } 
         } : '/'"
      >Editar</router-link> 
      <button class="btn btn-danger  rounded-pill" @click="eliminarSucursales(item._id)">Borrar</button></td>
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
        ...mapActions(['eliminarSucursales','obtenerSucursales']),
        exportExcel () {
            saveExcel({
                data: this.sucursales,
                fileName: "sucursales",
                columns: [
                { field: '_id'},
                { field: 'nombre', title: 'NOMBRE' },
                { field: 'direccion', title: 'DIRECCION' },
                { field: 'tipoPlanta', title: 'PLANTA' },
                
              ]
            });
        }
    },
  setup() {
    const store = useStore()

    const sucursales = computed(() => store.state.sucursales)


    onMounted(async()=>{
        await store.dispatch('obtenerSucursales')
    })

    return {
      sucursales
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