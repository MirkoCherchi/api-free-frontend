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
        formatDateTime(dateTime) {
            const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
            return new Date(dateTime).toLocaleString('en-US', options);
        }

    },
    created() {
        this.getPosts();
    },
}
</script>

<template>
    <div class="container">
        <h2 class="text-center py-4">Posts</h2>
        <div class="row">
            <div class="col-md-4 mt-4" v-for="post in posts">
                <div class="card border-0 shadow-lg">
                    <img src="/public/absolutvision-82TpEld0_e4-unsplash.jpg" class="card-img-top rounded-top"
                        alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">{{ post.title }}</h5>
                        <p class="card-text text-center">{{ post.content }}</p>
                        <div class="text-center">
                            <span class="badge bg-primary">{{ post.category.name }}</span>
                            <div class="mt-2">
                                <span v-for="(tag) in post.tags" class="badge bg-secondary me-1">#{{
                tag.name }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer bg-transparent border-0">
                        <small class="text-muted">Posted on {{ formatDateTime(post.createAt) }}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/variables' as *;

.card {
    transition: transform 0.3s;
}

.card:hover {
    transform: scale(1.05);
}
</style>
