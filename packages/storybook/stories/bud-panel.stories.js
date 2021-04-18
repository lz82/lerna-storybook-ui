import BudPanel from "bud-panel";

export default {
  title: "Example/Bud-Panel",
  component: BudPanel,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BudPanel },
  template: "<bud-panel />",
});

export const Normal = Template.bind({});
