import { createStore } from 'vuex'
import axios from 'axios'
import router from '../router'



export default createStore({
  state: {
    empresas:[],
    empresa:{
      nombre:"",
      direccion:"",
      nacionalidad:""
    },
    sucursales:[],
    sucursal:{
      nombre:"",
      direccion:"",
      tipoPlanta:""
    },
    empleados:[],
    empleado:{
      nombres: "",
      apellidos: "",
      telefono: 0,
      fechaNacimiento: "",
      puesto: "",
      sucursal: "",
      correo: "",
    },
    vehiculos:[],
    vehiculo:{
      placa : "",
      marca : "",
      modelo : "",
      tipo : "",
      estado : ""
    },
    clientes:[],
    cliente:{
      nombres :"",
      apellidos :"",
      telefono :0,
      NIT :"",
      direccion :"",
      correo:""
      },

      ventas:[],
      venta:{
        cliente :"",
        vehiculo :"",
        precio :"",
        fecha :"",
        sucursal :"",
        empleado :""
      },
      alquileres:[],
      alquiler:{
        cliente :"",
        vehiculo :"",
        tiempo :"",
        fecha :"",
        sucursal :"",
        empleado :""
      },
      exportaciones:[],
      exportacion:{
        vehiculo :"",
        sucursal :"",
        extraccion :"",
        fecha :"",
        cantidad :"",
        precio :"",
        empresa :""
      },

  user:null
  },
  mutations: {
    setUser(state,payload){
      state.user = payload
    },
    setEmpresa(state,payload){
      state.empresas.push(payload)
      router.push('/empresas')
    },
    cargarEmpresa(state,payload){
      state.empresas =payload
    },
    eliminarEmpresa(state, payload){
      state.empresas = state.empresas.filter(item => item._id !==payload)
    },
    empresa(state, payload){
      if(!state.empresas.find(item =>item._id ===payload)){
        return
      }
      state.empresa = state.empresas.find(item => item._id ===payload)
    },
    updateEmpresa(state, payload){
      state.empresas = state.empresas.map(item => item._id === payload._id ? payload : item)
      router.push('/empresas')
    },
    eliminarEmpresa(state,payload){
      state.empresas = state.empresas.filter(item => item._id !== payload)
    },

    setSucursal(state,payload){
      state.sucursales.push(payload)
      router.push('/sucursales')
    },
    cargarSucursal(state,payload){
      state.sucursales =payload
    },
    sucursal(state, payload){
      if(!state.sucursales.find(item =>item._id ===payload)){
        return
      }
      state.sucursal = state.sucursales.find(item => item._id ===payload)
    },
    updateSucursal(state, payload){
      state.sucursales = state.sucursales.map(item => item._id === payload._id ? payload : item)
      router.push('/sucursales')
    },
    eliminarSucursal(state,payload){
      state.sucursales = state.sucursales.filter(item => item._id !== payload)
    },


    setEmpleado(state,payload){
      state.empleados.push(payload)
      router.push('/empleados')
    },
    cargarEmpleado(state,payload){
      state.empleados =payload
    },
    eliminarEmpleado(state, payload){
      state.empleados = state.empleados.filter(item => item._id !==payload)
    },
    empleado(state, payload){
      if(!state.empleados.find(item =>item._id ===payload)){
        return
      }
      state.empleado = state.empleados.find(item => item._id ===payload)
    },
    updateEmpleado(state, payload){
      state.empleados = state.empleados.map(item => item._id === payload._id ? payload : item)
      router.push('/empleados')
    },


    setVehiculo(state,payload){
      state.vehiculos.push(payload)
      router.push('/vehiculos')
    },
    cargarVehiculo(state,payload){
      state.vehiculos =payload
    },
    eliminarVehiculo(state, payload){
      state.vehiculos = state.vehiculos.filter(item => item._id !==payload)
    },
    vehiculo(state, payload){
      if(!state.vehiculos.find(item =>item._id ===payload)){
        return
      }
      state.vehiculo = state.vehiculos.find(item => item._id ===payload)
    },
    updateVehiculo(state, payload){
      state.vehiculos = state.vehiculos.map(item => item._id === payload._id ? payload : item)
      router.push('/vehiculos')
    },

    //CLIENTES
    setCliente(state,payload){
      state.clientes.push(payload)
      router.push('/clientes')
    },
    cargarCliente(state,payload){
      state.clientes =payload
    },
    eliminarCliente(state, payload){
      state.clientes = state.clientes.filter(item => item._id !==payload)
    },
    cliente(state, payload){
      if(!state.clientes.find(item =>item._id ===payload)){
        return
      }
      state.cliente = state.clientes.find(item => item._id ===payload)
    },
    updateCliente(state, payload){
      state.clientes = state.clientes.map(item => item._id === payload._id ? payload : item)
      router.push('/clientes')
    },

    //VENTAS
    setVenta(state,payload){
      state.ventas.push(payload)
      router.push('/ventas')
    },
    cargarVenta(state,payload){
      state.ventas =payload
    },
    eliminarVenta(state, payload){
      state.ventas = state.ventas.filter(item => item._id !==payload)
    },
    venta(state, payload){
      if(!state.ventas.find(item =>item._id ===payload)){
        return
      }
      state.venta = state.ventas.find(item => item._id ===payload)
    },
    updateVenta(state, payload){
      state.ventas = state.ventas.map(item => item._id === payload._id ? payload : item)
      router.push('/ventas')
    },

     //alquileres
     setAlquiler(state,payload){
      state.alquileres.push(payload)
      router.push('/alquileres')
    },
    cargarAlquiler(state,payload){
      state.alquileres =payload
    },
    eliminarAlquiler(state, payload){
      state.alquileres = state.alquileres.filter(item => item._id !==payload)
    },
    alquiler(state, payload){
      if(!state.alquileres.find(item =>item._id ===payload)){
        return
      }
      state.alquiler = state.alquileres.find(item => item._id ===payload)
    },
    updateAlquiler(state, payload){
      state.alquileres = state.alquileres.map(item => item._id === payload._id ? payload : item)
      router.push('/alquileres')
    },

    //exportaczao
    setExportacion(state,payload){
      state.exportaciones.push(payload)
      router.push('/exportaciones')
    },
    cargarExportacion(state,payload){
      state.exportaciones =payload
    },
    eliminarExportacion(state, payload){
      state.exportaciones = state.exportaciones.filter(item => item._id !==payload)
    },
    exportacion(state, payload){
      if(!state.exportaciones.find(item =>item._id ===payload)){
        return
      }
      state.exportacion = state.exportaciones.find(item => item._id ===payload)
    },
    updateExportacion(state, payload){
      state.exportaciones = state.exportaciones.map(item => item._id === payload._id ? payload : item)
      router.push('/exportaciones')
    },
  },

  actions: {
   
    async ingresoUsuario({commit},usuario){ 
      try {
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBWiLSEUmu4K5XeXtVlY_JjEO5qMAlbr_c',{
          method:'POST',
          
          body: JSON.stringify({
            email: usuario.email,
            password: usuario.password,
            returnSecureToken: true
          })
        })
        const userDB = await res.json()
        if(userDB.error){
          return console.log(userDB.error)
        }
        commit('setUser',userDB)

        router.push('/')
        localStorage.setItem('usuario',JSON.stringify(userDB))
      } catch (error) {
        console.log(error)
      }
    },
    async registrarUsuario({commit},usuario){
      //este url es global, solo se le cambia lo que va despues de key= AIzaSyBLt0_UFNbEJZTQVmXJY_WNAIwv-yOFL98

      try {
        const respuesta = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBWiLSEUmu4K5XeXtVlY_JjEO5qMAlbr_c',{
          method: 'POST',
          body: JSON.stringify({
            email: usuario.email,
            password: usuario.password,
            returnSecureToken: true
          })
        })
        const userDB = await respuesta.json()
        console.log(userDB)
        if(userDB.error){
          console.log(userDB.error)
          return
        }
        commit('setUser', userDB)
        router.push('/')
        localStorage.setItem('usuario',JSON.stringify(userDB))

      } catch (error) {
        console.log(error)
      }
    },
    async cargarLocalStorage({commit,state}){
      if(localStorage.getItem('usuario')){
        commit('setUser',JSON.parse(localStorage.getItem('usuario')))
      }else{
        return commit('setUser', null)
      }
      
    },
    cerrarSesion(){
      this.commit('setUser',null)
      router.push('/login')
      localStorage.removeItem('usuario')
    },
    async setEmpresas({commit},empresa){
      const respuesta = await axios
      .post('https://transporteseminario.herokuapp.com/empresa/', empresa) 
      commit('setEmpresa',empresa)
      console.log(respuesta.data, "respuesta")
    },
    setEmpresa({commit},_id){
      commit('empresa',_id)
  },
    async obtenerEmpresas({commit}){
      const resp = await axios
      .get('https://transporteseminario.herokuapp.com/empresa/')
      .then(res =>{
        const datos = res.data.empresas
        commit('cargarEmpresa',datos)
      })
    },
    async updateEmpresas({commit},empresa,_id){
      const id = empresa._id
      const ins = await axios
      .put('https://transporteseminario.herokuapp.com/empresa/_id/'+id,empresa)
      .catch(err => {
        console.log(err)
      })
      commit('updateEmpresa',empresa)
    },
    async eliminarEmpresas({commit},_id){
      const resultado = await axios
      .delete('https://transporteseminario.herokuapp.com/empresa/_id/'+ _id)
      .catch(err =>{
        console.log(err)
      })
      commit('eliminarEmpresa',_id)
    },

    async obtenerSucursales({commit}){
      const resp = await axios
      .get('https://transporteseminario.herokuapp.com/sucursal/')
      .then(res =>{
        const datos = res.data.sucursales
        commit('cargarSucursal',datos)
      })
    },
    setSucursal({commit},_id){
      commit('sucursal',_id)
  },
  async updateSucursales({commit},sucursal,_id){
    const id = sucursal._id
    const ins = await axios
    .put('https://transporteseminario.herokuapp.com/sucursal/_id/'+id,sucursal)
    .catch(err => {
      console.log(err)
    })
    commit('updateSucursal',sucursal)
  },
  async eliminarSucursales({commit},_id){
    const resultado = await axios
    .delete('https://transporteseminario.herokuapp.com/sucursal/_id/'+ _id)
    .catch(err =>{
      console.log(err)
    })
    commit('eliminarSucursal',_id)
  },
  async setSucursales({commit},sucursal){
    const respuesta = await axios
    .post('https://transporteseminario.herokuapp.com/sucursal/', sucursal)
    commit('setSucursal',sucursal)
    console.log(respuesta.data, "respuesta")
  },
  setEmpleado({commit},_id){
    commit('empleado',_id)
},
  async obtenerEmpleados({commit}){
    const resp = await axios
    .get('https://transporteseminario.herokuapp.com/empleado/')
    .then(res =>{
      const datos = res.data.empleados
      commit('cargarEmpleado',datos)
    })
  },
  async eliminarEmpleados({commit},_id){
    const resultado = await axios
    .delete('https://transporteseminario.herokuapp.com/empleado/_id/'+ _id)
    .catch(err =>{
      console.log(err)
    })
    commit('eliminarEmpleado',_id)
  },
  setEmpleado({commit},_id){
    commit('empleado',_id)
},
async updateEmpleados({commit},empleado,_id){
  const id = empleado._id
  const ins = await axios
  .put('https://transporteseminario.herokuapp.com/empleado/_id/'+id,empleado)
  .catch(err => {
    console.log(err)
  })
  commit('updateEmpleado',empleado)
},
async setEmpleados({commit},empleado){
  const respuesta = await axios
  .post('https://transporteseminario.herokuapp.com/empleado/', empleado)
  commit('setEmpleado',empleado)
  console.log(respuesta.data, "respuesta")
},

