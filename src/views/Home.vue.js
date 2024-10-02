import HomeLayout from "../components/Home/Layout.vue";
import HomeDetails from "../components/Home/Details/index.vue";
import HomeDetailsMobile from "../components/Home/Details/Mobile.vue";
import { useIdStore } from "../stores/useIdStore";
import { useCustomFetch } from "../composables/useCustomFetch";
import { useGetNumber } from "../composables/useGetNumber";
import { ref, watch } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const idStore = useIdStore();
const pokemonData = ref([]);
const pokemon = ref(null);
const pokemonEvaluation = ref(null);
const evaluation = ref(null);
const lang = localStorage.getItem("language") || "pt";
const get = async () => {
    try {
        const data = await useCustomFetch(`pokemon/${idStore?.selectedId}?language=${lang}`);
        pokemon.value = data;
    }
    catch (error) {
        console.error(error);
    }
};
const getEvaluation = async () => {
    try {
        const data = await useCustomFetch(`pokemon-species/${idStore?.selectedId}?language=${lang}`);
        pokemonEvaluation.value = data?.evolution_chain.url;
        if (pokemonEvaluation.value) {
            evaluation.value = await useCustomFetch(`evolution-chain/${useGetNumber(pokemonEvaluation.value)}?language=${lang}`);
        }
    }
    catch (error) {
        console.error(error);
    }
};
watch(() => idStore?.selectedId, () => {
    get();
    getEvaluation();
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
    [HomeLayout, HomeLayout,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(HomeLayout, new HomeLayout({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    // @ts-ignore
    [HomeDetailsMobile,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(HomeDetailsMobile, new HomeDetailsMobile({ ...{ class: ("d-inline-block d-md-none") }, data: ((__VLS_ctx.pokemon)), id: ((__VLS_ctx.idStore?.selectedId)), evaluation: ((__VLS_ctx.evaluation)), }));
    const __VLS_6 = __VLS_5({ ...{ class: ("d-inline-block d-md-none") }, data: ((__VLS_ctx.pokemon)), id: ((__VLS_ctx.idStore?.selectedId)), evaluation: ((__VLS_ctx.evaluation)), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    // @ts-ignore
    [HomeDetails,];
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(HomeDetails, new HomeDetails({ ...{ class: ("d-none d-md-inline") }, data: ((__VLS_ctx.pokemon)), id: ((__VLS_ctx.idStore?.selectedId)), evaluation: ((__VLS_ctx.evaluation)), }));
    const __VLS_11 = __VLS_10({ ...{ class: ("d-none d-md-inline") }, data: ((__VLS_ctx.pokemon)), id: ((__VLS_ctx.idStore?.selectedId)), evaluation: ((__VLS_ctx.evaluation)), }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    __VLS_nonNullable(__VLS_4.slots).default;
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(HomeLayout, __VLS_1);
    __VLS_styleScopedClasses['d-inline-block'];
    __VLS_styleScopedClasses['d-md-none'];
    __VLS_styleScopedClasses['d-none'];
    __VLS_styleScopedClasses['d-md-inline'];
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
            HomeLayout: HomeLayout,
            HomeDetails: HomeDetails,
            HomeDetailsMobile: HomeDetailsMobile,
            idStore: idStore,
            pokemon: pokemon,
            evaluation: evaluation,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
