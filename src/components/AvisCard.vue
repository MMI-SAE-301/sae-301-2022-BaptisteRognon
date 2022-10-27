<template> 
<div class="justify-center grid grid-cols-3">
    <div class="m-3 bg-blanc font-bap" width="20px" height="20px" >
        <img src="../../public/img/Avatar1.jpg" alt="utilisateur" >       
         <figcaption class="flex flex-col relative px-5 py-7 border-2 border-t-0 rounded-b-lg">
            <h3 class="text-2xl text-gray-900">{{ titre }}</h3>
            <p>Rien à dire, la personnalisation des TIK TAK est vraiment complête ! </p>
            <div class="flex justify-evenly">
            <a class="bg-indigo-300 p-5 m-3">Profile</a>
            <a class="bg-noir text-blanc p-5 m-3">Ajouter un avis</a>
            </div>
        </figcaption>
    </div>

    <div class="m-3 bg-blanc font-bap" width="20px" height="20px" >
        <img src="../../public/img/Avatar3.png" alt="utilisateur" >       
         <figcaption class="flex flex-col relative px-5 py-7 border-2 border-t-0 rounded-b-lg">
            <h3 class="text-2xl text-gray-900">Sarah Lopo</h3>
            <p>J’ai reçu mes derniers créations, elles sont incroyables et elles sont à la bonne taille :) </p>
            <div class="flex justify-evenly">
            <a class="bg-indigo-300 p-5 m-3">Profile</a>
            <a class="bg-noir text-blanc p-5 m-3">Ajouter un avis</a>
            </div>
        </figcaption>
    </div>

    <div class="m-3 bg-blanc font-bap" width="20px" height="20px" >
        <img src="../../public/img/Avatar5.png" alt="utilisateur" >       
         <figcaption class="flex flex-col relative px-5 py-7 border-2 border-t-0 rounded-b-lg">
            <h3 class="text-2xl text-gray-900">Marthieu Louis</h3>
            <p>Que dire de mieux que de faire partie de la Haute avec TIK TAK </p>
            <div class="flex justify-evenly">
            <a class="bg-indigo-300 p-5 m-3">Profile</a>
            <a class="bg-noir text-blanc p-5 m-3">Ajouter un avis</a>
            </div>
        </figcaption>
    </div>

    <div class="m-3 bg-blanc font-bap" width="20px" height="20px" >
        <img src="../../public/img/Avatar2.png" alt="utilisateur" >       
         <figcaption class="flex flex-col relative px-5 py-7 border-2 border-t-0 rounded-b-lg">
            <h3 class="text-2xl text-gray-900">Jean Moerlio</h3>
            <p>J’ai essayé de faire différente TIK TAK pour voir ce que cela donnerai et je ne suis pas déçu. </p>
            <div class="flex justify-evenly">
            <a class="bg-indigo-300 p-5 m-3">Profile</a>
            <a class="bg-noir text-blanc p-5 m-3">Ajouter un avis</a>
            </div>
        </figcaption>
    </div>

    <div class="m-3 bg-blanc font-bap" width="20px" height="20px" >
        <img src="../../public/img/Avatar4.png" alt="utilisateur" >       
         <figcaption class="flex flex-col relative px-5 py-7 border-2 border-t-0 rounded-b-lg">
            <h3 class="text-2xl text-gray-900">Théa Fino</h3>
            <p>Merci TIK TAK !!! </p>
            <div class="flex justify-evenly">
            <a class="bg-indigo-300 p-5 m-3">Profile</a>
            <a class="bg-noir text-blanc p-5 m-3">Ajouter un avis</a>
            </div>
        </figcaption>
    </div>

    <div class="m-3 bg-blanc font-bap" width="20px" height="20px" >
        <img src="../../public/img/Avatar6.png" alt="utilisateur" >       
         <figcaption class="flex flex-col relative px-5 py-7 border-2 border-t-0 rounded-b-lg">
            <h3 class="text-2xl text-gray-900">Baptiste Rognon</h3>
            <p>TIK TAK devrai signer un contrat avec KANTATAPA, vous avez les mêmes ambitions et les mêmes objectifs </p>
            <div class="flex justify-evenly">
            <a class="bg-indigo-300 p-5 m-3">Profile</a>
            <a class="bg-noir text-blanc p-5 m-3">Ajouter un avis</a>
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