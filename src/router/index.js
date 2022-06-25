import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {rutaProtegida: true}
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {rutaProtegida: true}
  },
  
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/registrar',
    name: 'Registrar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registrar.vue')
  },
  {
    path: '/empresas',
    name: 'TodasEmpresas',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodaEmpresa/TodasEmpresas.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/editarEmpresa/_id/:_id',
    name: 'EditarEmpresa',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodaEmpresa/EditarEmpresa.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/sucursales',
    name: 'TodasSucursales',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodaSucursal/TodasSucursales.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/editarSucursal/_id/:_id',
    name: 'EditarSucursal',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodaSucursal/EditarSucursal.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/agregarSucursal',
    name: 'AgregarSucural',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodaSucursal/AgregarSucursal.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/add',
    name: 'AgEmpresa',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodaEmpresa/AgEmpresa.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/empleados',
    name: 'TodosEmpleados',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodoEmpleado/TodosEmpleados.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/editarEmpleado/_id/:_id',
    name: 'EditarEmpleado',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodoEmpleado/EditarEmpleado.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/agregarEmpleado',
    name: 'AgregarEmpleado',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodoEmpleado/AgregarEmpleado.vue'),
    meta: {rutaProtegida: true}
  },

  {
    path: '/vehiculos',
    name: 'TodosVehiculos',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodoVehiculo/TodosVehiculos.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/editarVehiculo/_id/:_id',
    name: 'EditarVehiculo',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodoVehiculo/EditarVehiculo.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/agregarVehiculo',
    name: 'AgregarVehiculo',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodoVehiculo/AgregarVehiculo.vue'),
    meta: {rutaProtegida: true}
  },

  {
    path: '/clientes',
    name: 'TodosClientes',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodoCliente/TodosClientes.vue'),
    meta: {rutaProtegida: true}
  },

  {
    path: '/editarCliente/_id/:_id',
    name: 'EditarCliente',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodoCliente/EditarCliente.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/agregarCliente',
    name: 'AgregarCliente',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodoCliente/AgregarCliente.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/ventas',
    name: 'TodasVentas',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodaVenta/TodasVentas.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/editarVenta/_id/:_id',
    name: 'EditarVenta',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodaVenta/EditarVenta.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/agregarVenta',
    name: 'AgregarVenta',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodaVenta/AgregarVenta.vue'),
    meta: {rutaProtegida: true}
  },

  {
    path: '/alquileres',
    name: 'TodosAlquileres',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodoAlquiler/TodosAlquileres.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/editarAlquiler/_id/:_id',
    name: 'EditarAlquiler',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodoAlquiler/EditarAlquiler.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/agregarAlquiler',
    name: 'AgregarAlquiler',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodoAlquiler/AgregarAlquiler.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/exportaciones',
    name: 'TodaExportaciones',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodaExportacion/TodaExportaciones.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/editarExportacion/_id/:_id',
    name: 'EditarExportacion',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodaExportacion/EditarExportacion.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/agregarExportacion',
    name: 'AgregarExportacion',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodaExportacion/AgregarExportacion.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/dashboard-exportacion',
    name: 'DashboardExportacion',
    component: () => import('@/views/DashboardExportacion.vue'),
  },
  {
    path: '/dashboard-empleado',
    name: 'DashboardEmpleado',
    component: () => import('@/views/DashboardEmpleado.vue'),
  },
  {
    path: '/dashboard-cliente',
    name: 'DashboardCliente',
    component: () => import('@/views/DashboardCliente.vue'),
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to,from,next) =>{
  if(to.meta.rutaProtegida){ 
    if(store.getters.usuarioAutenticado){
      next()
    }else{
      next('/login') 
    }
  }else{
    next()
  }
}) 
export default router
