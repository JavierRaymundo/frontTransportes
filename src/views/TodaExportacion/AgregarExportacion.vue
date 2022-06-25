<template>
  <div class="mt-5" style="padding-top: 5%">
        <form @submit="procesarFormulario">
                <FormExportaciones :exportacion="exportacion" />
        </form>
  </div>
</template>

<script>
import { mapActions} from 'vuex'
import FormExportaciones from '@/components/FormExportaciones/FormExportaciones.vue'
export default {
    components:{
        FormExportaciones
    },
    data() {
        return {
            exportacion:{
                vehiculo :"",
                sucursal :"",
                extraccion :"",
                fecha :"",
                cantidad :"",
                precio :"",
                empresa :""
            }
        }
    },
    methods: {
        ...mapActions(['setExportaciones']),
        procesarFormulario(){
            if(this.exportacion.vehiculo.trim() === ""){
                return
            }
            this.setExportaciones(this.exportacion)
            this.exportacion={
                vehiculo :"",
                sucursal :"",
                extraccion :"",
                fecha :"",
                cantidad :"",
                precio :"",
                empresa :""
            }
        }
    },
}
</script>

<style>

</style>