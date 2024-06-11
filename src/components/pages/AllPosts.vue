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
    <div class="content">
        <div class="container my-4">
            <h2 class="text-center py-2">Posts</h2>
            <div class="row">
                <div class="col-md-4 mt-4" v-for="post in posts">
                    <div class="card border-0 shadow-lg">
                        <img :src="post.img" class="card-img-top rounded-top" :alt="post.title">
                        <div class="card-body">
                            <h5 class="card-title text-center">{{ post.title }}</h5>
                            <p class="card-text text-center">{{ post.content }}</p>
                            <div class="text-center">
                                <span class="badge bg-category">{{ post.category.name }}</span>
                                <div class="mt-2">
                                    <span v-for="tag in post.tags" :key="tag.id" class="badge bg-tag me-1">#{{
                    tag.name }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer bg-transparent border-0">
                            <small class="text-data">{{ formatDateTime(post.createAt) }}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../../scss/partials/variables' as *;

.content {
    margin-top: 100px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

h2 {
    color: #100B00;
}

.card {
    transition: transform 0.3s, box-shadow 0.3s;
    background-color: #EFFFC8;
    border-radius: 10px;
    overflow: hidden;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
}

.card-img-top {
    height: 200px;
    object-fit: cover;
}

.card-title {
    color: #100B00;
    font-size: 1.25rem;
}

.card-text {
    color: #3B341F;
}

.badge {
    font-size: 0.75rem;
}

.bg-category {
    background-color: #85CB33;
    color: white;
}

.bg-tag {
    background-color: #A5CBC3;
    color: #100B00;
}

.card-footer {
    background-color: #EFFFC8;
}

.text-data {
    color: #3B341F;
    font-size: 11px;
}

.container {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
