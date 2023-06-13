<template>
    <v-container>
        <h2 class="d-flex justify-start font-family font-title">Produtos Vendidos</h2>
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
                    {{ dataClients[i].date }}
                </v-col>
                <v-col :class="columnsStyle" :cols="columnsWidth[1]">
                    {{ dataClients[i].name }}
                </v-col>
                <v-col :class="columnsStyle" :cols="columnsWidth[2]">
                    {{ dataClients[i].itens }}
                </v-col>
                <v-col :class="columnsStyle" :cols="columnsWidth[3]">
                    <span class="more-space">{{ dataClients[i].total }}</span>
                    <v-btn append-icon="fa-solid fa-arrow-right" class="rounded-cicle" flat>
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script lang="ts">
export default {
    name: "SelledProducts",
    data() {
        return {
            columnsContent: ["DATA", "CLIENTE", "ITENS", "TOTAL"],
            columnsWidth: ["2", "56", "2", "2"],
            columnsStyle: "d-flex justfy-start font-family font-size mb-0 pb-0",
            dataClients: [{
                id: "1",
                date: "05/06/2023",
                name: "Maria Joaquina",
                itens: "5",
                total: "150,00"
            },
            {
                id: "2",
                date: "05/06/2023",
                name: "Samir Cavalcante",
                itens: "8",
                total: "220,00"
            }
            ]
        }
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
