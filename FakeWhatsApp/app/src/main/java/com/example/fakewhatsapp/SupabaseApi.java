package com.example.fakewhatsapp;

import com.google.gson.JsonObject;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;

public interface SupabaseApi {

    // Endpoint para registrar un nuevo usuario
    @POST("/auth/v1/signup")
    Call<JsonObject> signUp(@Body JsonObject credentials);

    // Endpoint para iniciar sesión
    @POST("/auth/v1/token?grant_type=password")
    Call<JsonObject> signIn(@Body JsonObject credentials);

    // NUEVO: Endpoint para obtener todos los perfiles de la base de datos
    @GET("perfiles?select=*")
    Call<List<Perfil>> obtenerPerfiles();
}