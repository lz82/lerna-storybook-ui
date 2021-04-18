<template>
  <div class="container">
    <el-card ref="queryForm">
      <div slot="header" class="header clearfix">
        <span style="font-weight: normal">
          <i style="margin-right: 5px" class="el-icon-search"></i>筛选查询</span
        >
        <i
          :class="opIcon"
          style="float: right; padding: 10px 10px 0 0"
          @click="onIconClick"
        ></i>
      </div>
      <transition name="fade">
        <div class="query-form" v-show="queryType">
          <el-form
            :inline="true"
            ref="queryForm"
            label-width="100px"
            label-position="right"
          >
            <component
              :is="com.componentType"
              :formItem="com.formItem"
              :data.sync="queryModel[com.formItem.name]"
              v-for="(com, index) in components"
              :key="index"
            >
            </component>
            <template><slot name="query"></slot></template>
            <el-form-item style="margin-left: 10px">
              <el-button type="primary" @click="queryForm">查询</el-button>
              <el-button v-show="showAdd" type="primary" @click="addForm"
                >新增</el-button
              >
              <el-button type="warning" @click="resetForm" v-show="showReset"
                >重置</el-button
              >
              <div style="display: inline-block; margin-left: 10px">
                <slot name="button"></slot>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </transition>
    </el-card>
  </div>
</template>

<script>
import YgInput from "../form-item/yg-input";
import YgSelect from "../form-item/yg-select";
import YgDate from "../form-item/yg-date";
import YgSingleDate from "../form-item/yg-single-date";

export default {
  name: "QueryForm",

  components: {
    YgInput,
    YgSelect,
    YgDate,
    YgSingleDate,
  },

  data() {
    return {
      components: [],
      queryType: true,
    };
  },

  props: {
    querySchema: {},
    queryModel: {},
    model: {},
    showAdd: {
      type: Boolean,
      default: true,
    },
    showReset: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    _initComponent() {
      this.querySchema.forEach((schema) => {
        // input
        if (schema.type && schema.type === "input") {
          this.components.push({
            componentType: "YgInput",
            formItem: schema,
          });
        }

        // select
        if (schema.type && schema.type === "select") {
          this.components.push({
            componentType: "YgSelect",
            formItem: schema,
          });
        }

        // datepicker
        if (
          schema.type &&
          (schema.type === "daterange" || schema.type === "datetimerange")
        ) {
          this.components.push({
            componentType: "YgDate",
            formItem: schema,
          });
        }

        // single date
        if (schema.type && schema.type === "singledate") {
          this.components.push({
            componentType: "YgSingleDate",
            formItem: schema,
          });
        }
      });
    },

    resetForm() {
      Object.keys(this.queryModel).forEach((key) => {
        // 特殊处理
        // pageindex和pagesize不能设为null
        if (key === "pageIndex") {
          this.queryModel[key] = 1;
        } else if (key === "pageSize") {
          this.queryModel[key] = 20;
        } else {
          this.queryModel[key] = null;
        }
      });
    },

    queryForm() {
      this.$emit("queryclick");
    },

    addForm() {
      this.$emit("addclick");
    },

    onIconClick() {
      this.queryType = !this.queryType;
      const dom = this.$refs.queryForm.$el.getElementsByClassName(
        "el-card__body"
      )[0];
      if (!this.queryType) {
        dom.style.display = "none";
      } else {
        dom.style.display = "";
      }
    },
  },

  mounted() {
    this.$nextTick(() => {
      this._initComponent();
    });
  },

  computed: {
    opIcon() {
      if (this.queryType) {
        return "el-icon-arrow-up";
      } else {
        return "el-icon-arrow-down";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  margin: 10px;
  /deep/ .el-card__header {
    background-color: #03b8df;
    height: 55px;
    font-size: 18px;
    line-height: 55px;
    padding: 0 0 0 24px;
    color: #fff;
    font-weight: normal;
  }
}
</style>
