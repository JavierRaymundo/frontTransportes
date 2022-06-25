<template >
<div class="py-5"> <!--este es el row principal-->

<div class="container form-container d-flex justify-content-center mt-5">
<!--este es el primer cuadro-->
  <div class="mt-5 mb-5 me-5"><!--este es mi cuadro -->
  <router-link to="/dashboard-exportacion" class="fw-bold fs-1 text-center">
    <button type="button" class="btn btn-lg btn-block" style="width: 30rem; height: 15rem;" id="c1">
        EXPORTACIÓN<br>
        <i class="fas fa-shipping-fast mx-auto" id="add"></i>
    </button>
  </router-link>  
  </div>

  <!--este es el segudno cuadro-->

  <div class="mt-5 mb-5 ms-5">
  <router-link to="/dashboard-empleado" class="fw-bold fs-1 text-center">
    <button type="button" class="btn btn-lg btn-block" style="width: 30rem;height:15rem;" id="c2">
        EMPLEADOS<br>
        <i class=" fas fa-user-tie mx-auto" id="search"></i>
    </button>
  </router-link>
  </div>
</div>

<div class="container form-container d-flex justify-content-center">
  <div class="mb-5"><!--este es mi cuadro -->
  <router-link to="/dashboard-cliente" class="fw-bold fs-1 text-center">
    <button type="button" class="btn btn-lg btn-block" style="width: 30rem; height:15rem; " id="c4">
        CLIENTES<br>
        <i class="fas fa-user-tag mx-auto" id="searchi"></i>
    </button>
  </router-link>
  </div>
</div>

</div>
 
</template>

<script>
export default {
}
</script>

 <style   >
 a{
   text-decoration: none;
 }
 #c1{
     background: #F7D200;
     color: gray;
     font-size: 35px;
     font-weight: 700;
     border-radius: 15px;
 }
 #c2{
     background: #F7D200;
     color: gray;
     font-size: 35px;
     font-weight: 700;
     border-radius: 15px;
 }
 #c3{
    
     background: #F7D200;
     color: gray;
     font-size: 35px;
     font-weight: 700;
     border-radius: 15px;
 }
 #c4{
     background: #F7D200;
     color: gray;
     font-size: 35px;
     font-weight: 700;
     border-radius: 15px;
 }
 #add{
     height: 150px;
     width: 150px;
     color: #331a00;
 }
 #search{
     height: 150px;
     width: 150px;
     color: #331a00;
 }
 #searchi{
     height: 150px;
     width: 150px;
     color: #331a00;
 }
 #rep{
     height: 150px;
     width: 150px;
     color: #331a00;
 }
 </style>