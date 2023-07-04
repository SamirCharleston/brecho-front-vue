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
                <v-progress-linear indeterminate :color="loaderColor" height="1px" v-if="showLoader"></v-progress-linear>
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
                    <v-switch @click="changeStatus(dataProducts[i])" v-model="dataProducts[i].status"
                        :class="columnsStyle + ' justify-center'" :cols="columnsWidth[4]" color="#FF7272" density="compact"
                        flat>
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
import { defineComponent } from 'vue'

export default defineComponent({
    name: "SelledProducts",
    data() {
        return {
            client: new ProdutoClient('produto'),
            dataProducts: [] as Produto[],
            columnsContent: ["DATA", "PRODUTO", "QTD", "VALOR", "ATIVO", ""],
            columnsWidth: ["2", "4", "2", "1", "2", "1"],
            columnsStyle: "d-flex justify-start font-family font-size mb-0 pb-0 align-center",
            loaderColor: '#FF7272',
            showLoader: false,
        }
    },
    methods: {
        requestServer() {
            this.showLoader = true
            this.loaderColor = '#FF7272'
            this.client.getAll()
                .then((success: Produto[]) => {
                    this.dataProducts = success
                }).catch((err) => {
                    this.loaderColor = 'red'
                }).finally(() => {
                    setTimeout(() => this.showLoader = false, 1000)
                })
        },
        sendToServer(product: Produto) {
            product.status = !product.status
            console.log(product.status)
            this.showLoader = true
            this.loaderColor = '#FF7272'
            this.client.editar(product.id, product)
                .catch(() => this.loaderColor = 'red')
                .finally(() => {
                    setTimeout(() => this.showLoader = false, 1000)
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
        },
        changeStatus(product: Produto) {
            this.sendToServer(product)
        },
    },
    mounted() {
        this.requestServer()
    }
})
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

.transition-1s {
    transition: all 1s;
}

.opacity-1 {
    opacity: 1;
}

.opacity-0 {
    opacity: 0;
}

.color-red {
    background-color: red;
}
</style>
