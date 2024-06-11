<script>
import { store } from '../../store'
import axios from "axios"

export default {
    data() {
        return {
            store,
            newPostData: {
                title: '',
                content: '',
                img: '',
                categoryId: '',
                tags: [],
                published: true
            },
            categories: [],
            tags: [],
            errorMessage: ''
        }
    },
    methods: {
        async getCategoriesAndTags() {
            try {
                const categoriesResponse = await axios.get(this.store.allCategories);
                this.categories = categoriesResponse.data;

                const tagsResponse = await axios.get(this.store.allTags);
                this.tags = tagsResponse.data;
            } catch (error) {
                console.error('Error fetching categories and tags:', error);
            }
        },
        async createPost() {
            try {
                const response = await axios.post(this.store.allPostApi, this.newPostData);
                console.log('Post created successfully:', response.data);
                this.$router.push({ name: 'allPosts' });
            } catch (error) {
                console.error('Error creating post:', error);
                this.errorMessage = 'Errore durante la creazione del post.';
            }
        }
    },
    mounted() {
        this.getCategoriesAndTags();
    }
}
</script>


<template>
    <div class="container my-4">
        <h2 class="text-center py-4">Crea Post</h2>
        <form @submit.prevent="createPost" class="create-post-form">
            <div class="mb-3">
                <label for="title" class="form-label">Titolo</label>
                <input type="text" class="form-control" id="title" v-model="newPostData.title" required>
            </div>
            <div class="mb-3">
                <label for="content" class="form-label">Contenuto</label>
                <textarea class="form-control" id="content" v-model="newPostData.content" required></textarea>
            </div>
            <div class="mb-3">
                <label for="img" class="form-label">Immagine</label>
                <input type="text" class="form-control" id="img" v-model="newPostData.img" required>
            </div>
            <div class="mb-3">
                <label for="category" class="form-label">Categoria</label>
                <select class="form-control" id="category" v-model="newPostData.categoryId" required>
                    <option value="" disabled>Seleziona una categoria</option>
                    <option v-for="category in categories" :value="category.id">
                        {{ category.name }}
                    </option>
                </select>
            </div>
            <div class="mb-3">
                <label for="tags" class="form-label">Tag</label>
                <div>
                    <div v-for="tag in tags" class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" :id="'tag-' + tag.id" :value="tag.id"
                            v-model="newPostData.tags">
                        <label class="form-check-label" :for="'tag-' + tag.id">{{ tag.name }}</label>
                    </div>
                </div>
            </div>
            <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id="published" v-model="newPostData.published">
                <label class="form-check-label" for="published">
                    Pubblica
                </label>
            </div>
            <button type="submit" class="btn btn-primary">Crea Post</button>
            <p class="text-danger">{{ errorMessage }}</p>
        </form>
    </div>
</template>


<style lang="scss" scoped>
$primary-color: #85CB33;
$secondary-color: #EFFFC8;
$dark-color: #100B00;
$accent-color: #A5CBC3;
$text-color: #3B341F;

.container {
    max-width: 800px;
    margin: 0 auto;
    background-color: $secondary-color;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
    color: $dark-color;
}

.form-label {
    color: $text-color;
}

.form-control {
    border: 2px solid $primary-color;

    &:focus {
        border-color: $accent-color;
        box-shadow: 0 0 5px $accent-color;
    }
}

.form-check-input:checked {
    background-color: $primary-color;
    border-color: $primary-color;
}

.btn-primary {
    background-color: $primary-color;
    border-color: $primary-color;

    &:hover {
        background-color: darken($primary-color, 10%);
        border-color: darken($primary-color, 10%);
    }
}

.create-post-form {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