async obtenerVehiculos({commit}){
  const resp = await axios
  .get('https://transporteseminario.herokuapp.com/vehiculo/')
  .then(res =>{
    const datos = res.data.vehiculos
    commit('cargarVehiculo',datos)
  })
},
async eliminarVehiculos({commit},_id){
  const resultado = await axios
  .delete('https://transporteseminario.herokuapp.com/vehiculo/_id/'+ _id)
  .catch(err =>{
    console.log(err)
  })
  commit('eliminarVehiculo',_id)
},
setVehiculo({commit},_id){
  commit('vehiculo',_id)
},

async updateVehiculos({commit},vehiculo,_id){
  const id = vehiculo._id
  const ins = await axios
  .put('https://transporteseminario.herokuapp.com/vehiculo/_id/'+id,vehiculo)
  .catch(err => {
    console.log(err)
  })
  commit('updateVehiculo',vehiculo)
},
async setVehiculos({commit},vehiculo){
  const respuesta = await axios
  .post('https://transporteseminario.herokuapp.com/vehiculo/', vehiculo)
  commit('setVehiculo',vehiculo)
  console.log(respuesta.data, "respuesta")
},

//clientes

async obtenerClientes({commit}){
  const resp = await axios
  .get('https://transporteseminario.herokuapp.com/cliente/')
  .then(res =>{
    const datos = res.data.clientes
    commit('cargarCliente',datos)
  })
},
async eliminarClientes({commit},_id){
  const resultado = await axios
  .delete('https://transporteseminario.herokuapp.com/cliente/_id/'+ _id)
  .catch(err =>{
    console.log(err)
  })
  commit('eliminarCliente',_id)
},
setCliente({commit},_id){
  commit('cliente',_id)
},

