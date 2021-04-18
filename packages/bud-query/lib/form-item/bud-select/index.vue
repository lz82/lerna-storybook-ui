<template>
  <el-form-item :label="formItem.label" prop="formItem.name" label-width="150px"
    ><!--:label-width="this.formItem.width"-->
    <el-select
      v-model="inputData"
      :placeholder="formItem.placeholder"
      clearable
      filterable
      :multiple="formItem.isMulti"
    >
      <el-option
        v-for="item in formItem.options"
        :key="item.value"
        :label="item.text || item.name"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  name: "BudSelect",

  data() {
    return {
      inputData: [],
    };
  },

  props: {
    formItem: {},
    data: {
      type: String,
      default: "",
    },
  },

  watch: {
    inputData(val) {
      this.$emit("update:data", val);
    },
    data(val) {
      if (val === null) {
        if (this.inputData instanceof Array) {
          this.inputData = [];
        } else {
          this.inputData = "";
        }
      }
    },
  },
};
</script>

<style></style>
