<template>
  <div class="mt-5" style="padding-top: 5%">
      <form  @submit.prevent="updateClientes(cliente)">
          <EdCliente :cliente="cliente" />
      </form>
  </div>
</template>

<script>

import EdCliente from '../../components/FormClientes/EdCliente'
import { mapActions, mapState } from 'vuex'
export default {
    components:{
        EdCliente
    },
    computed:{
        ...mapState(['cliente'])
    },
    methods: {
            ...mapActions(['setCliente','updateClientes']),
            
        },
        created() {
        this.setCliente(this.$route.params._id)
    },
}
</script>

<style>
</style>