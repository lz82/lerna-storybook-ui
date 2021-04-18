const Schema = class {
  constructor(
    name,
    type,
    label,
    placeholder = "",
    options = null,
    isMulti = false
  ) {
    this.name = name;
    this.type = type;
    this.label = label;
    this.placeholder = placeholder;
    this.options = options;
    this.isMulti = isMulti;
  }
};

export default Schema;

// export default {
//   install(Vue) {
//     Object.defineProperty(Vue.prototype, "$Schema", { value: Schema });
//   },
// };
