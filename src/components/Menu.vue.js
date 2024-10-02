import { ref, onMounted } from "vue";
import { routes } from "../router";
import { useRoute } from "vue-router";
import Cookies from "js-cookie";
import { useI18n } from "vue-i18n";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { locale } = useI18n();
const changeLanguage = (lang) => {
    locale.value = lang;
    localStorage.setItem("language", lang);
};
const url = useRoute();
const routeList = routes;
const currentTheme = ref(Cookies.get("theme") || "light");
onMounted(() => {
    document.documentElement.setAttribute("data-theme", currentTheme.value);
});
const toggleTheme = () => {
    currentTheme.value = currentTheme.value === "light" ? "dark" : "light";
    Cookies.set("theme", currentTheme.value, { expires: 7 });
    document.documentElement.setAttribute("data-theme", currentTheme.value);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container mt-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("navbar navbar-expand-lg bg-white border rounded-3 p-md-3 p-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container-fluid") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/"), ...{ class: ("navbar-brand logo") }, }));
    const __VLS_2 = __VLS_1({ to: ("/"), ...{ class: ("navbar-brand logo") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.toggleTheme) }, ...{ class: ("btn btn-link theme d-inline-block d-md-none") }, "aria-label": ("Toggle Theme"), });
    if (__VLS_ctx.currentTheme === 'light') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ "aria-hidden": ("true"), });
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ "aria-hidden": ("true"), });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.changeLanguage(__VLS_ctx.locale === 'en' ? 'pt' : 'en');
            } }, ...{ class: ("btn d-inline-block d-md-none") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("lang-image") }, src: ((`public/lang/${__VLS_ctx.locale === 'en' ? 'pt' : 'en'}.png`)), alt: ((__VLS_ctx.locale)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("navbar-toggler") }, type: ("button"), "data-bs-toggle": ("collapse"), "data-bs-target": ("#navbarSupportedContent"), "aria-controls": ("navbarSupportedContent"), "aria-expanded": ("false"), "aria-label": ("Toggle navigation"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("navbar-toggler-icon") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("collapse navbar-collapse") }, id: ("navbarSupportedContent"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("navbar-nav me-auto mb-2 mb-lg-0") }, });
    for (const [route] of __VLS_getVForSourceType((__VLS_ctx.routeList))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("nav-item") }, key: ((route.name)), });
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: (({ active: __VLS_ctx.url.fullPath == route.path })) }, ...{ class: ("nav-link ms-2 fw-bold") }, to: ((route.path)), }));
        const __VLS_8 = __VLS_7({ ...{ class: (({ active: __VLS_ctx.url.fullPath == route.path })) }, ...{ class: ("nav-link ms-2 fw-bold") }, to: ((route.path)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        (route.name === "Inicio"
            ? __VLS_ctx.$t("routes.home")
            : __VLS_ctx.$t("routes.favorite"));
        __VLS_nonNullable(__VLS_11.slots).default;
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.toggleTheme) }, ...{ class: ("btn btn-link theme d-none d-md-inline") }, "aria-label": ("Toggle Theme"), });
    if (__VLS_ctx.currentTheme === 'light') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ "aria-hidden": ("true"), });
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ "aria-hidden": ("true"), });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.changeLanguage(__VLS_ctx.locale === 'en' ? 'pt' : 'en');
            } }, ...{ class: ("btn d-none d-md-inline") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("lang-image") }, src: ((`public/lang/${__VLS_ctx.locale === 'en' ? 'pt' : 'en'}.png`)), alt: ((__VLS_ctx.locale)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
    var __VLS_12 = {};
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['mt-3'];
    __VLS_styleScopedClasses['row'];
    __VLS_styleScopedClasses['navbar'];
    __VLS_styleScopedClasses['navbar-expand-lg'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['rounded-3'];
    __VLS_styleScopedClasses['p-md-3'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['container-fluid'];
    __VLS_styleScopedClasses['navbar-brand'];
    __VLS_styleScopedClasses['logo'];
    __VLS_styleScopedClasses['btn'];
    __VLS_styleScopedClasses['btn-link'];
    __VLS_styleScopedClasses['theme'];
    __VLS_styleScopedClasses['d-inline-block'];
    __VLS_styleScopedClasses['d-md-none'];
    __VLS_styleScopedClasses['btn'];
    __VLS_styleScopedClasses['d-inline-block'];
    __VLS_styleScopedClasses['d-md-none'];
    __VLS_styleScopedClasses['lang-image'];
    __VLS_styleScopedClasses['navbar-toggler'];
    __VLS_styleScopedClasses['navbar-toggler-icon'];
    __VLS_styleScopedClasses['collapse'];
    __VLS_styleScopedClasses['navbar-collapse'];
    __VLS_styleScopedClasses['navbar-nav'];
    __VLS_styleScopedClasses['me-auto'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['mb-lg-0'];
    __VLS_styleScopedClasses['nav-item'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['nav-link'];
    __VLS_styleScopedClasses['ms-2'];
    __VLS_styleScopedClasses['fw-bold'];
    __VLS_styleScopedClasses['btn'];
    __VLS_styleScopedClasses['btn-link'];
    __VLS_styleScopedClasses['theme'];
    __VLS_styleScopedClasses['d-none'];
    __VLS_styleScopedClasses['d-md-inline'];
    __VLS_styleScopedClasses['btn'];
    __VLS_styleScopedClasses['d-none'];
    __VLS_styleScopedClasses['d-md-inline'];
    __VLS_styleScopedClasses['lang-image'];
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
            locale: locale,
            changeLanguage: changeLanguage,
            url: url,
            routeList: routeList,
            currentTheme: currentTheme,
            toggleTheme: toggleTheme,
        };
    },
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
export default {};
;
