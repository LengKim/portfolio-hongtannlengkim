import { reactiveOmit } from "@vueuse/core";
import { NavigationMenuRoot, useForwardPropsEmits, } from "reka-ui";
import { cn } from "@/lib/utils";
import NavigationMenuViewport from "./NavigationMenuViewport.vue";
const props = withDefaults(defineProps(), {
    viewport: true,
});
const emits = defineEmits();
const delegatedProps = reactiveOmit(props, "class", "viewport");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
const __VLS_defaults = {
    viewport: true,
};
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.NavigationMenuRoot | typeof __VLS_components.NavigationMenuRoot} */
NavigationMenuRoot;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    dataSlot: "navigation-menu",
    dataViewport: (__VLS_ctx.viewport),
    ...(__VLS_ctx.forwarded),
    ...{ class: (__VLS_ctx.cn('group/navigation-menu relative flex max-w-max flex-1 items-center justify-center', props.class)) },
}));
const __VLS_2 = __VLS_1({
    dataSlot: "navigation-menu",
    dataViewport: (__VLS_ctx.viewport),
    ...(__VLS_ctx.forwarded),
    ...{ class: (__VLS_ctx.cn('group/navigation-menu relative flex max-w-max flex-1 items-center justify-center', props.class)) },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
{
    const { default: __VLS_6 } = __VLS_3.slots;
    const [slotProps] = __VLS_vSlot(__VLS_6);
    var __VLS_7 = {
        ...(slotProps),
    };
    if (__VLS_ctx.viewport) {
        const __VLS_9 = NavigationMenuViewport;
        // @ts-ignore
        const __VLS_10 = __VLS_asFunctionalComponent1(__VLS_9, new __VLS_9({}));
        const __VLS_11 = __VLS_10({}, ...__VLS_functionalComponentArgsRest(__VLS_10));
    }
    // @ts-ignore
    [viewport, viewport, forwarded, cn,];
    __VLS_3.slots['' /* empty slot name completion */];
}
var __VLS_3;
// @ts-ignore
var __VLS_8 = __VLS_7;
// @ts-ignore
[];
const __VLS_base = (await import('vue')).defineComponent({
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
const __VLS_export = {};
export default {};
