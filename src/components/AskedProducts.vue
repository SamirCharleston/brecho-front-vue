<template>
    <v-container class="pa-10">
        <h2 class="d-flex justify-start font-family font-title">Produtos</h2>
        <v-container>
            <v-row>
                <v-col :class="name === 'ATIVO' ? columnsStyle + ' justify-center' : columnsStyle" :cols="columnsWidth[i]"
                    v-for="name, i in columnsContent" :key="name">
                    <p>{{ columnsContent[i] }}</p>
                </v-col>
            </v-row>
            <v-row class="border-top">
            </v-row>
            <v-row v-for="dataClient, i in dataProducts" :key="dataClient.id">
                <v-col :class="columnsStyle" :cols="columnsWidth[0]" density="compact">
                    {{ formatDate(dataProducts[i].dataCriacao) }}
                </v-col>
                <v-col :class="columnsStyle" :cols="columnsWidth[1]" density="compact">
                    {{ dataProducts[i].nome }}
                </v-col>
                <v-col :class="columnsStyle" :cols="columnsWidth[2]" density="compact">
                    {{ dataProducts[i].quantidade }}
                </v-col>
                <v-col :class="columnsStyle" :cols="columnsWidth[3]">
                    <span>R$ </span>
                    <span class="more-space">{{ dataProducts[i].valorAtual.toFixed(2) }}</span>
                </v-col>
                <v-col>
                    <v-switch @change="" v-model="dataProducts[i].status" :class="columnsStyle + ' justify-center'"
                        :cols="columnsWidth[4]" color="#FF7272" density="compact" flat>
                    </v-switch>
                </v-col>
                <v-col :class="columnsStyle" :cols="columnsWidth[5]" density="compact">
                    <v-btn append-icon="fa-solid fa-arrow-right" class="rounded-cicle" flat>
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script lang="ts">
import { ProdutoClient } from '@/client/ProdutoClient'
import { Produto } from '@/models/Produto'

export default {
    name: "SelledProducts",
    data() {
        return {
            dataProducts: [] as Produto[],
            columnsContent: ["DATA", "PRODUTO", "QTD", "VALOR", "ATIVO", ""],
            columnsWidth: ["2", "4", "2", "1", "2", "1"],
            columnsStyle: "d-flex justify-start font-family font-size mb-0 pb-0 align-center",
        }
    },
    methods: {
        requestServer() {
            new ProdutoClient('produto').getAll()
                .then((success: Produto[]) => {
                    this.dataProducts = success
                }).catch((err) => {
                    console.log(err)
                })
        },
        formatDate(date: Date) {
            if (date !== null) {
                const entradaData = new Date(date).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                })
                return entradaData;
            }
            return ''
        }
    },
    mounted() {
        this.requestServer()
    }
}
</script>

<style lang="scss" scoped>
.font-size {
    font-size: 1.5em;
}

.border-top {
    border-top: solid 1px black;
}

.more-space {
    width: 70%;
}
</style>
