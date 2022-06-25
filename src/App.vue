<template>
<div>
  
    <Navbar  v-if="usuarioAutenticado" />

  <router-view/>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Navbar from "./components/Navbar.vue"
export default {
  components:{
    Navbar

  },
  computed:{
        ...mapGetters(['usuarioAutenticado'])
    },
  methods: {
    ...mapActions(['cargarLocalStorage'])
  },
  created() {
    this.cargarLocalStorage()
  },
}
</script>