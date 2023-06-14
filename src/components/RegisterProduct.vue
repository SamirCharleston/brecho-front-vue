<template>
    <div class="containerScroll">
        <v-form @submit.prevent fast-fail>
            <v-container>
                <v-row>
                    <v-col class="d-flex justify-start">
                        <h2 class="font-family font-title">Cadastrar Produto</h2>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="3" class="pb-0">
                        <v-text-field v-model="productNumber" :rules="productRules" label="Codigo" counter="10" required
                            :disabled="false" variant="outlined" density="compact"></v-text-field>
                    </v-col>
                    <v-col cols="9" class="pb-0">
                        <v-text-field v-model="productName" :rules="nameRules" counter="50" required label="Nome do produto"
                            variant="outlined" density="compact"></v-text-field>
                    </v-col>
                    <v-col cols="5" class="pb-0">
                        <v-select v-model="productSize" :items="productSizeOptions" label="Tamanho" required
                            variant="outlined" density="compact">
                        </v-select>
                    </v-col>
                    <v-col cols="5" class="pb-0">
                        <v-text-field v-model="productKind" label="Tipo" :rules="textFieldRules" required counter="100"
                            variant="outlined" density="compact">
                        </v-text-field>
                    </v-col>
                    <v-col cols="2" class="pb-0">
                        <v-text-field v-model="productQuantity" :rules="quantityRules" label="Quantidade" required
                            :disabled="false" variant="outlined" density="compact"></v-text-field>
                    </v-col>
                    <v-col cols="2" class="pb-0">
                        <v-select v-model="productGenre" :items="genreOptions" label="Genero" required variant="outlined"
                            density="compact"></v-select>
                    </v-col>
                    <v-col cols="2" class="pb-0">
                        <v-select v-model="productStation" :items="stationOptions" label="Estacao" required
                            variant="outlined" density="compact"></v-select>
                    </v-col>
                    <v-col cols="4" class="pb-0">
                        <v-text-field v-model="productColor" label="Cor" counter="50" variant="outlined"
                            density="compact"></v-text-field>
                    </v-col>
                    <v-col cols="4" class="pb-0">
                        <v-text-field v-model="productBrand" label="Marca" counter="100" required :disabled="false"
                            variant="outlined" density="compact"></v-text-field>
                    </v-col>
                    <v-col cols="12" class="pb-0">
                        <v-textarea v-model="productDescrition" label="Descricao" counter="500" variant="outlined"
                            density="compact"></v-textarea>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="9" class="pb-0">
                        <v-file-input class="full-height" v-model="productImages" variant="outlined"
                            prepend-icon="fa-solid fa-camera" accept="image/*" label="Anexe as imagens" show-size counter
                            multiple density="compact"></v-file-input>
                    </v-col>
                    <v-col cols="3" class="pb-0">
                        <v-text-field v-model="productPrice" label="Valor (R$)" required variant="outlined"
                            density="compact"></v-text-field>
                        <v-text-field v-model="productDescountPrice" label="Valor com desconto" required variant="outlined"
                            density="compact"></v-text-field>
                        <v-switch v-model="productDiscount" color="#FE7271" label="Produto com desconto"
                            density="compact"></v-switch>
                        <v-switch v-model="productAvailable" color="#FE7271" label="Produto disponivel"
                            density="compact"></v-switch>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" class="d-flex justify-end">
                        <v-btn color="grey" variant="outlined" class="font-family button-size ma-1">Cancelar</v-btn>
                        <v-btn class="button-style font-family button-size ma-1">Salvar</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "RegisterProduct",
    data() {
        return {
            productNumber: '',
            productName: '',
            productKind: '',
            productQuantity: '',
            productSize: '',
            productGenre: '',
            productStation: '',
            productDescrition: '',
            productImages: [],
            productColor: '',
            productBrand: '',
            productPrice: '',
            productDiscount: false,
            productAvailable: false,
            productDescountPrice: '',
            genreOptions: ["Masculino", "Feminino", "Unissex"],
            stationOptions: ["Primavera", "Verao", "Outono", "Inverno"],
            productSizeOptions: ["Extra pequeno PP", "Pequeno P", "Medio M", "Grande G", "Extra grande GG", "Sem tamanho definido"],

            productRules: [
                (value: string) => {
                    if (value) return true
                    return "Digite o codigo do produto."
                }
            ],
            nameRules: [
                (value: string) => {
                    if (value) return true;
                    return "Digite o nome do produto."
                }
            ],
            textFieldRules: [
                (value: string) => {
                    if (value) return true;
                    return "Digite o tipo."
                }
            ],
            quantityRules: [
                (value: string) => {
                    if (value) return true
                    return "Digite a quantidade."
                }
            ]
        }
    }
})
</script>

<style lang="scss" scoped>
$font-color: white;
$backgroud-primary-color: #FF7272;
$button-togle-color: #f69a9a;

.full-height {
    height: 100%;
}

.containerScroll {
    height: 100vh;
    box-sizing: border-box;
    overflow-y: scroll;
    overflow-x: hidden;
}

.button-style {
    background-color: $backgroud-primary-color;
    color: $font-color;
}

.button-size {
    min-width: 200px;
    font-size: 1.5em;
    text-transform: none;
    font-weight: 300;
}
</style>