<template>
    <div class="containerScroll pa-10">
        <v-form @submit.prevent fast-fail>
            <v-container>
                <v-row>
                    <v-col class="d-flex justify-start">
                        <h2 class="font-family font-title">Cadastrar Produto</h2>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="3" class="pb-0">
                        <v-text-field v-model="produto.codigo" :rules="productRules" label="Codigo" counter="10" required
                            :disabled="false" variant="outlined" density="compact"></v-text-field>
                    </v-col>
                    <v-col cols="9" class="pb-0">
                        <v-text-field v-model="produto.nome" :rules="nameRules" counter="50" required
                            label="Nome do produto" variant="outlined" density="compact"></v-text-field>
                    </v-col>
                    <v-col cols="4" class="pb-0">
                        <v-select v-model="produto.tamanho" :items="productSizeOptions" label="Tamanho" required
                            variant="outlined" density="compact">
                        </v-select>
                    </v-col>
                    <v-col cols="2" class="pb-0">
                        <v-text-field v-model="produto.quantidade" :rules="quantityRules" label="Quantidade" required
                            :disabled="false" variant="outlined" density="compact"></v-text-field>
                    </v-col>
                    <v-col cols="2" class="pb-0">
                        <v-text-field v-model="produto.cor" label="Cor" counter="50" variant="outlined"
                            density="compact"></v-text-field>
                    </v-col>
                    <v-col cols="4" class="pb-0">
                        <v-text-field v-model="produto.marca" label="Marca" counter="100" required :disabled="false"
                            variant="outlined" density="compact">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" class="pb-0">
                        <v-text-field v-model="produto.tipo" label="Tipo" counter="50" variant="outlined" density="compact">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" class="pb-0">
                        <v-textarea v-model="produto.descricao" label="Descricao" counter="500" variant="outlined"
                            density="compact">
                        </v-textarea>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="9" class="pb-0">
                        <v-text-field v-model="produto.fotosDoProduto" label="Link da foto do produto" required
                            variant="outlined" density="compact"></v-text-field>
                    </v-col>
                    <v-col cols="3" class="pb-0">
                        <v-text-field v-model="produto.valorAtual" label="Valor (R$)" required variant="outlined"
                            density="compact"></v-text-field>
                        <v-text-field v-model="produto.valorAnterior" label="Valor com desconto" required variant="outlined"
                            density="compact"></v-text-field>
                        <v-switch v-model="produto.emPromocao" color="#FE7271" label="Produto em promocao"
                            density="compact"></v-switch>
                        <v-switch v-model="produto.disponibilidade" color="#FE7271" label="Produto disponivel"
                            density="compact"></v-switch>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" class="d-flex justify-end">
                        <v-btn @click="clearFields" color="grey" variant="outlined"
                            class="font-family button-size ma-1">Cancelar</v-btn>
                        <v-btn @click="sendToServer" class="button-style font-family button-size ma-1">Salvar</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { ProdutoClient } from '@/client/ProdutoClient'
import { Produto } from '@/models/Produto'
import { Tipo } from '@/models/Tipo'
import { TipoClient } from '@/client/TipoClient'

export default defineComponent({
    name: "RegisterProduct",
    data() {
        return {
            produto: new Produto,
            genreOptions: ["Masculino", "Feminino", "Unissex"],
            stationOptions: ["Primavera", "Verão", "Outono", "Inverno"],
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
    },
    methods: {
        clearFields() {
        },
        sendToServer() {
            // console.log(this.produto.fotosDoProduto)
            new ProdutoClient('produto')
                .cadastrar(this.produto)
                .then((success: any) => {
                    console.log(success)
                }).catch((err: any) => {
                    console.log(err)
                })
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