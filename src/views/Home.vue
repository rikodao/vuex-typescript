<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Counter propMessage="props massage"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Counter from "@/components/Counter.vue";

@Component({
  components: {
    Counter
  }
})
export default class Home extends Vue {}
</script>
