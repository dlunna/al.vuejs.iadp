<script setup>
import TheWelcome from '../components/TheWelcome.vue'
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
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>


    </div>
    <!--Fin del carousel-->

    

    <!--barra de busqueda carousel-->
    
<!--     <section class="search-sec2">
   
        fasdf
    </section> -->
    
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

    <!--3 iconos-->
    
        <!-- Levels-->
        <section class="page-section tres" id="levels">
            <div class="container">
                <div class="text-center">
                    <br>
                    <br>
                    <br>
                    <h2 class="fuente-h2">Niveles</h2>
                    <h3 class="fuente-h3" >Docentes: Altamente capacitados, con experiencia y actualizados.</h3>
                    <br>
                    <br>
                </div>
        
                <div class="row row-cols-1 row-cols-md-3 mb-3 text-center ">
                    <div class="col">
                        <div class="card mb-4 rounded-1  caja-color">
                            <div class="card-header mysidebar">
                                <img src="https://content.nccdn.net/Education3/ContentImages/star2-256x256-256x256.png#SYSTEM" width="30%">
                                <br>
                                <br>
                                <h2 class="fuente-h2">Preescolar</h2>
                                <br>
                                <br>
                                <p> Reconocer la diversidad social, lingüística y cultural que caracteriza a nuestro país, así como las características individuales de las niñas y los niños, propiciando que  vivan experiencias que contribuyan a sus procesos de desarrollo y aprendizaje, y que gradualmente, aprendan a regular sus emociones, a trabajar en colaboración, adquieran confianza para expresarse, dialogar y conversar, desarrollen interés y gusto por la lectura, ayudando a qué se  interesen en la observación de fenómenos naturales, e apropien de los valores y principios necesarios para la vida en comunidad, mejoren sus habilidades de coordinación, control, manipulación y desplazamiento; practiquen acciones de salud individual y colectiva para preservar y promover una vida saludable. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mb-4 rounded-1 caja-color">
                            <div class="card-header mysidebar">
                                <img src="https://content.nccdn.net/Education3/ContentImages/rocket_2-256x256-256x256.png#SYSTEM" width="30%">
                                <br>
                                <br>
                                <h2 class="fuente-h2">Primaria</h2>
                                <br>
                                <br>
                                <p>Generar en la comunidad del Instituto Alpha de Pachuca la consciencia del otro, trabajando en equipo; alumnos, padres y docentes. Con profesores comprometidos con los procesos de desarrollo y aprendizajes, así como, el desarrollo socioemocional que fomente hábitos saludables que favorezcan el pensamiento crítico de los/las alumnos.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col mysidebar">
                        <div class="card mb-4 rounded-1 caja-color">
                            <div class="card-header mysidebar">
                                <img src="https://content.nccdn.net/Education3/ContentImages/apple2-256x256-256x256.png#SYSTEM" width="30%">
                                <br>
                                <br>
                                <h2 class="fuente-h2">Secundaria</h2>
                                <br>
                                <br>
                                <p>Desarrollar y consolidar hábitos de disciplina, estudio, trabajo individual y en equipo, como condición necesaria para una realización eficaz en las tareas del aprendizaje y como medio de desarrollo.</p>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
                
        
        
        
            </div>
        </section>
    
    <!-- fin de los 3 iconos-->

    <section>
        <div class="container">

            <div class="row">
                <div class="col-4">
                    <img src="https://content.nccdn.net/Education3/ContentImages/kids-400x401.png#SYSTEM">
                    
                </div>
                <div class="col-2"> </div>
                <div class="col-6">
                    <h2 class="fuente-h2">Mejora continua</h2>
                    <p class="fuente-h3">
                        Estamos comprometidos en ofrecer a todos y cada uno de los niños que atraviesan nuestra puerta un ambiente seguro y divertido. Nuestro compromiso es asegurar que usted y sus hijos se sientan cómodos.
                    </p>
                    <button type="button" class="btn btn-danger">Más información</button>
                </div>
            </div>

            <div class="row">
                <div class="col-6">
                    <h2 class="fuente-h2">Profesores excepcionales</h2>
                    <p class="fuente-h3">
                        Nuestro extraordinario personal de enseñanza cree en la educación junto con la socialización de los niños al interactuar unos con otros. Estamos comprometidos a proporcionar a su hijo atención y cuidado.
                    </p>
                    <button type="button" class="btn btn-danger">Más información</button>
                </div>
                <div class="col-2"> </div>
                <div class="col-4">
                    <img src="https://content.nccdn.net/Education3/ContentImages/tutor_2-400x401.png#SYSTEM">
                </div>
            </div>

            <div class="row">
                <div class="col-4">
                    <img src="https://content.nccdn.net/Education3/ContentImages/kid2-400x401.png#SYSTEM">
                </div>
                <div class="col-2"> </div>
                <div class="col-6">
                    <h2 class="fuente-h2">Excelencia académica</h2>
                    <p class="fuente-h3">
                        Hemos desarrollado una apasionada comunidad de padres, profesores y mentores que ofrecen la mejor experiencia educativa posible a sus hijos.
                    </p>
                    <button type="button" class="btn btn-danger">Más información</button>
                </div>
                
                
            </div>




        </div>
    </section>


    <section>
        <div class="container caja-color">
            <br>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29974.238755260965!2d-98.76209257020105!3d20.101487861339486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1718675789714!5m2!1ses-419!2smx" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>

    </section>
    







    <!--3 iconos-->
    
        <!-- Levels-->
        <section>
            <br>
            <br>
            <div class="container">
        
                <div class="row row-cols-1 row-cols-md-3 mb-3  ">
                    <div class="col">
                        <div class="card mb-4 rounded-1  caja-color">
                            <div class="card-header">
                                <h2 class="fuente-h2">Redes sociales</h2>
                                <ul>
                                    <li>Facebook</li>
                                    <li>Twitter</li>
                                    <li>Instagram</li>
                                    <li>Whats</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mb-4 rounded-1 caja-color">
                            <div class="card-header">
                                <h2 class="fuente-h2">Contáctenos</h2>
                                <ul>
                                    <li>771 123 4567</li>
                                    
                                    <li>Boulevard Luis Donaldo Colosio, Pachuca de Soto, 42084
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mb-4 rounded-1 caja-color">
                            <div class="card-header">
                                <h2 class="fuente-h2">Varios</h2>
                                <ul>
                                    <li>Biblioteca</li>
                                    <li>Pleno</li>
                                    <li>Notas</li>
                                    <li>Ingles</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
        
        
        
            </div>
        </section>
    
    <!-- fin de los 3 iconos-->















    







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
                top: -100px; /*controla la posicion de la barra*/
                background: rgba(26, 70, 104, 0.51);
            }

        }

        @media (max-width: 992px) {
            .search-sec {
                background: #1A4668;
            }


        }







        .tres{
            background-color:#ece5d9;
            position: relative;
            top: -82px; /*da la posicion donde inicia lo cafe*/
        }

        .fuente-h2{
            font-family: 'Lato', sans-serif;
            font-weight: 300;
            color:#ca3a3a;
        }
        .fuente-h3{
            font-family: 'Lato', sans-serif;
            font-weight: 300;
            color:black;
        }

        .caja-color{
            background-color:#ece5d9;
        }
        .mysidebar {
            height: 700px;
            }






        /* General Website Style rules */
        body {
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        }
        





</style>