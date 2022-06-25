<template>
  <div class="mt-5" style="padding-top: 5%">
      <form  @submit.prevent="updateExportaciones(exportacion)">
          <EdExportacion :exportacion="exportacion" />
      </form>
  </div>
</template>

<script>

import EdExportacion from '../../components/FormExportaciones/EdExportacion'
import { mapActions, mapState } from 'vuex'
export default {
    components:{
        EdExportacion
    },
    computed:{
        ...mapState(['exportacion'])
    },
    methods: {
            ...mapActions(['setExportacion','updateExportaciones']),
            
        },
        created() {
        this.setExportacion(this.$route.params._id)
    },
}
</script>

<style>
</style>