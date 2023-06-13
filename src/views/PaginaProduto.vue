<template>
    <v-app>
        <v-container fluid class="pa-0 ma-0">
            <v-row class="h-screen pa-0 ma-0">
                <v-col cols="12" sm="5" md="3" lg="3" xl="2" class="bg-color-primary">
                    <SideBar></SideBar>
                </v-col>
                <v-col>
                    <SelledProducts></SelledProducts>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script lang="ts">
import SideBar from '@/components/SideBar.vue';
import SelledProducts from '@/components/SelledProducts.vue';
export default {
    name: "PaginaProduto",
    components: {
        SideBar,
        SelledProducts
    }
}
</script>
