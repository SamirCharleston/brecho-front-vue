<template>
    <v-container class="pa-10">
        <h2 class="d-flex justify-start font-family font-title">Detalhes do Pedido</h2>
        <v-container>
            <v-row>
                <v-col class="text-start font-family font-size">
                    <span>CLIENTE</span>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="auto">
                    <span class="font-family font-size">Nome: {{ cliente.nome }}</span>
                </v-col>
                <v-col cols="auto">
                    <span class="font-family font-size">Telefone: {{ cliente.telefone }}</span>
                </v-col>
                <v-col cols="auto">
                    <span class="font-family font-size">Email: {{ cliente.email }}</span>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="text-start font-family font-size">
                    <span>ENDEREÇO</span>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="auto">
                    <span class="font-family font-size">CEP: {{ cliente.cep }}</span>
                </v-col>
                <v-col cols="auto">
                    <span class="font-family font-size">Logradouro: {{ cliente.logradouro }}</span>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="auto">
                    <span class="font-family font-size">Bairro: {{ cliente.bairro }}</span>
                </v-col>
                <v-col cols="auto">
                    <span class="font-family font-size">Numero: {{ cliente.numResidencia }}</span>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="auto">
                    <span class="font-family font-size">Ponto de referência: {{ cliente.pontoReferencia }}</span>
                </v-col>
            </v-row>
            <v-row class="border-top"></v-row>
            <v-row>
                <v-col class="text-start font-family font-size">
                    <span>PRODUTOS</span>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-table class="font-family font-size">
                        <thead>
                            <th>ITEM</th>
                            <th>PRODUTO</th>
                            <th>QNT</th>
                            <th>TIPO DE PAGAMENTO</th>
                            <th>VALOR</th>
                            <th>ENTREGUE</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>

                                </td>
                                <td>

                                </td>
                                <td>

                                </td>
                                <td>

                                </td>
                                <td>

                                </td>
                                <td>

                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3">
                    <v-switch class="font-family" color="#FF7272" density="compact" flat label="Pagamento confirmado">
                    </v-switch>
                    
                </v-col>
                <v-col cols="3">
                    <v-switch class="font-family" color="#FF7272" density="compact" flat label="Confirmação da venda">
                    </v-switch>
                </v-col>
            </v-row>
            
            <v-row class="flex-column">
                <v-col offset="3">
                    <span class="font-family font-size">VALOR TOTAL: </span>
                </v-col>
                <v-col offset="3">
                    <v-btn color="grey" variant="outlined"
                            class="font-family button-size ma-1">Voltar</v-btn>
                    <v-btn class="button-style font-family button-size ma-1">Imprimir</v-btn>
                </v-col>
            </v-row>
            
           
           
        </v-container>
    </v-container>
</template>

<script lang="ts">
import { Cliente } from '@/models/Cliente';




export default{
    name: "SelledProductsDetails",
    data(){
        return{
            cliente: new Cliente
        }
    },
    methods:{
        atribuir(){
            
        }
    },
    mounted: function()
    {
        this.cliente.nome = "Lucas";
    }
}
</script>

<style lang="scss" scoped>

$font-color: white;
$backgroud-primary-color: #FF7272;
$button-togle-color: #f69a9a;


.font-size {
    font-size: 1.5em;
}

.border-top {
    border-top: solid 1px black;
}

.more-space {
    width: 70%;
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
