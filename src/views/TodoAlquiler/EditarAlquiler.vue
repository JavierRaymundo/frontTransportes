<template>
  <div class="mt-5" style="padding-top: 5%">
      <form  @submit.prevent="updateAlquileres(alquiler)">
          <EdAlquiler :alquiler="alquiler" />
      </form>
  </div>
</template>

<script>

import EdAlquiler from '../../components/FormAlquileres/EdAlquiler'
import { mapActions, mapState } from 'vuex'
export default {
    components:{
        EdAlquiler
    },
    computed:{
        ...mapState(['alquiler'])
    },
    methods: {
            ...mapActions(['setAlquiler','updateAlquileres']),
            
        },
        created() {
        this.setAlquiler(this.$route.params._id)
    },
}
</script>

<style>
</style>