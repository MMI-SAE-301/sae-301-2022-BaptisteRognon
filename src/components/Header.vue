<template>
   <nav>
    <h4 class="text-xl">
      <Bars3Icon class="inline-block h-5 w-5 text-blue-500" />
      menu <code class="font-mono">/src/App.vue</code>
    </h4>
    <LoginLogout/>
    <ul>
      <li>
        <router-link class="text-red-600 underline" to="/">
          lien vers
          <code class="font-mono">TIK TAK</code>
        </router-link>
      </li>
      <li>
 <router-link class="text-red-600 underline" to="/personnalisation">
 lien vers
 <code class="font-mono">/src/pages/PersonnalisationView.vue</code>
 </router-link>
 </li>
 <li>
 <router-link class="text-red-600 underline" to="/Galerie">
 lien vers
 <code class="font-mono">/src/pages/GalerieView.vue</code>
 </router-link>
 </li>
 <li>
        <router-link class="text-red-600 underline" to="/Contact">
          lien vers
          <code class="font-mono">/src/pages/ContactView.vue</code>
        </router-link>
      </li>
       <li>
        <router-link class="text-red-600 underline" to="/Seconnecter">
          lien vers
          <code class="font-mono">/src/pages/Seconnecter</code>
        </router-link>
      </li>
    </ul>
  </nav>

  <!-- Affiche les pages -->
  <router-view class="m-2 border-2 p-2" /> 
</template>