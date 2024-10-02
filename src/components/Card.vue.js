import { ref } from "vue";
import { useGetNumber } from "../composables/useGetNumber";
import { useIdStore } from "../stores/useIdStore";
import { useModalStore } from "../stores/modalStore";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// Stores
const modalStore = useModalStore();
const idStore = useIdStore();
const savedItems = ref(JSON.parse(localStorage.getItem("savedItems") || "[]"));
const isItemSaved = (url) => {
    return savedItems.value.some((savedItem) => savedItem.url === url);
};
const sendId = (item) => {
    modalStore.openModal();
    idStore.setId(useGetNumber(item?.url));
};
const saveToLocalStorage = (item) => {
    const existingItem = savedItems.value.find((savedItem) => savedItem.url === item.url);
    if (!existingItem) {
        savedItems.value.push({
            id: useGetNumber(item.url), // Adiciona o ID ao salvar
            name: item.name,
            url: item.url,
        });
    }
    else {
        savedItems.value = savedItems.value.filter((savedItem) => savedItem.url !== item.url);
    }
    localStorage.setItem("savedItems", JSON.stringify(savedItems.value));
};
const image = import.meta.env.VITE_URL_ASSET;
const __VLS_props = defineProps({
    data: {
        type: Object,
        required: true,
        default: () => [],
    },
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        data: {
            type: Object,
            required: true,
            default: () => [],
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row") }, });
    for (const [item, i] of __VLS_getVForSourceType((__VLS_ctx.data))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((i)), ...{ class: ("col-md-4 mb-5 pt-4 pt-md-0 mt-md-5 d-flex align-items-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.sendId({ url: item?.url, name: item?.name });
                } }, ...{ class: ("card w-100 cursor-pointer d-flex flex-column align-items-center position-relative") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-body d-flex flex-column align-items-center justify-content-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex justify-content-center mb-3") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("poke-image") }, src: ((__VLS_ctx.image + __VLS_ctx.useGetNumber(item?.url) + '.svg')), alt: ("image"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center mt-5") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.useGetNumber(item?.url));
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-capitalize") }, });
        (item?.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.saveToLocalStorage({ name: item?.name, url: item?.url });
                } }, ...{ class: ("heart") }, src: ((__VLS_ctx.isItemSaved(item?.url)
                ? '/image/coracao-active.png'
                : '/image/coracao.png')), alt: (""), });
    }
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['row'];
    __VLS_styleScopedClasses['col-md-4'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['pt-4'];
    __VLS_styleScopedClasses['pt-md-0'];
    __VLS_styleScopedClasses['mt-md-5'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['align-items-center'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['w-100'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['flex-column'];
    __VLS_styleScopedClasses['align-items-center'];
    __VLS_styleScopedClasses['position-relative'];
    __VLS_styleScopedClasses['card-body'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['flex-column'];
    __VLS_styleScopedClasses['align-items-center'];
    __VLS_styleScopedClasses['justify-content-center'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['justify-content-center'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['poke-image'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mt-5'];
    __VLS_styleScopedClasses['text-capitalize'];
    __VLS_styleScopedClasses['heart'];
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
            useGetNumber: useGetNumber,
            isItemSaved: isItemSaved,
            sendId: sendId,
            saveToLocalStorage: saveToLocalStorage,
            image: image,
        };
    },
    props: {
        data: {
            type: Object,
            required: true,
            default: () => [],
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        data: {
            type: Object,
            required: true,
            default: () => [],
        },
    },
});
;
