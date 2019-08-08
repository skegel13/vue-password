<script>
import zxcvbn from "zxcvbn";
import VuePassword from "./VuePassword.vue";

export default {
  name: "VuePasswordAuto",
  functional: true,
  components: { VuePassword },
  render(h, context) {
    const data = context.data;
    const inputs = Array.isArray(context.props.userInputs)
      ? context.props.userInputs
      : [];
    const strength = zxcvbn(data.attrs.value, inputs) || 0;

    return h(VuePassword, {
      props: {
        ...data.attrs,
        strength: strength.score
      },
			on: context.listeners,
			scopedSlots: context.scopedSlots,
    });
  }
};
</script>
