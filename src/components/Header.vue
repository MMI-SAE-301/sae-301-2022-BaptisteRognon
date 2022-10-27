<template>
  <div>
   <div class="display:flex bg-[url('/img/fond.jpg')]">
    <li class="flex">
        <router-link class="text-blanc " to="/">
          <code class="font-bap">TIK TAK</code>
        </router-link>
      </li>
      <div class="font-bap flex text-3xl justify-center p-10 space-x-6">    
      

      <li class="flex">
        <router-link class="text-blanc " to="/personnalisation">
          <code class="font-bap">Personnalisation</code>
        </router-link>
      </li>

       <li class="flex">
          <router-link class="text-blanc  " to="/">
            <code class="font-bap">Accueil</code>
          </router-link>
      </li>

      <li class="flex">
        <router-link class="text-blanc " to="">
          <code class="font-bap">Contact</code>
        </router-link>
      </li>

       <li class="flex">
        <router-link class=" " to="/Seconnecter">
          <img src="../../public/img/profil.jpg"/>
        </router-link>
      </li>

    </div>
    
  </div>
</div>
  <!-- Affiche les pages -->
  <router-view class="bg-slate-300" /> 
</template>