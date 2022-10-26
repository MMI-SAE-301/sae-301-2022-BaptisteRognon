
<template>
        

 <FormMateriaux />
 
 </template>
 <script setup lang="ts">

import FormMateriaux from "../components/FormMateriaux.vue";
import type { MontreSvg } from "@/types-svg";
import { ref } from "vue";

    const Montre = ref<MontreSvg>({})
 </script>
