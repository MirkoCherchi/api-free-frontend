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
    <div class="container-fluid header-color fixed-header">
        <div class=" d-flex justify-content-between align-items-center p-4 px-3">
            <div>#MirkoCherchi</div>
            <div>
                <ul class="d-flex gap-4 list-unstyled p-0 m-0">
                    <li><router-link class="link-nav" :to="{ name: 'allPosts' }">Posts</router-link></li>
                    <li><router-link class="link-nav" :to="{ name: 'addPost' }">Add Post</router-link></li>
                    <li><router-link class="link-nav" :to="{ name: 'home' }">Home</router-link></li>
                </ul>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../scss/partials/variables' as *;

.header-color {
    background-color: #100B00;
    color: #85CB33;
    font-size: 18px;

    .link-nav {
        color: #85CB33;
        all: unset;
        cursor: pointer;
    }
}

.fixed-header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
}
</style>
