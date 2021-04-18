<template>
  <el-form-item
    :label="formItem.label"
    prop="formItem.name"
    label-width="150px"
  >
    <el-input
      v-model="inputData"
      :placeholder="formItem.placeholder"
      style="width: 193px"
      clearable
    ></el-input
    ><!--width由120改至193-->
  </el-form-item>
</template>

<script>
export default {
  name: "BudInput",

  data() {
    return {
      inputData: "",
    };
  },

  props: {
    formItem: {},
    data: {},
  },

  watch: {
    inputData(val) {
      this.$emit("update:data", val);
    },
    data(val) {
      if (val === null) {
        this.inputData = null;
      }
    },
  },
};
</script>

<style></style>
