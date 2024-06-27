<script setup>
  import Slider from '../components/main/Slider.vue'
  import SearchBar from '../components/core/searchbar.vue'
  import Footer from '../components/core/footer.vue'
</script>

<template>

    <Slider/>
    <SearchBar/>





    <!--3 iconos-->

    <!-- Levels-->
    <section class="page-section tres" id="levels">
        <div class="container">
            <div class="text-center">
                <br>
                <br>
                <br>
                <h2 class="fuente-h2">Niveles</h2>
                <h3 class="fuente-h3">Docentes: Altamente capacitados, con experiencia y actualizados.</h3>
                <br>
                <br>
            </div>

            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center ">
                <div class="col">
                    <div class="card mb-4 rounded-1  caja-color">
                        <div class="card-header mysidebar">
                            <img src="https://content.nccdn.net/Education3/ContentImages/star2-256x256-256x256.png#SYSTEM"
                                width="30%">
                            <br>
                            <br>
                            <h2 class="fuente-h2">Preescolar</h2>
                            <br>
                            <br>
                            <p> Reconocer la diversidad social, lingüística y cultural que caracteriza a nuestro país, así
                                como las características individuales de las niñas y los niños, propiciando que vivan
                                experiencias que contribuyan a sus procesos de desarrollo y aprendizaje, y que gradualmente,
                                aprendan a regular sus emociones, a trabajar en colaboración, adquieran confianza para
                                expresarse, dialogar y conversar, desarrollen interés y gusto por la lectura, ayudando a qué
                                se interesen en la observación de fenómenos naturales, e apropien de los valores y
                                principios necesarios para la vida en comunidad, mejoren sus habilidades de coordinación,
                                control, manipulación y desplazamiento; practiquen acciones de salud individual y colectiva
                                para preservar y promover una vida saludable. </p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-4 rounded-1 caja-color">
                        <div class="card-header mysidebar">
                            <img src="https://content.nccdn.net/Education3/ContentImages/rocket_2-256x256-256x256.png#SYSTEM"
                                width="30%">
                            <br>
                            <br>
                            <h2 class="fuente-h2">Primaria</h2>
                            <br>
                            <br>
                            <p>Generar en la comunidad del Instituto Alpha de Pachuca la consciencia del otro, trabajando en
                                equipo; alumnos, padres y docentes. Con profesores comprometidos con los procesos de
                                desarrollo y aprendizajes, así como, el desarrollo socioemocional que fomente hábitos
                                saludables que favorezcan el pensamiento crítico de los/las alumnos.</p>
                        </div>
                    </div>
                </div>
                <div class="col mysidebar">
                    <div class="card mb-4 rounded-1 caja-color">
                        <div class="card-header mysidebar">
                            <img src="https://content.nccdn.net/Education3/ContentImages/apple2-256x256-256x256.png#SYSTEM"
                                width="30%">
                            <br>
                            <br>
                            <h2 class="fuente-h2">Secundaria</h2>
                            <br>
                            <br>
                            <p>Desarrollar y consolidar hábitos de disciplina, estudio, trabajo individual y en equipo, como
                                condición necesaria para una realización eficaz en las tareas del aprendizaje y como medio
                                de desarrollo.</p>

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
                        Estamos comprometidos en ofrecer a todos y cada uno de los niños que atraviesan nuestra puerta un
                        ambiente seguro y divertido. Nuestro compromiso es asegurar que usted y sus hijos se sientan
                        cómodos.
                    </p>
                    <button type="button" class="btn btn-danger">Más información</button>
                </div>
            </div>

            <div class="row">
                <div class="col-6">
                    <h2 class="fuente-h2">Profesores excepcionales</h2>
                    <p class="fuente-h3">
                        Nuestro extraordinario personal de enseñanza cree en la educación junto con la socialización de los
                        niños al interactuar unos con otros. Estamos comprometidos a proporcionar a su hijo atención y
                        cuidado.
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
                        Hemos desarrollado una apasionada comunidad de padres, profesores y mentores que ofrecen la mejor
                        experiencia educativa posible a sus hijos.
                    </p>
                    <button type="button" class="btn btn-danger">Más información</button>
                </div>


            </div>




        </div>
    </section>


    <section>
        <div class="container caja-color">
            <br>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29974.238755260965!2d-98.76209257020105!3d20.101487861339486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1718675789714!5m2!1ses-419!2smx"
                width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>

    </section>







  <Footer/>

</template>

<style>


.tres {
    background-color: #ece5d9;
    position: relative;
    top: -82px;
    /*da la posicion donde inicia lo cafe*/
}

.fuente-h2 {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    color: #ca3a3a;
}

.fuente-h3 {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    color: black;
}

.caja-color {
    background-color: #ece5d9;
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