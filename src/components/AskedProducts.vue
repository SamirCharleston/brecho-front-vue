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
                <v-col :class="columnsStyle" :cols="columnsWidth[0]" density="compact">
                    {{ dataClients[i].date }}
                </v-col>
                <v-col :class="columnsStyle" :cols="columnsWidth[1]" density="compact">
                    {{ dataClients[i].product }}
                </v-col>
                <v-col :class="columnsStyle" :cols="columnsWidth[2]" density="compact">
                    {{ dataClients[i].quantity }}
                </v-col>
                <v-col :class="columnsStyle" :cols="columnsWidth[3]">
                    <span class="more-space">{{ dataClients[i].amount }}</span>
                </v-col>
                <v-col>
                    <v-switch :class="columnsStyle" :cols="columnsWidth[4]" color="#FF7272" density="compact" flat>
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
export default {
    name: "SelledProducts",
    data() {
        return {
            columnsContent: ["DATA", "PRODUTO", "QTD", "VALOR", "ATIVO", ""],
            columnsWidth: ["2", "4", "1", "2", "2", "1"],
            columnsStyle: "d-flex justify-center font-family font-size mb-0 pb-0 align-center",
            dataClients: [{
                id: "1",
                date: "05/06/2023",
                product: "Calca polo",
                quantity: "5",
                amount: "150,00",
                active: true
            },
            {
                id: "1",
                date: "05/06/2023",
                product: "Camisa jeans",
                quantity: "5",
                amount: "150,00",
                active: true
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
