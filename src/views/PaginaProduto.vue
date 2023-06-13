<template>
    <v-app>
        <v-container fluid class="pa-0 ma-0">
            <v-row class="h-screen pa-0 ma-0">
                <v-col cols="12" sm="5" md="3" lg="3" xl="2" class="bg-color-primary">
                    <SideBar></SideBar>
                </v-col>
                <v-col>
                    <router-link to="/pagina-do-produto">Clique</router-link>
                    <router-view></router-view>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import SideBar from '@/components/SideBar.vue';

export default defineComponent({
    name: 'PaginaProduto',
    components: {
        SideBar,
        RouterLink,
        RouterView,
    },
    methods: {
        modify() {
            RouterLink.apply;
        }
    }
});
</script>
  
