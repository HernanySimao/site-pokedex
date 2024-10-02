import AOS from "aos";
import { onMounted } from "vue";
import { useGetNumber } from "../../../composables/useGetNumber";
import { useGetTypeColor } from "../../../composables/useGetTypeColor";
import { useI18n } from "vue-i18n";
export default await (async () => {
    const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
    const { locale } = useI18n();
    const props = defineProps({
        data: {
            type: Object,
            required: true,
        },
        evaluation: {
            type: Object,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
    });
    const { getTypeColor } = useGetTypeColor();
    const image = import.meta.env.VITE_URL_ASSET;
    const getEvolutions = (evolutionChain, evolutions = []) => {
        evolutions.push({
            name: evolutionChain?.species?.name,
            url: evolutionChain?.species?.url,
        });
        if (evolutionChain?.evolves_to && evolutionChain?.evolves_to.length > 0) {
            evolutionChain.evolves_to.forEach((evolution) => {
                getEvolutions(evolution, evolutions);
            });
        }
        return evolutions;
    };
    onMounted(() => {
        AOS.refresh();
    });
    const __VLS_fnComponent = (await import('vue')).defineComponent({
        props: {
            data: {
                type: Object,
                required: true,
            },
            evaluation: {
                type: Object,
                required: true,
            },
            id: {
                type: String,
                required: true,
            },
        },
    });
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
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container") }, "data-aos": ("fade-left"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card") }, });
        if (__VLS_ctx.data) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-body text-center") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-4") }, "data-aos": ("fade-left"), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("pokemon") }, src: ((__VLS_ctx.image + __VLS_ctx.id + '.svg')), alt: ((__VLS_ctx.id)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (__VLS_ctx.id);
            __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
            (__VLS_ctx.$t("home.details.statistics"));
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ "data-aos": ("fade-right"), ...{ class: ("d-flex justify-content-center flex-wrap text-center mb-5") }, });
            for (const [status, i] of __VLS_getVForSourceType((__VLS_ctx.data?.stats))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stats col-md-4") }, key: ((i)), });
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-uppercase") }, });
                (status?.stat?.name);
                (status?.base_stat);
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
            (__VLS_ctx.$t("home.details.types"));
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex justify-content-center flex-wrap mb-5") }, });
            for (const [type, i] of __VLS_getVForSourceType((__VLS_ctx.data?.types))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ "data-aos": ("fade-left"), ...{ class: ("types text-white col-md-3") }, key: ((i)), ...{ style: (({ 'background-color': __VLS_ctx.getTypeColor(type?.type?.name) })) }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-capitalize") }, });
                (type?.type?.name);
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("mb-4") }, });
            (__VLS_ctx.$t("home.details.evolutions"));
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex justify-content-center flex-wrap") }, });
            for (const [evolution, i] of __VLS_getVForSourceType((__VLS_ctx.getEvolutions(__VLS_ctx.evaluation?.chain)))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ "data-aos": ("fade-left"), ...{ class: ("col-md-3 align-items-center") }, key: ((i)), });
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("evolution") }, src: ((__VLS_ctx.image + __VLS_ctx.useGetNumber(evolution?.url) + '.svg')), alt: ((evolution?.url)), });
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-capitalize") }, });
                (evolution?.name);
            }
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center p-5 mt-5 mb-5") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (__VLS_ctx.$t("home.details.selected"));
        }
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['card'];
        __VLS_styleScopedClasses['card-body'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['mb-4'];
        __VLS_styleScopedClasses['pokemon'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['justify-content-center'];
        __VLS_styleScopedClasses['flex-wrap'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['mb-5'];
        __VLS_styleScopedClasses['stats'];
        __VLS_styleScopedClasses['col-md-4'];
        __VLS_styleScopedClasses['text-uppercase'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['justify-content-center'];
        __VLS_styleScopedClasses['flex-wrap'];
        __VLS_styleScopedClasses['mb-5'];
        __VLS_styleScopedClasses['types'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['col-md-3'];
        __VLS_styleScopedClasses['text-capitalize'];
        __VLS_styleScopedClasses['mb-4'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['justify-content-center'];
        __VLS_styleScopedClasses['flex-wrap'];
        __VLS_styleScopedClasses['col-md-3'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['evolution'];
        __VLS_styleScopedClasses['text-capitalize'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['p-5'];
        __VLS_styleScopedClasses['mt-5'];
        __VLS_styleScopedClasses['mb-5'];
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
                $props: __VLS_makeOptional(props),
                ...props,
                useGetNumber: useGetNumber,
                getTypeColor: getTypeColor,
                image: image,
                getEvolutions: getEvolutions,
            };
        },
        name: "HomeDetails",
    });
    return (await import('vue')).defineComponent({
        setup() {
            return {
                $props: __VLS_makeOptional(props),
                ...props,
            };
        },
        name: "HomeDetails",
    });
})();
;
