<script setup>
import Slider from '../components/core/Slider.vue'
import SearchBar from '../components/core/searchbar.vue'
import Footer from '../components/core/footer.vue'
/*
import EducativeLevels from '../components/main/EducativeLevels.vue'
import Text from '../components/main/Text.vue'
*/
import Map from '../components/main/Map.vue'
</script>

<template>
    <Slider />
    <SearchBar />


    <section class="page-section" id="services">
        <div class="container">

            <div class="row align-items-center">
                <div class="col-md-6 col-sm-6 my-3">
                    <h1>Secretaría Académica</h1>
                    <h2 class="fuente-h2">Dr. Francisco Rafael Trejo Macotela</h2>
                    <ul>
                        <li>Correo electrónico: <a
                                href="mailto:institutoalphadepachuca@gmail.com">institutoalphadepachuca@gmail.com</a></li>
                        <li>Teléfono: 771 148 7698</li>
                    </ul>
                    <h2>Objetivo profesional</h2>
                    <p>Impulsar las actividades sustantivas del Instituto Alpha de Pachuca que permitan alcanzar
                        exitosamente los objetivos educacionales en los diferentes grados académicos, coadyuvando en la
                        profesionalización de nuestra planta académica y en la formación integral de nuestros estudiantes.
                    </p>

                </div>
                <div class="col-md-6 col-sm-6 my-3">
                    <h1>Dirección Académica</h1>
                    <h2 class="fuente-h2">Mtra. Lourdes Guadalupe Arévalo Baena</h2>
                    <ul>
                        <li>Correo electrónico: <a
                                href="mailto:institutoalphadepachuca@gmail.com">institutoalphadepachuca@gmail.com</a></li>
                        <li>Teléfono: 771 148 7698</li>
                    </ul>
                    <h2>Objetivo profesional</h2>
                    <p>
                        Coadyuvar de manera colaborativa, llevando a cabo los procesos de planeación, ejecución, control y
                        evaluación relacionados con los objetivos académicos de los niveles educativos básicos que se
                        ofertan en el Instituto Alpha de Pachuca, de conformidad y en apego a la normatividad establecida,
                        política y lineamientos que emanan de la Estructura Orgánica. Asimismo, procurar constantemente la
                        posibilidad de nuevas metas que conduzcan a la excelencia.
                    </p>

                </div>
            </div>
            <div class="row align-items-center">
                <div class="col-md-6 col-sm-6 my-3">
                    <h1>Dirección de Preescolar y Secundaria</h1>
                    <h2 class="fuente-h2">Profa. Maythé Ángeles Godínez</h2>
                    <ul>
                        <li>Correo electrónico: <a
                                href="mailto:maythe.a@institutoalphadepachuca.edu.mx">maythe.a@institutoalphadepachuca.edu.mx</a>
                        </li>
                        <li>Teléfono: 771 148 7698</li>
                    </ul>
                    <h2>Objetivo profesional</h2>
                    <p>
                        Consciente de las necesidades en la sociedad actual, reconozco con claridad que una de las
                        necesidades actuales es alcanzar los propósitos educativos. Para ello, contamos con docentes capaces
                        e interesados en la formación académica de las/los estudiantes, además de impulsar los valores que
                        contribuyan a formar una calidad humana.
                    </p>

                </div>
                <div class="col-md-6 col-sm-6 my-3">
                    <h1>Dirección Primaria</h1>
                    <h2 class="fuente-h2">Profa. Karla A. Flores Álvarez</h2>
                    <ul>
                        <li>Correo electrónico: <a
                                href="mailto:karlafloresalvarez111@gmail.com">karlafloresalvarez111@gmail.com</a></li>
                        <li>Teléfono: 771 148 7698</li>
                    </ul>
                    <h2>Objetivo profesional</h2>
                    <p>
                        Comprometida con una educación que logre impactar la vida de las niñas y niños, participando con los
                        docentes en el reconocimiento de las necesidades de las/los estudiantes, con la finalidad de
                        contribuir en el desarrollo de los procesos de aprendizaje, que fomente en las/los discentes el
                        respeto, el pensamiento crítico y la iniciativa de involucrarse positivamente en la sociedad.
                    </p>

                </div>
            </div>
            <div class="row align-items-center">
                <div class="col-md-6 col-sm-6 my-3">
                    <h1>Dirección Administrativa</h1>
                    <h2 class="fuente-h2">C. Elizabeth Aguirre Ezquivel</h2>
                    <ul>
                        <li>Correo electrónico: <!-- Puedes agregar la dirección de correo electrónico aquí --></li>
                        <li>Teléfono: 771 148 7698</li>
                    </ul>
                    <p>
                        Objetivo profesional: Coordinar todas las actividades administrativas con el fin de asegurar un
                        efectivo funcionamiento de la institución educativa, uso de los recursos materiales y financieros,
                        asegurar la competencia del personal y la realización de sus funciones; así como garantizar una
                        comunicación interna y externa eficiente, promoviendo una cultura de la calidad a todo el personal e
                        incentivar la mejora continúa.
                    </p>

                </div>
                <div class="col-md-6 col-sm-6 my-3">

                </div>
            </div>


        </div>
    </section>


    <Footer/>
</template>

<style>
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


.b-example-divider {
    width: 100%;
    height: 3rem;
    /* background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .15);
        border-width: 1px 0;
        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15); */
}</style>