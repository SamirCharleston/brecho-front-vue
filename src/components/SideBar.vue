<template>
    <v-container class="pa-0 ma-0 w-100 h-100 d-flex flex-column bg-color-primary">
        <v-row class="d-flex align-center justify-center">
            <h2 class="font-color font-family font-title">Brecho flor da fronteira</h2>
        </v-row>
        <v-row class="h-70 borders-bt">
            <div class="d-flex flex-column justify-space-evenly w-100 h-50">
                <RouterLink :to="routerLinks[i]" class="d-flex flex-column justify-space-evenly w-100 h-100 decoration-off"
                    v-for="button, i in buttons" :key="button">
                    <v-btn class="d-flex justify-start button grow rounded-0" :prepend-icon="iconButtons[i]" flat>
                        <span class="font-size">{{ button }}</span>
                    </v-btn>
                </RouterLink>
            </div>
        </v-row>
        <v-row>
            <RouterLink to="/" class="w-100">
                <v-btn @click="goOut" append-icon="fa-solid fa-arrow-right-from-bracket"
                    class="button h-100 w-100 rounded-0" flat><span class="font-size">Sair</span>
                </v-btn>
            </RouterLink>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: "SideBar",
    data() {
        return {
            buttons: ["Produtos", "Cadastro de Produtos", "Pedidos"],
            iconButtons: ["fa-solid fa-basket-shopping", "fa-solid fa-plus", "fa-solid fa-box-open"],
            bgPrimaryColor: "bg-color-primary",
            routerLinks: ["/produtos-vendidos", "/cadastrar-produtos", "/pedidos", "/configuracoes"]
        }
    },
    methods: {
        goOut() {
            window.location.href = 'http://localhost:8080/login'
        }
    }
})
</script>


<style lang="scss" scoped>
$backgroud-primary-color: #FF7272;
$button-togle-color: #f69a9a;
$font-color: white;

.h-70 {
    height: 70%;
}

.button {
    background-color: $backgroud-primary-color;
    border: none;
    height: 50px;
    color: $font-color;
    font-family: 'Dongle', sans-serif;
    font-weight: lighter;
    font-size: 1em;
    text-transform: none;
}

.grow {
    flex-grow: 1;
    flex-basis: 0;
}

.button:hover {
    background-color: $button-togle-color;
}

.bg-color-primary {
    background-color: $backgroud-primary-color;
}

.borders-bt {
    border-style: solid none;
    border-width: 1px;
    border-color: white;
}

.font-color {
    color: white;
}

.font-size {
    font-size: 1.5em;
}
</style>