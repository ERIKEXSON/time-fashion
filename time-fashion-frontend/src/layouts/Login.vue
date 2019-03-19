<template>
    <div id="app">
        <v-app id="inspire">
            <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                    <v-toolbar style="background-color:#6a1b9a">
                        <div style="width:417.66px; text-align:center">
                            <v-toolbar-title style="color:white">Ingresa tu usuario y contraseña</v-toolbar-title>
                        </div>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                        <v-text-field prepend-icon="person" name="login" label="Usuario" type="text" color="#6a1b9a"></v-text-field>
                        <v-text-field prepend-icon="lock" name="password" label="Contraseña" id="password" type="password" color="#6a1b9a"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <div style="width: 417.66px; text-align:center">
                            <v-btn style="background-color:#6a1b9a; color:white">Ingresar</v-btn>
                            <v-btn>Crear cuenta</v-btn>
                        </div>
                    </v-card-actions>
                    </v-card>
                </v-flex>
                </v-layout>
            </v-container>
            </v-content>
        </v-app>
    </div>
</template>
