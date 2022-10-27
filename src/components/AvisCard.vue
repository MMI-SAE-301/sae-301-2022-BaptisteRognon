<template> 
<div class="justify-center grid grid-cols-3">
    <div class="m-3 bg-blanc font-bap" width="20px" height="20px" >
        <img src="../../public/img/Avatar1.jpg" alt="utilisateur" >       
         <figcaption class="flex flex-col relative px-5 py-7 border-2 border-t-0 rounded-b-lg">
            <h3 class="text-2xl text-gray-900">{{ titre }}</h3>
            <p>Rien à dire, la personnalisation des TIK TAK est vraiment complête ! </p>
            <div class="flex justify-evenly">
            <a class="bg-white m-3">Profile</a>
            <a class="bg-white m-3">Ajouter un avis</a>
            </div>
        </figcaption>
    </div>

    <div class="m-3 bg-blanc font-bap" width="20px" height="20px" >
        <img src="../../public/img/Avatar1.jpg" alt="utilisateur" >       
         <figcaption class="flex flex-col relative px-5 py-7 border-2 border-t-0 rounded-b-lg">
            <h3 class="text-2xl text-gray-900">{{ titre }}</h3>
            <p>Rien à dire, la personnalisation des TIK TAK est vraiment complête ! </p>
            <div class="flex justify-evenly">
            <a class="bg-white m-3">Profile</a>
            <a class="bg-white m-3">Ajouter un avis</a>
            </div>
        </figcaption>
    </div>

    <div class="m-3 bg-blanc font-bap" width="20px" height="20px" >
        <img src="../../public/img/Avatar1.jpg" alt="utilisateur" >       
         <figcaption class="flex flex-col relative px-5 py-7 border-2 border-t-0 rounded-b-lg">
            <h3 class="text-2xl text-gray-900">{{ titre }}</h3>
            <p>Rien à dire, la personnalisation des TIK TAK est vraiment complête ! </p>
            <div class="flex justify-evenly">
            <a class="bg-white m-3">Profile</a>
            <a class="bg-white m-3">Ajouter un avis</a>
            </div>
        </figcaption>
    </div>

    <div class="m-3 bg-blanc font-bap" width="20px" height="20px" >
        <img src="../../public/img/Avatar1.jpg" alt="utilisateur" >       
         <figcaption class="flex flex-col relative px-5 py-7 border-2 border-t-0 rounded-b-lg">
            <h3 class="text-2xl text-gray-900">{{ titre }}</h3>
            <p>Rien à dire, la personnalisation des TIK TAK est vraiment complête ! </p>
            <div class="flex justify-evenly">
            <a class="bg-white m-3">Profile</a>
            <a class="bg-white m-3">Ajouter un avis</a>
            </div>
        </figcaption>
    </div>

    <div class="m-3 bg-blanc font-bap" width="20px" height="20px" >
        <img src="../../public/img/Avatar1.jpg" alt="utilisateur" >       
         <figcaption class="flex flex-col relative px-5 py-7 border-2 border-t-0 rounded-b-lg">
            <h3 class="text-2xl text-gray-900">{{ titre }}</h3>
            <p>Rien à dire, la personnalisation des TIK TAK est vraiment complête ! </p>
            <div class="flex justify-evenly">
            <a class="bg-white m-3">Profile</a>
            <a class="bg-white m-3">Ajouter un avis</a>
            </div>
        </figcaption>
    </div>

    <div class="m-3 bg-blanc font-bap" width="20px" height="20px" >
        <img src="../../public/img/Avatar1.jpg" alt="utilisateur" >       
         <figcaption class="flex flex-col relative px-5 py-7 border-2 border-t-0 rounded-b-lg">
            <h3 class="text-2xl text-gray-900">{{ titre }}</h3>
            <p>Rien à dire, la personnalisation des TIK TAK est vraiment complête ! </p>
            <div class="flex justify-evenly">
            <a class="bg-white m-3">Profile</a>
            <a class="bg-white m-3">Ajouter un avis</a>
            </div>
        </figcaption>
    </div>
    </div>
</template>

<script setup lang="ts">



defineProps({
    image: {type:String, default:'../../public/img/Avatar1.jpg'},
    titre: {type:String, default:'Florine Tunise'},
    Text: {type:String, default:'Rien à dire, la personnalisation des TIK TAK est vraiment complête ! '},
    
})

</script>