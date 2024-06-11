<script>
// IMPORTS



// /IMPORTS

export default {
    props: [],
    components: {},
    data() {
        return {

        }
    },
    methods: {},
    mounted() { },
}
</script>

<template>
    <div class="home-container">
        <div class="welcome-section">
            <h1 class="text-center pt-5">Benvenuti nel mio Blog!</h1>
            <p class="lead text-center mt-3">Scopri contenuti interessanti su vari argomenti.</p>
            <div class="text-center mt-4">
                <router-link to="/posts" class="btn btn-primary btn-lg mx-2">Visualizza i Post</router-link>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../../scss/partials/variables' as *;

.home-container {
    background: url('https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center center;
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #EFFFC8;
}

.welcome-section {
    background-color: rgba(16, 11, 0, 0.7);
    padding: 50px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

h1 {
    color: #85CB33;
    font-size: 3rem;
    font-weight: bold;
    text-shadow: 2px 2px #3B341F;
}

p.lead {
    font-size: 1.5rem;
    color: #EFFFC8;
}

.btn-primary {
    background-color: #85CB33;
    border: none;

    &:hover {
        background-color: darken(#85CB33, 10%);
    }
}

.btn-secondary {
    background-color: #A5CBC3;
    border: none;
    color: #100B00;

    &:hover {
        background-color: darken(#A5CBC3, 10%);
    }
}

.text-center {
    color: #EFFFC8;
}
</style>
