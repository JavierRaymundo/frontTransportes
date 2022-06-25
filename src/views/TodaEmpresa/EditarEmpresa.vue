<template>
  <div class="mt-5" style="padding-top: 5%">
      <form  @submit.prevent="updateEmpresas(empresa)">
          <EdEmpresa :empresa="empresa" />
      </form>
  </div>
</template>

<script>

import EdEmpresa from '../../components/FormEmpresas/EdEmpresa'
import { mapActions, mapState } from 'vuex'
export default {
    components:{
        EdEmpresa
    },
    computed:{
        ...mapState(['empresa'])
    },
    methods: {
            ...mapActions(['setEmpresa','updateEmpresas']),
            
        },
        created() {
        this.setEmpresa(this.$route.params._id)
    },
}
</script>

<style>
</style>