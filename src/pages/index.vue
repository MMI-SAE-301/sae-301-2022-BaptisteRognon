<template>
  <div name="page d'accueil" >
  <div name="entête" class="p-5 bg-[url('/img/fond.jpg')]">
    <div>
    <h1 class="text-2xl text-white  font-text_mini_menu">Mes TIK TAK</h1>
    <h1 class="text-2xl text-white font-text_mini_menu">La montre des hauts</h1>
  </div>

  <div class="p-5 font-text_mini_menu">
    <p class="text-white">Un luxe classique,</p>
    <P class="text-white">pour vous mettre en valeur.</p>
    <br/>
    <P class="text-white">Pour cela, il faut mettre le prix</p>  
  </div>

    <div class="">
      <p class="text-2xl">
        <code class="font-mono text-white text-base">Achetez Maintenant</code>
      </p>
    </div>
  </div>

  <div name="article1" class="grid grid-cols-3">
    <div class="justify-center m-10">
      <p>Galerie</p>
      <p>Personnalisation</p>
      <p>Contact</p>
      <p>Avis</p>
    </div>

    <div class="justify-center">
      <div class="m-2"> <h2 class="text-2xl">Votre TIK TAK</h2>
    <h2 class="text-2xl ">Une Merveille</h2>
      </div>
   
    <p>Le nom de la marque de montre est TiK•TaK, sa philosophie est un style raffiné, minimaliste et épuré. L’identité visuelle devra être en adéquation avec la marque.</p>
    <p class="m-10">Allez voir ! </p>
    <img src="../../img/cercleo.jpg" alt="image de montre"/>
    </div>

    <div class="justify-center">
      <img src="../../public/img/tiktakrectanlge.png"/>
    </div>
  </div>

  <div name="article2" class="flex">
    <img src="../../public/img/image1.jpg" class="m-2 flex"/>
    <img src="../../public/img/image2.jpg" class="m-2 flex"/>
    <p>Devenez Créateur</p>
    <p>Si vous ne trouvez pas votre Kantatapai, que désiriez-vous de la créer ? </p>
    <p>Créer ma TIK TAK ! </p>
  </div>

  <div name="article3" class="p-10">
    <div>
    <p>Une relation direct avec vous</p>
    <img src="../../public/img/ligne.jpg" class="flex"/>
    <p>L’utilisateur est guidé à travers la nouvelle navigation intégré à la montre. C’est plus la montre qui règle le temps mais c’est vous qui LA réglé. </p>
    <p>Devenez maître de votre quotidien en vous procurrant votre propre TIK TAK, mais pour cela que diriez-vous de regarder les divers montres déjà produites ? </p>
    <p>Allez voir ! </p>
    </div>
    <img src="../../public/img/image3.jpg" class="flex"/>
  </div>

  <div name="retour" class="m-3">
    <p>Vos retours</p>
    <div class="flex justify-center">
    <AvisCard/><AvisCard/><AvisCard/><AvisCard/>
    </div>
  </div>


<Footer/>
  </div>
</template>

<script setup lang="ts">
import Footer from '@/components/Footer.vue'
import AvisCard from '@/components/AvisCard.vue';

</script>