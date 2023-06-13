<template>
    <v-container class="pa-0 ma-0 w-100 h-100 d-flex flex-column bg-color-primary">
        <v-row class="d-flex align-center justify-center">
            <h2 class="font-color font-family font-title">Brecho flor da fronteira</h2>
        </v-row>
        <v-row class="h-70 borders-bt">
            <div class="d-flex flex-column justify-space-evenly w-100 h-50">
                <v-btn class="d-flex justify-start button grow  rounded-0" :prepend-icon="iconButtons[i]" flat
                    v-for="button, i in buttons" :key="button">
                    <span class="font-size">{{ button }}</span>
                </v-btn>
            </div>
        </v-row>
        <v-row class="bg-purple">
            <v-btn append-icon="fa-solid fa-arrow-right-from-bracket" class="button h-100 w-100 rounded-0" flat><span
                    class="font-size">Sair</span>
            </v-btn>
        </v-row>
    </v-container>
</template>

<script lang="ts">
export default {
    name: "SideBar",
    data() {
        return {
            buttons: ["Inicio", "Produtos", "Pedidos", "Configuracoes Gerais"],
            iconButtons: ["fa-solid fa-house", "fa-solid fa-basket-shopping", "fa-solid fa-box-open", "fa-solid fa-gear"],
            bgPrimaryColor: "bg-color-primary"
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&display=swap');

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

.font-family {
    font-family: 'Dongle', sans-serif;
}

.font-title {
    font-size: 2em;
    font-weight: 400;
}
</style>