<template>
  <div class="mt-5" style="padding-top: 5%">
      <form  @submit.prevent="updateSucursales(sucursal)">
          <EdSucursal :sucursal="sucursal" />
      </form>
  </div>
</template>

<script>

import EdSucursal from '../../components/FormSucursales/EdSucursal'
import { mapActions, mapState } from 'vuex'
export default {
    components:{
        EdSucursal
    },
    computed:{
        ...mapState(['sucursal'])
    },
    methods: {
            ...mapActions(['setSucursal','updateSucursales']),
            
        },
        created() {
        this.setSucursal(this.$route.params._id)
    },
}
</script>

<style>
</style>