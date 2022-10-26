
<template>

    <div name="article1" class="grid grid-cols-3 m-5">
    <div class="justify-center">
      <p>Présentation</p>
      <p>Couleurs</p>
      <p>Taille</p>
    </div>

    <div class="justify-center">
      <div class="m-2"> <h2 class="text-2xl">Devenez</h2>
    <h2 class="text-2xl ">le Créateur</h2>
      </div>
   
    <p>Si vous ne trouvez pas votre Kantatapai, que désiriez-vpus de la créer ? Vous pouvez personnaliser vos deux crocs avec deux couleurs différentes. </p>
    <p class="m-10">Allez voir ! </p>
    <img src="../../img/cercleo.jpg" alt="image de montre"/>
    </div>

   
  </div>

        
<div class="m-5 flex justify-center">
 <FormMateriaux />
 </div>


<div name="article3" class="p-10">
    <div>
    <p>Une Montre Unique pour vous</p>
    <img src="../../public/img/ligne.jpg" class="flex"/>
    <p>A vous de faire se qu’il vous plaît et a mettre votre TIK TAK à votre sauce. Vous pouvez faire votre choix de couleurs à travers divers couleurs proposés ou à vous de la rajouter. </p>
    <p>Sans oublié le fait de prendre sa taille (logique). Avec aussi, une gamme de taille américain. Vous pouvez aussi tout bonnement choisir votre taille de poignet grace à la barre de recherche et l’enregistrer. </p>
    <p>Allez voir ! </p>
    </div>
    <img src="../../public/img/image4.jpg" class="flex"/>
  </div>

  <div class="m-5 flex justify-center">
 <FormMateriaux />
 </div>

<div name="retour" class="m-3">
    <p>Vos retours</p>
    <div class="justify-center gap-x-5">
    <MontreCard/>
    </div>
  </div>
 
 </template>
 <script setup lang="ts">

import FormMateriaux from "../components/FormMateriaux.vue"
import MontreCard from "../components/MontreCard.vue"
import type { MontreSvg } from "@/types-svg";
import { ref } from "vue";

    const Montre = ref<MontreSvg>({})
 </script>
