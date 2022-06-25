<template>
  <div class="mt-5" style="padding-top: 5%">
      <form  @submit.prevent="updateVentas(venta)">
          <EdVenta :venta="venta" />
      </form>
  </div>
</template>

<script>

import EdVenta from '../../components/FormVenta/EdVenta'
import { mapActions, mapState } from 'vuex'
export default {
    components:{
        EdVenta
    },
    computed:{
        ...mapState(['venta'])
    },
    methods: {
            ...mapActions(['setVenta','updateVentas']),
            
        },
        created() {
        this.setVenta(this.$route.params._id)
    },
}
</script>

<style>
</style>