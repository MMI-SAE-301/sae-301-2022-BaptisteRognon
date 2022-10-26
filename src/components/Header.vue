<template>
  <div>
   <div class="display:flex">
      <div class=" text-noir flex items-center space-x-6">    
      <li class="flex">
        <router-link class="text-noir " to="/">
          <code class="fontfamilly-boutonmenu">TIK TAK</code>
        </router-link>
      </li>

      <li class="flex">
        <router-link class="text-noir " to="/personnalisation">
          <code class="font-boutonmenu">Personnalisation</code>
        </router-link>
      </li>

       <li class="flex">
          <router-link class="text-noir font- " to="/Galerie">
            <code class="font-boutonmenu">Galerie</code>
          </router-link>
      </li>

      <li class="flex">
        <router-link class="text-noir " to="/Contact">
          <code class="font-boutonmenu">Contact</code>
        </router-link>
      </li>

       <li class="flex">
        <router-link class="text-noir " to="/Seconnecter">
          <code class="font-boutonmenu">Se connecter</code>
        </router-link>
      </li>

    </div>
  </div>
</div>
  <!-- Affiche les pages -->
  <router-view class="m-2 border-2 p-2" /> 
</template>