async updateClientes({commit},cliente,_id){
  const id = cliente._id
  const ins = await axios
  .put('https://transporteseminario.herokuapp.com/cliente/_id/'+id,cliente)
  .catch(err => {
    console.log(err)
  })
  commit('updateCliente',cliente)
},
async setClientes({commit},cliente){
  const respuesta = await axios
  .post('https://transporteseminario.herokuapp.com/cliente/', cliente)
  commit('setCliente',cliente)
  console.log(respuesta.data, "respuesta")
},

//ventas
async obtenerVentas({commit}){
  const resp = await axios
  .get('https://transporteseminario.herokuapp.com/venta/')
  .then(res =>{
    const datos = res.data.ventas
    commit('cargarVenta',datos)
  })
},
async eliminarVentas({commit},_id){
  const resultado = await axios
  .delete('https://transporteseminario.herokuapp.com/venta/_id/'+ _id)
  .catch(err =>{
    console.log(err)
  })
  commit('eliminarVenta',_id)
},
setVenta({commit},_id){
  commit('venta',_id)
},

async updateVentas({commit},venta,_id){
  const id = venta._id
  const ins = await axios
  .put('https://transporteseminario.herokuapp.com/venta/_id/'+id,venta)
  .catch(err => {
    console.log(err)
  })
  commit('updateVenta',venta)
},
async setVentas({commit},venta){
  const respuesta = await axios
  .post('https://transporteseminario.herokuapp.com/venta/', venta)
  commit('setVenta',venta)
  console.log(respuesta.data, "respuesta")
},
 
