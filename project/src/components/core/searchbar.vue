<script>

/* import cat from "@/assets/cat.jpg"

export default {
  data: function () {
    return {
      image: cat
    }
  }
} */

</script>

<template>

    <!--barra de busqueda carousel-->

    <section class="search-sec">
        <div class="container">

            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <!-- <button type="button" class="btn btn-danger wrn-btn">INICIO</button> -->
                            <!-- <p v-show="$route.name=='about'" >Estamos en MyABOUT</p> -->
                            <RouterLink :to="{name:'home'}" class="btn btn-danger wrn-btn" v-if="$route.name=='home'">
                                INICIO</RouterLink>
                            <RouterLink :to="{name:'home'}" class="btn text-light wrn-btn" v-else>
                                INICIO</RouterLink>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <RouterLink :to="{name:'about'}" class="btn btn-danger wrn-btn" v-if="$route.name=='about'">
                                ACERCA DE</RouterLink>
                            <RouterLink :to="{name:'about'}" class="btn text-light wrn-btn" v-else>
                                ACERCA DE</RouterLink>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <RouterLink :to="{name:'services'}" class="btn btn-danger wrn-btn" v-if="$route.name=='services'">
                                SERVICIOS</RouterLink>
                            <RouterLink :to="{name:'services'}" class="btn text-light wrn-btn" v-else>
                                SERVICIOS</RouterLink>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <RouterLink :to="{name:'contact'}" class="btn btn-danger wrn-btn" v-if="$route.name=='contact'">
                                CONTACTO</RouterLink>
                            <RouterLink :to="{name:'contact'}" class="btn text-light wrn-btn" v-else>
                                CONTACTO</RouterLink>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </section>
    <!--fin de la bara de busqueda-->
    
    <!-- <RouterLink :to="{name:'home'}" class="nav-link">Inicio</RouterLink>
    <RouterLink :to="{name:'about'}" class="nav-link">Acerca de</RouterLink>
    <p v-show="$route.name=='about'" >Estamos en MyABOUT</p>
    <p>Estamos en {{ $route.name }}</p>
    <img :src="image" /> -->
    
    
</template>

<style>
/*search box css start here*/
.search-sec {
    padding: 1rem;
}


/* .search-slt {
    display: block;
    width: 100%;
    font-size: 0.875rem;
    line-height: 1.5;
    color: #55595c;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    // esto no height: calc(3rem + 2px) !important;
    border-radius: 0;
} */

.wrn-btn {
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    text-transform: capitalize;
    height: calc(2.5rem + 2px) !important;
    border-radius: 0;
}

@media (min-width: 992px) {
    .search-sec {
        position: relative;
        top: -100px;
        /*controla la posicion de la barra*/
        background: rgba(26, 70, 104, 0.51);
    }

}

@media (max-width: 992px) {
    .search-sec {
        background: #1A4668;
    }


}




nav a.router-link-exact-active {
    /*color: var(--color-text);*/
    color:#49176d;
    font-weight: 900;
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}


</style>