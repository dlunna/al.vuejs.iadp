<script>
</script>

<template>
    <!--Inicio del carousel-->
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">

        <div class="carousel-inner">

            <div class="carousel-item active">
                <!-- <img src="https://via.placeholder.com/1200x400/ff0000/ffffff?text=First+Slide" class="d-block w-100" alt="First Slide"> -->
                <img class="img-responsive" src="/slider1.jpg">

                <div class="carousel-caption">
                    <h2>Instituto Alpha de Pachuca</h2>
                    <!--<p>Description</p>-->
                </div>
            </div>
            <div class="carousel-item">
                <!-- <img src="https://via.placeholder.com/1200x400/00ff00/ffffff?text=Second+Slide" class="d-block w-100" alt="Second Slide"> -->
                <img class="img-responsive" src="/slider2.jpg">
                <div class="carousel-caption">
                    <h2>Instituto Alpha de Pachuca</h2>
                    <!--<p>Description</p>-->
                </div>
            </div>
            <div class="carousel-item">
                <!-- <img src="https://via.placeholder.com/1200x400/0000ff/ffffff?text=Third+Slide" class="d-block w-100" alt="Third Slide"> -->
                <img class="img-responsive" src="/slider3.jpg">
                <div class="carousel-caption">
                    <h2>Instituto Alpha de Pachuca</h2>
                    <!--<p>Description</p>-->
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>


    </div>
    <!--Fin del carousel-->
</template>

<style>

/* Custom styles for carousel */
.carousel-item {
    overflow: hidden;
    /* Hide overflow to control zoom effect */
    position: relative;
    height: 400px;
    /* Adjust carousel item height */
}

.carousel-item img {
    transition: transform 6s ease;
    /* Adjust speed of zoom effect */
    object-fit: cover;
    width: 100%;
    height: 100%;
}

@keyframes zoomInOut {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.2);
        /* Zoom in halfway */
    }

    100% {
        transform: scale(1);
        /* Back to normal scale */
    }
}

.carousel-item.active img {
    animation: zoomInOut 12s infinite;
    /* Adjust duration of animation */
}









/* Since positioning the image, we need to help out the caption */

.carousel-caption {
    /*font-family: 'Lato', sans-serif;
        font-weight: 400;*/
    bottom: 18rem;
    z-index: 10;
    color: rgb(114, 7, 7);
}

@media (min-width: 40em) {

    /* Bump up size of carousel content */
    .carousel-caption p {
        margin-bottom: 1.25rem;
        font-size: 1.25rem;
        line-height: 1.4;
    }

    .content {
        max-width: 100%;
        width: 100%;
    }
}


</style>