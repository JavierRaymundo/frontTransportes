<template>
  <div class="mt-5" style="padding-top: 5%">
        <form @submit="procesarFormulario">
                <FormAlquiler :alquiler="alquiler" />
        </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import FormAlquiler from "@/components/FormAlquileres/FormAlquiler.vue"
export default {
    components:{
        FormAlquiler
    },
    data() {
        return {
            alquiler:{
                cliente :"",
                vehiculo :"",
                tiempo :"",
                fecha :"",
                sucursal :"",
                empleado :""
            }
        }
    },
    methods: {
        ...mapActions(['setAlquileres']),
        procesarFormulario(){
            if(this.alquiler.cliente.trim() === ""){
                return
            }
            this.setAlquileres(this.alquiler)
            this.alquiler={
                cliente :"",
                vehiculo :"",
                tiempo :"",
                fecha :"",
                sucursal :"",
                empleado :""
            }
        }
    },
}
</script>

<style>

</style>