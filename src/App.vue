<template>
  <div class="body">
    <Footer />
    <router-view />
    <Header />
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

@Options({
  components: {
    Footer,
    Header,
  },
})
export default class App extends Vue {}
</script>

<style scoped>
.body {
  margin-top: 4em;
  margin-bottom: 4em;
}
</style>
