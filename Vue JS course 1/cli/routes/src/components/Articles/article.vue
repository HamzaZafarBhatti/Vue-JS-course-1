<template>
<div v-if="Object.keys(article).length !== 0">
    <div>From Props: {{ myProp }}</div>
    <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
        <div class="col-md-6 px-0">
            <h1 class="display-4 fst-italic">
                {{ article.title }}
            </h1>
            <p class="lead my-3">
                {{ article.excerpt }}
            </p>
        </div>
    </div>

    <div class="row g-5">
        <div class="col-md-8">
            <h3 class="pb-4 mb-4 fst-italic border-bottom">
                {{ article.title }}
            </h3>

            <article class="blog-post">
                <p class="blog-post-meta">
                    {{ article.date }} by <strong>{{ article.author }}</strong>
                </p>
                <div v-html="article.content"></div>
            </article>
        </div>

        <div class="col-md-4">
            <div class="position-sticky" style="top: 2rem">
                <div class="p-4 mb-3 bg-light rounded">
                    <h4 class="fst-italic">About</h4>
                    <p class="mb-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                        blanditiis praesentium voluptatum deleniti atque corrupti quos
                        dolores et.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    props: ['myProp'],
    data() {
        return {
            article: {},
        };
    },
    //mounted only run once when the component is mounted, thats why we used watcher so when route changes, we load new data!
    mounted() {
        console.log(this.$route.params.id);
        const articleId = this.$route.params.id;
        this.getArticle(articleId)
    },
    watch: {
      $route(to) {
        this.getArticle(to.params.id)
      }
    },
    methods: {
      getArticle(articleId) {
        axios
            .get(`http://localhost:3004/articles/${articleId}`)
            .then((response) => {
                this.article = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
      }
    }
};
</script>
