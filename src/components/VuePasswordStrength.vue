<script>
import zxcvbn from "zxcvbn";
import VuePassword from "./VuePassword.vue";

export default {
    functional: true,
    components: { VuePassword },
    render(h, context) {
        const data = context.data;
        const strength = zxcvbn(data.attrs.value) || 0;

        return h(VuePassword, {
            props: Object.assign({}, data.attrs, {
                strength: strength.score,
            }),
            on: context.listeners,
        });
    },
};
</script>
