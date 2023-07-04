<template>
    <v-container class="pa-10">
        <h2 class="d-flex justify-start font-family font-title">Pedidos</h2>
        <v-container>
            <v-row>
                <v-col :class="columnsStyle" :cols="columnsWidth[i]" v-for="name, i in columnsContent" :key="name">
                    <p>{{ columnsContent[i] }}</p>
                </v-col>
            </v-row>
            <v-row class="border-top">
            </v-row>
            <v-row v-for="dataClient, i in dataClients" :key="dataClient.id">
                <v-col :class="columnsStyle" :cols="columnsWidth[0]">
                    {{ formatDate(dataClients[i].dataDeVenda) }}
                </v-col>
                <v-col :class="columnsStyle" :cols="columnsWidth[1]">
                    {{ dataClients[i].cliente.nome }}
                </v-col>
                <v-col :class="columnsStyle" :cols="columnsWidth[2]">
                    {{ dataClients[i].produtos.length }}
                </v-col>
                <v-col :class="columnsStyle" :cols="columnsWidth[3]">
                    <span>R$</span>
                    <span class="more-space"> {{ dataClients[i].total.toFixed(2) }}</span>
                </v-col>
                <v-col :class="columnsStyle" :cols="columnsWidth[4]">
                    <v-btn @click="detailsPage(dataClients[i])" append-icon="fa-solid fa-arrow-right" class="rounded-cicle"
                        flat>
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script lang="ts">
import { VendaClient } from '@/client/VendaClient'
import { Venda } from '@/models/Venda'
import { defineComponent } from 'vue'
export default defineComponent({
    name: "SelledProducts",
    data() {
        return {
            columnsContent: ["DATA", "CLIENTE", "ITENS", "TOTAL", ""],
            columnsWidth: ["2", "4", "2", "2", "2"],
            columnsStyle: "d-flex justfy-start font-family font-size mb-0 pb-0",
            dataClients: [] as Venda[]
        }
    },
    methods: {
        requestServer() {
            new VendaClient('venda').getAll()
                .then((success: Venda[]) => {
                    this.dataClients = success
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
        },
        detailsPage(data: Venda) {
            this.$router.push({ name: 'detalhes-pedido', query: { id: data.id } })
        }
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
</style>
