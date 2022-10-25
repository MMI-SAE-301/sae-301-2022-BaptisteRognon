<template>
   <div>
    <ul>
    
      <li>
        <router-link class="text-red-600 underline" to="/">
          
          <code class="font-mono">TIK TAK</code>
        </router-link>
      </li>
      <li>
 <router-link class="text-red-600 underline" to="/personnalisation">

 <code class="font-mono">Personnalisation</code>
 </router-link>
 </li>
 <li>
 <router-link class="text-red-600 underline" to="/Galerie">

 <code class="font-mono">Galerie</code>
 </router-link>
 </li>
 <li>
        <router-link class="text-red-600 underline" to="/Contact">
         
          <code class="font-mono">Contact</code>
        </router-link>
      </li>
       <li>
        <router-link class="text-red-600 underline" to="/Seconnecter">
        
          <code class="font-mono">Se connecter</code>
        </router-link>
      </li>
    </ul>
</div>

  <!-- Affiche les pages -->
  <router-view class="m-2 border-2 p-2" /> 
</template>