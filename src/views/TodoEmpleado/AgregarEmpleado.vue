<template>
  <div class="mt-5" style="padding-top: 5%">
        <form @submit="procesarFormulario">
                <FormEmpleado :empleado="empleado" />
        </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import FormEmpleado from "@/components/FormEmpleados/FormEmpleado.vue"
export default {
    components:{
        FormEmpleado
    },
    data() {
        return {
            empleado:{
                nombres: "",
                apellidos: "",
                telefono: 0,
                fechaNacimiento: "",
                puesto: "",
                sucursal: "",
                correo: "",
            }
        }
    },
    methods: {
        ...mapActions(['setEmpleados']),
        procesarFormulario(){
            if(this.empleado.nombres.trim() === ""){
                return
            }
            this.setEmpleados(this.empleado)
            this.empleado={
                nombres: "",
                apellidos: "",
                telefono: 0,
                fechaNacimiento: "",
                puesto: "",
                sucursal: "",
                correo: "",
            }
        }
    },
}
</script>

<style>

</style>