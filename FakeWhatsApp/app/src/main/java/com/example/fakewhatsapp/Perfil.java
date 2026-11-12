package com.example.fakewhatsapp;

import com.google.gson.annotations.SerializedName;

public class Perfil {
    // Los nombres en "SerializedName" deben coincidir exactamente con las columnas de tu base de datos en Supabase

    @SerializedName("id")
    private String id;

    @SerializedName("nombre_usuario")
    private String nombreUsuario;

    @SerializedName("foto_url")
    private String fotoUrl;

    // Getters para obtener los datos
    public String getId() {
        return id;
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public String getFotoUrl() {
        return fotoUrl;
    }
}