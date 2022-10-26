<template>
  <div name="page d'accueil" class="bg-blue-600" >
    <div name="entête" class=" bg-[url('/img/fond.jpg')]">
      <div>
        <h1 class="text-2xl text-white  font-bap">Mes TIK TAK</h1>
        <h1 class="text-2xl text-white font-bap">La montre des hauts</h1>
      </div>

      <div class="p-5 font-david">
        <p class="text-white font-bap">Un luxe classique,</p>
        <P class="text-white font-bap">pour vous mettre en valeur.</p>
        <br/>
        <P class="text-white font-bap">Pour cela, il faut mettre le prix</p>  
      </div>

      <div class="">
        <p class="text-2xl">
          <code class=" text-white font-bap">Achetez Maintenant</code>
        </p>
      </div>
    </div>

    <div name="article1" class="grid grid-cols-3">
      <div class="justify-center m-10">
        <p class="font-bap">Galerie</p>
        <p class="font-bap">Personnalisation</p>
        <p class="font-bap">Contact</p>
        <p class="font-bap">Avis</p>
    </div>

    <div class="justify-center">
      <div class="m-2 font-bap"> <h2 class="text-2xl">Votre TIK TAK</h2>
        <h2 class="text-2xl ">Une Merveille</h2>
      </div>
      <p class="font-bap">Le nom de la marque de montre est TiK•TaK, sa philosophie est un style raffiné, minimaliste et épuré. L’identité visuelle devra être en adéquation avec la marque.</p>
      <p class="m-10 font-bap">Allez voir ! </p>
      <img src="../../img/cercleo.jpg" alt="image de montre"/>
    </div>

    <div class="justify-center">
      <img src="../../public/img/tiktakrectanlge.png"/>
    </div>
    </div>
    

    <div name="article2" class="flex">
      <img src="../../public/img/image1.jpg" class="m-2 flex"/>
      <img src="../../public/img/image2.jpg" class="m-2 flex"/>
      <p class="font-bap text-2xl">Devenez Créateur</p>
      <p class="font-bap">Si vous ne trouvez pas votre TIk TAK, que désiriez-vous de la créer ? </p>
      <p class="font-bap">Créer ma TIK TAK ! </p>
    </div>

    <div name="article3" class="p-10">
      <div  class="bg-slate-100 border-spacing-10">
        <p class="font-bap text-2xl">Une relation direct avec vous</p>
        <img src="../../public/img/ligne.jpg" class="flex"/>
        <p class="font-bap">L’utilisateur est guidé à travers la nouvelle navigation intégré à la montre. C’est plus la montre qui règle le temps mais c’est vous qui LA réglé. </p>
        <p class="font-bap">Devenez maître de votre quotidien en vous procurrant votre propre TIK TAK, mais pour cela que diriez-vous de regarder les divers montres déjà produites ? </p>
        <p class="font-bap">Allez voir ! </p>
      </div>
      <img src="../../public/img/image3.jpg" class="flex"/>
    </div>

    <div name="retour" class="">
      <p class="font-bap">Vos retours</p>
      <div class="flex justify-center ">
        <AvisCard/>
      </div>
    </div>

    
  </div>
</template>

<script setup lang="ts">
import Footer from '@/components/Footer.vue'
import AvisCard from '@/components/AvisCard.vue';

</script>