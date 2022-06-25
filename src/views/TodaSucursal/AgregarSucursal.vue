<template>
  <div class="mt-5" style="padding-top: 5%">
        <form @submit="procesarFormulario">
                <FormSucursal :sucursal="sucursal" />
        </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import FormSucursal from "@/components/FormSucursales/FormSucursal.vue"
export default {
    components:{
        FormSucursal
    },
    data() {
        return {
            sucursal:{
                nombre:"",
                direccion:"",
                tipoPlanta:""
            }
        }
    },
    methods: {
        ...mapActions(['setSucursales']),
        procesarFormulario(){
            if(this.sucursal.nombre.trim() === ""){
                return
            }
            this.setSucursales(this.sucursal)
            this.sucursal={
                nombre:"",
                direccion:"",
                tipoPlanta:""
            }
        }
    },
}
</script>

<style>

</style>