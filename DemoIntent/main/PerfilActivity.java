package com.example.demointent; // Asegúrate de que este sea tu paquete

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;

public class PerfilActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_perfil);

        TextView tvPerfil = findViewById(R.id.tvPerfil);

        // 1. Enlazar el botón de volver
        Button btnVolver = findViewById(R.id.btnVolver);

        String nombre = getIntent().getStringExtra("CLAVE_NOMBRE");
        int edad = getIntent().getIntExtra("CLAVE_EDAD", 0);
        boolean premium = getIntent().getBooleanExtra("CLAVE_PREMIUM", false);

        String info = "Nombre: " + nombre + "\nEdad: " + edad + "\nPremium: " + premium;
        tvPerfil.setText(info);

        // 2. Programar el clic para volver al inicio
        btnVolver.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish(); // Esto cierra la actividad y regresa a la principal
            }
        });
    }
}