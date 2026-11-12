package com.example.fakewhatsapp;

import android.os.Bundle;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ContactosActivity extends AppCompatActivity {

    private RecyclerView recyclerView;
    private ContactosAdapter adapter;
    private SupabaseApi api;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_contactos);

        // 1. Vincular el RecyclerView del diseño XML
        recyclerView = findViewById(R.id.recyclerViewContactos);

        // 2. Definir cómo se mostrarán los elementos (en lista vertical)
        recyclerView.setLayoutManager(new LinearLayoutManager(this));

        // 3. Inicializar el cliente de Retrofit
        api = SupabaseClient.getClient().create(SupabaseApi.class);

        // 4. Llamar al método para descargar los datos
        cargarContactos();
    }

    private void cargarContactos() {
        api.obtenerPerfiles().enqueue(new Callback<List<Perfil>>() {
            @Override
            public void onResponse(Call<List<Perfil>> call, Response<List<Perfil>> response) {
                // Si la petición es exitosa y trae datos
                if (response.isSuccessful() && response.body() != null) {
                    List<Perfil> listaPerfiles = response.body();

                    // Inicializamos el adaptador con la lista descargada
                    adapter = new ContactosAdapter(listaPerfiles);

                    // Vinculamos el adaptador al RecyclerView para que dibuje la lista
                    recyclerView.setAdapter(adapter);
                } else {
                    Toast.makeText(ContactosActivity.this, "Error al cargar contactos: " + response.code(), Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<List<Perfil>> call, Throwable t) {
                Toast.makeText(ContactosActivity.this, "Error de red: " + t.getMessage(), Toast.LENGTH_SHORT).show();
            }
        });
    }
}