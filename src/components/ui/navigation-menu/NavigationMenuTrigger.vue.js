import { ChevronDown } from "@lucide/vue";
import { reactiveOmit } from "@vueuse/core";
import { NavigationMenuTrigger, useForwardProps, } from "reka-ui";
import { cn } from "@/lib/utils";
import { navigationMenuTriggerStyle } from ".";
const props = defineProps();
const delegatedProps = reactiveOmit(props, "class");
const forwardedProps = useForwardProps(delegatedProps);
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.NavigationMenuTrigger | typeof __VLS_components.NavigationMenuTrigger} */
NavigationMenuTrigger;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    dataSlot: "navigation-menu-trigger",
    ...(__VLS_ctx.forwardedProps),
    ...{ class: (__VLS_ctx.cn(__VLS_ctx.navigationMenuTriggerStyle(), 'group', props.class)) },
}));
const __VLS_2 = __VLS_1({
    dataSlot: "navigation-menu-trigger",
    ...(__VLS_ctx.forwardedProps),
    ...{ class: (__VLS_ctx.cn(__VLS_ctx.navigationMenuTriggerStyle(), 'group', props.class)) },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
var __VLS_7 = {};
let __VLS_9;
/** @ts-ignore @type { | typeof __VLS_components.ChevronDown} */
ChevronDown;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent1(__VLS_9, new __VLS_9({
    ...{ class: "relative top-px ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180" },
    'aria-hidden': "true",
}));
const __VLS_11 = __VLS_10({
    ...{ class: "relative top-px ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180" },
    'aria-hidden': "true",
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['top-px']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-1']} */ ;
/** @type {__VLS_StyleScopedClasses['size-3']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['group-data-[state=open]:rotate-180']} */ ;
// @ts-ignore
[forwardedProps, cn, navigationMenuTriggerStyle,];
var __VLS_3;
// @ts-ignore
var __VLS_8 = __VLS_7;
// @ts-ignore
[];
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
});
const __VLS_export = {};
export default {};
