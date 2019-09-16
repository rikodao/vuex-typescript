<template>
  <div>
    <p>{{ propMessage }}</p>
    <p :class="classesCount">{{ count }}</p>
    <button @click="subAsync(10)">-10</button>
    <button @click="decrement()">-1</button>
    <button @click="increment()">+1</button>
    <button @click="add()">+10</button>
    <div v-if="isPositive">正の値</div>
    <div v-if="isNegative">負の値</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import store from "@/store";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
@Component({
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["isPositive", "isNegative"])
  },
  methods: {
    ...mapMutations(["increment", "decrement"]),
    ...mapActions(["addAsync", "subAsync"])
  }
})
export default class Counter extends Vue {
  @Prop(String) readonly propMessage: string | undefined;
  public count!: number;

  get classesCount() {
    return {
      blue: this.isPositive,
      red: this.isNegative
    };
  }

  add() {
    this.addAsync(10);
  }

  sub() {
    this.subAsync(10);
  }
}
</script>

<style lang="scss" scoped>
.red {
  color: red;
}
.blue {
  color: blue;
}
</style>
