<template>
   <div class="flex">
    <ul>
    
      <li>
        <router-link class="text-noir " to="/">
          
          <code class="font-mono">TIK TAK</code>
        </router-link>
      </li>
      <li>
 <router-link class="text-noir " to="/personnalisation">

 <code class="font-boutonmenu">Personnalisation</code>
 </router-link>
 </li>
 <li>
 <router-link class="text-noir font- " to="/Galerie">

 <code class="font-mono">Galerie</code>
 </router-link>
 </li>
 <li>
        <router-link class="text-noir " to="/Contact">
         
          <code class="font-mono">Contact</code>
        </router-link>
      </li>
       <li>
        <router-link class="text-noir " to="/Seconnecter">
        
          <code class="font-mono">Se connecter</code>
        </router-link>
      </li>
    </ul>
</div>

  <!-- Affiche les pages -->
  <router-view class="m-2 border-2 p-2" /> 
</template>