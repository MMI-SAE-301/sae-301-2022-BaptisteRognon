<script setup lang="ts">
    import type { Montre } from "@/types"
    import { colors } from "@/types"
    import { materiaux } from "@/types"
    import { ref } from "vue";
    import SvgProfil from "./Montre.vue";
    const props = defineProps<{
  data?: Montre;
  id?: string;
}>();
const montre = ref<Montre>(props.data ?? {});
</script>

<template>
    <div class="p-2">
        <div class=" w-64">
            <SvgProfil v-bind="montre" id="montre" />
        </div>
        <FormKit type="form" v-model="montre">
        <FormKit name="bracelet" label="bracelet" value="#FFFFFF" type="radio" :options="colors" :sections-schema="{
                inner: { $el: null },
                decorator: { $el:null },
            }" input-class="peer sr-only" options-class="flex gap-1" >
            <template #label="context">
        <div class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600" :style="{ backgroundColor: context.option.value}" />
            <span class="sr-only">{{ context.option.label }}</span>
        </template>
        </FormKit>


        <FormKit name="ecran" label="ecran" value="#FFFFFF" type="radio" :options="colors" :sections-schema="{
                inner: { $el: null },
                decorator: { $el:null },
            }" input-class="peer sr-only" options-class="flex gap-1" >
            <template #label="context">
        <div class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600" :style="{ backgroundColor: context.option.value}" />
            <span class="sr-only">{{ context.option.label }}</span>
        </template>
        </FormKit>

        <FormKit name="boitier" label="boitier" value="#FFFFFF" type="radio" :options="colors" :sections-schema="{
                inner: { $el: null },
                decorator: { $el:null },
            }" input-class="peer sr-only" options-class="flex gap-1" >
            <template #label="context">
        <div class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600" :style="{ backgroundColor: context.option.value}" />
            <span class="sr-only">{{ context.option.label }}</span>
        </template>
        </FormKit>
        
<FormKit name="materiaux" label="Texture utilisée pour la matière de la montre" value="#000000" type="radio" :options="materiaux" :sections-schema="{
                inner: { $el: null },
                decorator: { $el:null },
            }" input-class="peer sr-only" options-class="flex gap-1" >
            <template #label="context">
        <div class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600" :style="{ backgroundImage: `url('${context.option.value}')`}" />
            <span class="sr-only">{{ context.options.label }}</span>
        </template>
        </FormKit>
        </FormKit>
    </div>
</template>