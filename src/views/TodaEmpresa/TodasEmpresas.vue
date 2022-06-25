<template>
  <div class="home container p-2 mt-5">
      
        <div class="card p-3 mt-5">
          <h2 class="text-center mt-2">Empresas</h2>
          <div class="py-2">
            <router-link class="btn btn-warning me-2" to="/add"><i class="fas fa-plus"></i></router-link>
            <button @click="exportExcel" class="btn btn-success"><i class="fas fa-file-excel"></i></button>
          </div>   
     <table class="table table-striped text-center mt-2">
         <thead>
        <tr>
          <th scope="col">NOMBRE</th>
          <th scope="col">DIRECCIÓN</th>
          <th scope="col">NACIONALIDAD</th>
          <th scope="col">OPCIONES</th>
        </tr>
      </thead>

      <tbody>
    <tr v-for="item in empresas" :key="item._id">
      
      
      <td>{{item.nombre}}</td>
      <td>{{item.direccion}}</td>
      <td>{{item.nacionalidad}}</td>
      <td style="width: 160px;"> <router-link class="btn btn-info  rounded-pill " 
      :to="item._id ? {
        name: 'EditarEmpresa',
         params: {
           _id: item._id 
         } 
         } : '/'"
      >Editar</router-link> 
      <button class="btn btn-danger  rounded-pill" @click="eliminarEmpresas(item._id)">Borrar</button></td>
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
        ...mapActions(['eliminarEmpresas','obtenerEmpresas']),
        exportExcel () {
            saveExcel({
                data: this.empresas,
                fileName: "empresas",
                columns: [
                { field: '_id'},
                { field: 'nombre', title: 'NOMBRE' },
                { field: 'direccion', title: 'DIRECCION' },
                { field: 'nacionalidad', title: 'NACIONALIDAD' },
                
              ]
            });
        }
    },
  setup() {
    const store = useStore()

    const empresas = computed(() => store.state.empresas)


    onMounted(async()=>{
        await store.dispatch('obtenerEmpresas')
    })

    return {
      empresas
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