package com.example.layouts;

import android.os.Bundle;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class TableLayoutActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_table);
        setTitle("TableLayout");

        EditText etNombre = findViewById(R.id.etNombre);
        EditText etCorreo = findViewById(R.id.etCorreo);
        EditText etTelefono = findViewById(R.id.etTelefono);
        EditText etPassword = findViewById(R.id.etPassword);

        findViewById(R.id.btnLimpiar).setOnClickListener(v -> {
            EditText[] campos = {etNombre, etCorreo, etTelefono, etPassword};
            for (EditText campo : campos) {
                campo.setText("");
                campo.setError(null);
            }
            etNombre.requestFocus();
        });

        findViewById(R.id.btnEnviar).setOnClickListener(v -> {
            String nombre = etNombre.getText().toString().trim();
            String correo = etCorreo.getText().toString().trim();
            String telefono = etTelefono.getText().toString().trim();
            String password = etPassword.getText().toString();

            if (nombre.isEmpty()) {
                etNombre.setError("Escribe tu nombre");
                etNombre.requestFocus();
            } else if (!correo.contains("@")) {
                etCorreo.setError("Correo no válido");
                etCorreo.requestFocus();
            } else if (telefono.length() != 10) {
                etTelefono.setError("Deben ser 10 dígitos");
                etTelefono.requestFocus();
            } else if (password.length() < 6) {
                etPassword.setError("Mínimo 6 caracteres");
                etPassword.requestFocus();
            } else {
                Toast.makeText(this, "¡Registro enviado, " + nombre + "!",
                        Toast.LENGTH_SHORT).show();
            }
        });

        findViewById(R.id.btnVolver).setOnClickListener(v -> finish());
    }
}