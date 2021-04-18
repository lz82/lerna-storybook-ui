<template>
  <el-form-item
    :label="formItem.label"
    prop="formItem.name"
    label-width="150px"
  >
    <el-date-picker
      v-model="inputData"
      type="date"
      value-format="yyyy-MM-dd"
      style="width: 250px"
    >
    </el-date-picker>
  </el-form-item>
</template>

<script>
export default {
  name: "BudSingleDate",

  data() {
    return {
      inputData: this.data || "",
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
        this.inputData = null;
      }
    },
  },
};
</script>

<style></style>
