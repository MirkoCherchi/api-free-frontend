<script>
// IMPORTS
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';


// /IMPORTS

export default {
    props: [],
    components: { Header, Main, Footer },
    data() {
        return {

        }
    },
    methods: {},
    mounted() { },
}
</script>

<template>
    <Header />
    <Main />
    <Footer />
</template>

<style lang="scss" scoped></style>
