<script setup>
import Slider from '../components/core/Slider.vue'
import SearchBar from '../components/core/searchbar.vue'
import Footer from '../components/core/footer.vue'

import History from '../components/about/History.vue'
import MisionVision from '../components/about/MisionVision.vue'
import Text from '../components/about/Text.vue'

</script>

<template>
    <Slider />
    <SearchBar />

    <History />
    <MisionVision />
    <Text />
    
    <!-- <div class="b-example-divider"></div>
    <Map /> -->
    <Footer />
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
}
</style>