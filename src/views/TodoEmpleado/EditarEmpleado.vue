<template>
  <div class="mt-5" style="padding-top: 5%">
      <form  @submit.prevent="updateEmpleados(empleado)">
          <EdEmpleado :empleado="empleado" />
      </form>
  </div>
</template>

<script>

import EdEmpleado from '../../components/FormEmpleados/EdEmpleado'
import { mapActions, mapState } from 'vuex'
export default {
    components:{
        EdEmpleado
    },
    computed:{
        ...mapState(['empleado'])
    },
    methods: {
            ...mapActions(['setEmpleado','updateEmpleados']),
            
        },
        created() {
        this.setEmpleado(this.$route.params._id)
    },
}
</script>

<style>
</style>