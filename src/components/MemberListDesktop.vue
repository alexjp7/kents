<template>
   <v-col  :cols="2" >
        <v-card   class="mx-auto"  >
            <v-list shaped >
                <v-subheader>sK Bonobos</v-subheader>
                <v-list-item-group v-model="item" >
                    <v-list-item v-for="(item, i) in members" :key="i">
                        <v-list-item-icon >
                            <v-icon  color="accent" v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content >
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-card>             
    </v-col>
</template>

<script>
export default {
    props: {
        members:Array,
    }

}
</script>

<style>

</style>