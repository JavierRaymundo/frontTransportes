<template>
  <div class=" mt-5" style="padding-top: 5%">
        <form @submit.prevent="procesarFormulario">
                <FormCliente :cliente="cliente" />
        </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import FormCliente from "@/components/FormClientes/FormCliente.vue"
export default {
    components:{
        FormCliente
    },
    data() {
        return {
            cliente:{
                 nombres :"",
                apellidos :"",
                telefono :0,
                NIT :"",
                direccion :"",
                correo:""
            }
        }
    },
    methods: {
        ...mapActions(['setClientes']),
        procesarFormulario(){
            if(this.cliente.nombres.trim() === ""){
                return
            }
            this.setClientes(this.cliente)
            this.cliente={
                nombres :"",
                apellidos :"",
                telefono :0,
                NIT :"",
                direccion :"",
                correo:""
            }
        }
    },
}
</script>

<style>

</style>