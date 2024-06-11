<script>
// IMPORTS
import { store } from '../../store'
import axios from "axios"
// /IMPORTS

export default {
    props: [],
    components: {},
    data() {
        return {
            store,
            posts: [],
        }
    },
    methods: {
        getPosts() {
            axios.get(this.store.allPostApi).then((response) => {
                console.log(response.data)
                this.posts = response.data.data;
            }).catch((error) => {
                console.error(error);
            });

        },
    },
    mounted() {
        this.getPosts();
    },
}
</script>

<template>
    <h2>Crea Post</h2>
    <ul>
        <li v-for="post in posts">{{ post.title }}</li>
    </ul>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/variables' as *;
</style>
