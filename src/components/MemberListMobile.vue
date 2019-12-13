<template>
<div>
    <v-card dark color="grey" style="padding:1%;">
        <h1 style="margin-left:3%;">
            sk Bonobos
        </h1>
    </v-card>
     <v-row>
        <v-col v-for="(item) in members" :key="item">
        <v-card   class="mx-auto"  >
            <v-list shaped>
                    <v-list-item >
                        <v-list-item-icon  color="accent">
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
            </v-list>
        </v-card>             
        </v-col>
    </v-row>
</div>
</template>

<script>
export default {
    props: {
        members:Array
    }
}
</script>

<style>

</style>