<template>
  <div class="mt-5" style="padding-top: 5%">
        <form @submit.prevent="procesarFormulario">
                <FormVehiculo :vehiculo="vehiculo" />
        </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import FormVehiculo from "@/components/FormVehiculos/FormVehiculo.vue"
export default {
    components:{
        FormVehiculo
    },
    data() {
        return {
            vehiculo:{
                placa : "",
                marca : "",
                modelo : "",
                tipo : "",
                estado : ""
            }
        }
    },
    methods: {
        ...mapActions(['setVehiculos']),
        procesarFormulario(){
            if(this.vehiculo.placa.trim() === ""){
                return
            }
            this.setVehiculos(this.vehiculo)
            this.vehiculo={
                placa : "",
                marca : "",
                modelo : "",
                tipo : "",
                estado : ""
            }
        }
    },
}
</script>

<style>

</style>