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
    <div class="content">
        <div class="container my-4">
            <h2 class="text-center py-3">Crea Post</h2>
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
                    <input type="file" class="form-control" id="img" @change="onFileChange" accept="image/*" required>
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
    </div>
</template>


<style lang="scss" scoped>
.content {
    margin-top: 100px;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    background-color: #EFFFC8;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

}

h2 {
    color: #100B00;
}

.form-label {
    color: #3B341F;
}

.form-control {
    border: 2px solid #85CB33;

    &:focus {
        border-color: #A5CBC3;
        box-shadow: 0 0 5px #A5CBC3;
    }
}

.form-check-input:checked {
    background-color: #85CB33;
    border-color: #85CB33;
}

.btn-primary {
    background-color: #85CB33;
    border-color: #85CB33;

    &:hover {
        background-color: darken(#85CB33, 10%);
        border-color: darken(#85CB33, 10%);
    }
}

.create-post-form {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
