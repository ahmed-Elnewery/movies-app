<script>
import Input from "./UI/Input.vue";
export default {
  name: "TestComp",
  components: { Input },
  data() {
    return {
      selected: "",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
      ],
      toggle: "yes",
      msg: "",
    };
  },
  methods: {
    increase() {
      this.counter++;
    },
  },
};
</script>
<template>
  <div>
    <select v-model="selected">
      <option
        v-for="option in options"
        v-bind:value="option.value"
        :key="option.value"
      >
        {{ option.text }}
      </option>
    </select>
    <span>Selected: {{ selected }}</span>
    <br />
    <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
    <span>{{ toggle }}</span>
    <br />
    <input v-model.trim="msg" />
    <span>{{ msg }}</span>
    <div>
      <Input />
    </div>
  </div>
</template>

<style></style>
