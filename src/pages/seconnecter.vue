<script setup lang="ts">
import { supabase, user } from '../supabase';
</script>
<template>
    <div>
        <div class="lg:flex lg:justify-evenly">
            <div class="flex flex-col items-center lg:mt-40">
                <div class="my-12">
                    <div class="text-white text-center lg:text-4xl" >
                        <p class="my-4 lg:text-4xl  font-bap">Vous êtes actuellement connecté.</p>
                        <p class="mb-4 lg:text-4xl font-bap">N'hésitez pas à personnsalier un <RouterLink
                                class="border-b-jaune-0 border-b" to="personnalisation">produit</RouterLink>
                        </p>
                    </div>
                    <button class="text-white" v-if="user" @pointerdown="supabase.auth.signOut()">
                        <p class="mb-12 lg:text-4xl font-bap">Vous êtes connecté avec l'adresse suivant : {{ user.email }}</p>
                        Se déconnecter
                    </button>
                    <button class="flex gap-3 items-center text-white font-bap font-inter rounded-full px-4 py-2
        bg-rouge-0" v-else @pointerdown="supabase.auth.signIn({ provider: 'google' })">
                        <span><img src="../../public/icon/google.png"></span>Google
                    </button>
                </div>

                <div>
                    <button class="hidden font-bap  " v-if="user" @pointerdown="supabase.auth.signOut()">
                        Se déconnecter ({{ user.email }})
                    </button>
                    <button class="flex gap-3 items-center font-bap  text-white font-inter rounded-full px-4 py-2
        bg-bleu-0" v-else @pointerdown="supabase.auth.signIn({ provider: 'facebook' })">
                        <span><img src="../../public/icon/facebook.png"></span>Facebook
                    </button>
                </div>
            </div>

            <div class="hidden lg:block lg:mt-9" >
                <div class="w-96 bg-jaune-0 h-470 rounded-xl">
                    <div class="flex justify-center">
                        
                    </div>
                    <div class="">
                        <p class="text-black font-bap  font-inter font-semibold text-center mt-4">Lorem ipsum dolor</p>
                        <p class="text-black  font-bap  font-inter font-semibold text-center mt-4 mx-2">Lorem ipsum dolor sit
                            amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>

                        <div class="flex justify-center mt-7">
                            <button
                                class=" font-bap  mt-4 text-white lg:h-fit font-inter text-base bg-black py-1 px-8 rounded-full ">
                                Lorem
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> 