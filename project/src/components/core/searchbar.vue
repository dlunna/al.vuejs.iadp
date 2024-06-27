<script>
</script>

<template>

    <!--barra de busqueda carousel-->



    <section class="search-sec">
        <div class="container">

            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <button type="button" class="btn btn-danger wrn-btn">INICIO</button>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <button type="button" class="btn text-light wrn-btn">ACERCA DE</button>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <button type="button" class="btn text-light wrn-btn">REGISTRO</button>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <button type="button" class="btn text-light wrn-btn">CONTACTO</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </section>
    <!--fin de la bara de busqueda-->
</template>

<style>
/*search box css start here*/
.search-sec {
    padding: 1rem;
}


.search-slt {
    display: block;
    width: 100%;
    font-size: 0.875rem;
    line-height: 1.5;
    color: #55595c;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    /*height: calc(3rem + 2px) !important;*/
    border-radius: 0;
}

.wrn-btn {
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    text-transform: capitalize;
    height: calc(3rem + 2px) !important;
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
</style>