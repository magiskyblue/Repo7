package com.example.fakewhatsapp;

import okhttp3.Interceptor;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class SupabaseClient {


    private static final String BASE_URL = "https://mliftcpnjcpxqknpwqdg.supabase.co/rest/v1/";
    private static final String API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1saWZ0Y3BuamNweHFrbnB3cWRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQyNzI2MjgsImV4cCI6MjEwOTg0ODYyOH0.I23k5kTcuSZLueceimBzAx9pQ-pinAxgTfpsPATAwB8";

    private static Retrofit retrofit = null;

    public static Retrofit getClient() {
        if (retrofit == null) {
            OkHttpClient client = new OkHttpClient.Builder().addInterceptor(chain -> {
                Request newRequest = chain.request().newBuilder()
                        .addHeader("apikey", API_KEY)
                        .addHeader("Authorization", "Bearer " + API_KEY)
                        .addHeader("Prefer", "return=representation")
                        .build();
                return chain.proceed(newRequest);
            }).build();

            retrofit = new Retrofit.Builder()
                    .baseUrl(BASE_URL)
                    .client(client)
                    .addConverterFactory(GsonConverterFactory.create())
                    .build();
        }
        return retrofit;
    }
}