<template>
  <el-form-item
    :label="formItem.label"
    prop="formItem.name"
    label-width="130px"
  >
    <el-date-picker
      v-model="inputData"
      :type="componentType"
      :picker-options="pickerOptions"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right"
      :value-format="dateFormat"
    >
    </el-date-picker>
  </el-form-item>
</template>

<script>
export default {
  name: "BudDate",

  data() {
    return {
      inputData: "",
      pickerOptions: this.$DatepickerOptionLast,
    };
  },

  mounted() {
    this.$nextTick(() => {});
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

  computed: {
    dateFormat() {
      if (this.formItem.type === "daterange") {
        return "yyyy-MM-dd";
      } else {
        return "yyyy-MM-dd HH:mm:ss";
      }
    },
    componentType() {
      return this.formItem.type;
    },
  },
};
</script>

<style></style>
