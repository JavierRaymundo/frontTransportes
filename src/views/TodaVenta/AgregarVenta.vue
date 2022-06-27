<template>
  <div class="mt-5" style="padding-top: 5%">
        <form @submit.prevent="procesarFormulario">
                <FormVenta :venta="venta" />
        </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import FormVenta from "@/components/FormVenta/FormVenta.vue"
export default {
    components:{
        FormVenta
    },
    data() {
        return {
            venta:{
                cliente :"",
                vehiculo :"",
                precio :"",
                fecha :"",
                sucursal :"",
                empleado :""
            }
        }
    },
    methods: {
        ...mapActions(['setVentas']),
        procesarFormulario(){
            if(this.venta.cliente.trim() === ""){
                return
            }
            this.setVentas(this.venta)
            this.venta={
                cliente :"",
                vehiculo :"",
                precio :"",
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