//alquieleres

async obtenerAlquileres({commit}){
  const resp = await axios
  .get('https://transporteseminario.herokuapp.com/alquiler/')
  .then(res =>{
    const datos = res.data.alquileres
    commit('cargarAlquiler',datos)
  })
},
async eliminarAlquileres({commit},_id){
  const resultado = await axios
  .delete('https://transporteseminario.herokuapp.com/alquiler/_id/'+ _id)
  .catch(err =>{
    console.log(err)
  })
  commit('eliminarAlquiler',_id)
},
setAlquiler({commit},_id){
  commit('alquiler',_id)
},

async updateAlquileres({commit},alquiler,_id){
  const id = alquiler._id
  const ins = await axios
  .put('https://transporteseminario.herokuapp.com/alquiler/_id/'+id,alquiler)
  .catch(err => {
    console.log(err)
  })
  commit('updateAlquiler',alquiler)
},
async setAlquileres({commit},alquiler){
  const respuesta = await axios
  .post('https://transporteseminario.herokuapp.com/alquiler/', alquiler)
  commit('setAlquiler',alquiler)
  console.log(respuesta.data, "respuesta")
},

//exportazaons

async obtenerExportaciones({commit}){
  const resp = await axios
  .get('https://transporteseminario.herokuapp.com/exportacion/')
  .then(res =>{
    const datos = res.data.exportaciones
    console.log(datos);
    commit('cargarExportacion',datos)
  })
},
async eliminarExportaciones({commit},_id){
  const resultado = await axios
  .delete('https://transporteseminario.herokuapp.com/exportacion/_id/'+ _id)
  .catch(err =>{
    console.log(err)
  })
  commit('eliminarExportacion',_id)
},
setExportacion({commit},_id){
  commit('exportacion',_id)
},

async updateExportaciones({commit},exportacion,_id){
  const id = exportacion._id
  const ins = await axios
  .put('https://transporteseminario.herokuapp.com/exportacion/_id/'+id,exportacion)
  .catch(err => {
    console.log(err)
  })
  commit('updateExportacion',exportacion)
},
async setExportaciones({commit},exportacion){
  const respuesta = await axios
  .post('https://transporteseminario.herokuapp.com/exportacion/', exportacion)
  commit('setExportacion',exportacion)
  console.log(respuesta.data, "respuesta")
},

  },
  modules: {
  },
  getters:{
     usuarioAutenticado(state){
      return !!state.user
    }
  }
})
