<template>
  <div class="main" :class="'theme_' + $root.theme">
    <Header></Header>

    <div class="container">
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Test",
  components: {
    Header,
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">

</style>
