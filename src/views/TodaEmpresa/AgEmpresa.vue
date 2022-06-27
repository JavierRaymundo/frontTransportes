<template>
  <div class="mt-5" style="padding-top: 5%">
        <form @submit.prevent="procesarFormulario">
                <FormEmpresa :empresa="empresa" />
        </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import FormEmpresa from "@/components/FormEmpresas/FormEmpresa.vue"
export default {
    components:{
        FormEmpresa
    },
    data() {
        return {
            empresa:{
                nombre:"",
                direccion:"",
                nacionalidad:""
            }
        }
    },
    methods: {
        ...mapActions(['setEmpresas']),
        procesarFormulario(){
            if(this.empresa.nombre.trim() === ""){
                return
            }
            this.setEmpresas(this.empresa)
            this.empresa={
                nombre:"",
                direccion:"",
                nacionalidad:""
            }
        }
    },
}
</script>

<style>

</style>