<template>
  <div class="mt-5" style="padding-top: 5%">
      <form  @submit.prevent="updateVehiculos(vehiculo)">
          <EdVehiculo :vehiculo="vehiculo" />
      </form>
  </div>
</template>

<script>

import EdVehiculo from '../../components/FormVehiculos/EdVehiculo'
import { mapActions, mapState } from 'vuex'
export default {
    components:{
        EdVehiculo
    },
    computed:{
        ...mapState(['vehiculo'])
    },
    methods: {
            ...mapActions(['setVehiculo','updateVehiculos']),
            
        },
        created() {
        this.setVehiculo(this.$route.params._id)
    },
}
</script>

<style>
</style>