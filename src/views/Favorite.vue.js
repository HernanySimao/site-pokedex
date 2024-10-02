import { ref, onMounted } from "vue";
import Favorito from "../components/Favoritos/index.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const data = ref([]);
onMounted(() => {
    const items = localStorage.getItem("savedItems");
    if (items) {
        data.value = JSON.parse(items);
    }
});
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    [Favorito, Favorito,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Favorito, new Favorito({ data: ((__VLS_ctx.data)), }));
    const __VLS_1 = __VLS_0({ data: ((__VLS_ctx.data)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Favorito: Favorito,
            data: data,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
