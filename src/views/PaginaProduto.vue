<template>
    <v-app>
        <v-container fluid class="pa-0 ma-0">
            <v-row class="h-screen pa-0 ma-0">
                <v-col cols="12" sm="5" md="3" lg="3" xl="2" class="bg-color-primary">
                    <SideBar></SideBar>
                </v-col>
                <v-col>
                    <router-link to="/pagina-do-produto"><v-btn flat variant="outlined">Listar</v-btn></router-link>
                    <router-view></router-view>
                    <!-- <slot>
                    </slot> -->
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import SideBar from '@/components/SideBar.vue';
// import PaginaProduto from '@/components/PaginaProduto.vue'

export default defineComponent({
    name: 'PaginaProduto',
    components: {
        SideBar,
        // PaginaProduto
        RouterLink,
        RouterView,
    }
});
</script>