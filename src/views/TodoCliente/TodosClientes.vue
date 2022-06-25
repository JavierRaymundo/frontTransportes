<template>
  <div class="home container p-2 mt-5">
      
        <div class="card p-3 mt-5">
          <h2 class="text-center mt-2">Clientes</h2>
          <div class="py-2">
            <router-link class="btn btn-warning me-2" to="/agregarCliente"><i class="fas fa-plus"></i></router-link>
            <button @click="exportExcel" class="btn btn-success"><i class="fas fa-file-excel"></i></button>
          </div>
     <table class="table table-striped text-center mt-2">
         <thead>
        <tr>
          
          <th scope="col">NOMBRE</th>
          <th scope="col">APELLIDO</th>
          <th scope="col">TELÉFONO</th>
          <th scope="col">NIT</th>
          <th scope="col">DIRECCIÓN</th>
          <th scope="col">CORREO</th>
          <th scope="col">OPCIONES</th>
        </tr>
      </thead>

      <tbody>
    <tr v-for="item in clientes" :key="item._id">
      
      
      <td>{{item.nombres}}</td>
      <td>{{item.apellidos}}</td>
      <td>{{item.telefono}}</td>
      <td>{{item.NIT}}</td>
      <td>{{item.direccion}}</td>
      <td>{{item.correo}}</td>
       <td style="width: 160px;"> <router-link class="btn btn-info  rounded-pill " 
      :to="item._id ? {
        name: 'EditarCliente',
         params: {
           _id: item._id 
         } 
         } : '/'"
      >Editar</router-link> 
      <button class="btn btn-danger  rounded-pill" @click="eliminarClientes(item._id)">Borrar</button></td> 
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
        ...mapActions(['eliminarClientes','obtenerClientes']),
        exportExcel () {
            saveExcel({
                data: this.clientes,
                fileName: "Clientes",
                columns: [
                { field: '_id'},
                { field: 'nombres', title: 'NOMBRES' },
                { field: 'apellidos', title: 'APELLIDOS' },
                { field: 'telefono', title: 'TELEFONO' },
                { field: 'NIT', title: 'NIT' },
                { field: 'direccion', title: 'DIRECCION' },
                { field: 'correo', title: 'CORREO' },
                
              ]
            });
        }
    },
  setup() {
    const store = useStore()

    const clientes = computed(() => store.state.clientes)


    onMounted(async()=>{
        await store.dispatch('obtenerClientes')
    })

    return {
      clientes
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