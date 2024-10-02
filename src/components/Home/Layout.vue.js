import { ref, computed, onMounted } from "vue";
import AOS from "aos";
import Card from "../Card.vue";
import { useGetNumber } from "../../composables/useGetNumber";
import { useCustomFetch } from "../../composables/useCustomFetch";
import { useI18n } from "vue-i18n";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { locale } = useI18n();
const pokemons = ref([]);
const nextPage = ref(null);
const previousPage = ref(null);
const lang = localStorage.getItem("language") || "pt";
const maxPokemons = 1008;
const limit = ref(10);
const fetchPokemons = async (url = `pokemon/?limit=${limit.value}&offset=0&language=${lang}`) => {
    try {
        const response = await useCustomFetch(url);
        pokemons.value = response.results.map((p) => ({
            name: p.name,
            url: p.url,
        }));
        nextPage.value = response.next
            ? response.next.replace(import.meta.env.VITE_API_URL, "")
            : null;
        previousPage.value = response.previous
            ? response.previous.replace(import.meta.env.VITE_API_URL, "")
            : null;
    }
    catch (error) {
        console.error("Erro ao buscar lista de Pokémon:", error);
    }
};
const types = ref([]);
const selectedType = ref("");
const fetchTypes = async () => {
    try {
        const response = await useCustomFetch(`type/?language=${lang}`);
        types.value = response.results;
    }
    catch (error) {
        console.error("Erro ao buscar tipos:", error);
    }
};
const fetchPokemonsByType = async () => {
    if (selectedType.value) {
        const selectedTypeObj = types.value.find((type) => type.name === selectedType.value);
        if (selectedTypeObj) {
            try {
                const response = await useCustomFetch(`type/${useGetNumber(selectedTypeObj.url)}?language=${lang}`);
                pokemons.value = response.pokemon.slice(0, limit.value).map((p) => ({
                    name: p.pokemon.name,
                    url: p.pokemon.url,
                }));
            }
            catch (error) {
                console.error("Erro ao buscar Pokémon por tipo:", error);
            }
        }
    }
    else {
        fetchPokemons();
    }
};
onMounted(() => {
    fetchTypes();
    fetchPokemons();
    AOS.refresh();
});
const searchType = ref(1);
const searchQuery = ref("");
const filteredData = computed(() => {
    return pokemons.value.filter((item) => {
        const number = useGetNumber(item.url);
        if (searchType.value === 1) {
            return item.name.toLowerCase().includes(searchQuery.value.toLowerCase());
        }
        else if (searchType.value === 2) {
            return number && number.includes(searchQuery.value);
        }
        return true;
    });
});
const updateLimit = () => {
    const inputLimit = parseInt(limit.value);
    if (inputLimit >= 1 && inputLimit <= maxPokemons) {
        fetchPokemons();
    }
    else {
        limit.value = 10;
    }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-md-7 mb-5 col-12") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("position-relative") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ value: ((__VLS_ctx.searchQuery)), type: ("text"), placeholder: ((` ${__VLS_ctx.$t('home.filter.placeholder')} ${__VLS_ctx.searchType == 1
            ? __VLS_ctx.$t('home.filter.name')
            : __VLS_ctx.$t('home.filter.number')}`)), ...{ class: ("form-control") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("position-absolute icon") }, src: ("/image/browser.png"), alt: ("Ícone de pesquisa"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row mt-4 mb-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.$t("home.filter.label"));
    for (const [type] of __VLS_getVForSourceType(([
        { id: 1, name: __VLS_ctx.$t('home.filter.name') },
        { id: 2, name: __VLS_ctx.$t('home.filter.number') },
    ]))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((type.id)), ...{ class: ("col-md-3 mt-2 mt-md-4 cursor-pointer") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.searchType = type.id;
                } }, ...{ class: ("card text-center") }, ...{ class: (({ active: __VLS_ctx.searchType == type.id })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-body") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (type.name);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-md-3 mt-2 mt-md-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ onChange: (__VLS_ctx.fetchPokemonsByType) }, value: ((__VLS_ctx.selectedType)), ...{ class: ("form-select text-capitalize") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ selected: (true), disabled: (true), value: (""), });
    (__VLS_ctx.$t("home.filter.type"));
    for (const [type] of __VLS_getVForSourceType((__VLS_ctx.types.slice(0, -1)))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((type.name)), value: ((type.name)), });
        (type.name);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-md-3 mt-2 mt-md-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onChange: (__VLS_ctx.updateLimit) }, type: ("number"), min: ("1"), max: ("1008"), placeholder: ((__VLS_ctx.$t('home.filter.limit'))), ...{ class: ("form-control limit-input") }, });
    (__VLS_ctx.limit);
    if (__VLS_ctx.limit) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.$t("home.filter.limit"));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("scrollable-cards") }, });
    if (__VLS_ctx.filteredData.length) {
        // @ts-ignore
        [Card,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(Card, new Card({ dataAos: ("fade-up"), data: ((__VLS_ctx.filteredData)), }));
        const __VLS_1 = __VLS_0({ dataAos: ("fade-up"), data: ((__VLS_ctx.filteredData)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center mt-5 mb-5 p-5") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.$t("home.alert"));
    }
    if (__VLS_ctx.filteredData.length) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex justify-content-between mt-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.filteredData.length)))
                        return;
                    __VLS_ctx.fetchPokemons(__VLS_ctx.previousPage);
                } }, disabled: ((!__VLS_ctx.previousPage)), ...{ class: ("btn button-primary") }, });
        (__VLS_ctx.$t("home.buttons.previous"));
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.filteredData.length)))
                        return;
                    __VLS_ctx.fetchPokemons(__VLS_ctx.nextPage);
                } }, disabled: ((!__VLS_ctx.nextPage)), ...{ class: ("btn button-primary") }, });
        (__VLS_ctx.$t("home.buttons.next"));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-md-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
    var __VLS_5 = {};
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['mt-5'];
    __VLS_styleScopedClasses['row'];
    __VLS_styleScopedClasses['col-md-7'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['col-12'];
    __VLS_styleScopedClasses['position-relative'];
    __VLS_styleScopedClasses['form-control'];
    __VLS_styleScopedClasses['position-absolute'];
    __VLS_styleScopedClasses['icon'];
    __VLS_styleScopedClasses['row'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['col-md-3'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['mt-md-4'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['card-body'];
    __VLS_styleScopedClasses['col-md-3'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['mt-md-4'];
    __VLS_styleScopedClasses['form-select'];
    __VLS_styleScopedClasses['text-capitalize'];
    __VLS_styleScopedClasses['col-md-3'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['mt-md-4'];
    __VLS_styleScopedClasses['form-control'];
    __VLS_styleScopedClasses['limit-input'];
    __VLS_styleScopedClasses['scrollable-cards'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mt-5'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['p-5'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['justify-content-between'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['btn'];
    __VLS_styleScopedClasses['button-primary'];
    __VLS_styleScopedClasses['btn'];
    __VLS_styleScopedClasses['button-primary'];
    __VLS_styleScopedClasses['col-md-5'];
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
            nextPage: nextPage,
            previousPage: previousPage,
            limit: limit,
            fetchPokemons: fetchPokemons,
            types: types,
            selectedType: selectedType,
            fetchPokemonsByType: fetchPokemonsByType,
            searchType: searchType,
            searchQuery: searchQuery,
            filteredData: filteredData,
            updateLimit: updateLimit,
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
