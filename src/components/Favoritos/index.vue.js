import { ref, onMounted } from "vue";
import Card from "../Card.vue";
import AOS from "aos";
import { useI18n } from "vue-i18n";
export default await (async () => {
    const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
    const { locale } = useI18n();
    const favorites = ref([]);
    const showConfirmation = ref(false);
    const countdown = ref(5);
    let timeoutId;
    let intervalId;
    const loadFavorites = () => {
        const savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
        favorites.value = savedItems;
    };
    onMounted(() => {
        loadFavorites();
        AOS.refresh();
    });
    const clearSavedItems = () => {
        showConfirmation.value = true;
        countdown.value = 5;
        timeoutId = setTimeout(() => {
            localStorage.removeItem("savedItems");
            favorites.value = [];
            showConfirmation.value = false;
            clearInterval(intervalId);
        }, 5000);
        intervalId = setInterval(() => {
            countdown.value -= 1;
            if (countdown.value <= 0) {
                clearInterval(intervalId);
            }
        }, 1000);
    };
    const cancelClear = () => {
        clearTimeout(timeoutId);
        clearInterval(intervalId);
        showConfirmation.value = false;
    };
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
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container mt-5") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
        (__VLS_ctx.$t("favorite.label"));
        if (__VLS_ctx.favorites.length && !__VLS_ctx.showConfirmation) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            (__VLS_ctx.$t("favorite.description"));
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ onClick: (__VLS_ctx.clearSavedItems) }, ...{ class: ("primary-text-color dark-color cursor-pointer") }, });
            (__VLS_ctx.$t("favorite.click"));
        }
        if (__VLS_ctx.showConfirmation) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            (__VLS_ctx.$t("favorite.in"));
            __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({ ...{ class: ("primary-text-color") }, });
            (__VLS_ctx.countdown);
            (__VLS_ctx.$t("favorite.alert"));
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ onClick: (__VLS_ctx.cancelClear) }, ...{ class: ("primary-text-color dark-color cursor-pointer") }, });
            (__VLS_ctx.$t("favorite.here"));
        }
        if (__VLS_ctx.favorites.length) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ "data-aos": ("fade-up"), ...{ class: ("mt-5 mt-md-4") }, });
            // @ts-ignore
            [Card, Card,];
            // @ts-ignore
            const __VLS_0 = __VLS_asFunctionalComponent(Card, new Card({ data: ((__VLS_ctx.favorites)), }));
            const __VLS_1 = __VLS_0({ data: ((__VLS_ctx.favorites)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-5 p-5 text-center") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (__VLS_ctx.$t("favorite.noItem"));
        }
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['mt-5'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['primary-text-color'];
        __VLS_styleScopedClasses['dark-color'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['primary-text-color'];
        __VLS_styleScopedClasses['primary-text-color'];
        __VLS_styleScopedClasses['dark-color'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['mt-5'];
        __VLS_styleScopedClasses['mt-md-4'];
        __VLS_styleScopedClasses['mt-5'];
        __VLS_styleScopedClasses['p-5'];
        __VLS_styleScopedClasses['text-center'];
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
                Card: Card,
                favorites: favorites,
                showConfirmation: showConfirmation,
                countdown: countdown,
                clearSavedItems: clearSavedItems,
                cancelClear: cancelClear,
            };
        },
        name: "Favorite",
    });
    return (await import('vue')).defineComponent({
        setup() {
            return {};
        },
        name: "Favorite",
    });
})();
;
