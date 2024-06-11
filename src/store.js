import { reactive } from "vue";

export const store = reactive({
  allPostApi: "http://localhost:3000/posts",
  allTags: "http://localhost:3000/tags",
  allCategories: "http://localhost:3000/categories",
});
