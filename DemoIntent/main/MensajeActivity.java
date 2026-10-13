package com.example.demointent; // Recuerda usar tu paquete

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;

public class MensajeActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_mensaje);

        TextView tvMensaje = findViewById(R.id.tvMensaje);
        Button btnVolver = findViewById(R.id.btnVolver); // Enlazamos el botón

        String textoRecibido = getIntent().getStringExtra("CLAVE_MENSAJE");

        if (textoRecibido != null) {
            tvMensaje.setText(textoRecibido);
        }

        // Programamos el botón para cerrar esta pantalla
        btnVolver.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish(); // Cierra MensajeActivity y te devuelve a MainActivity
            }
        });
    }
}