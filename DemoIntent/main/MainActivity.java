package com.example.demointent; // Asegúrate de que coincida con tu paquete

import android.content.Intent;
import android.os.Bundle;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button btnMensaje = findViewById(R.id.btnMensaje);
        Button btnCalculo = findViewById(R.id.btnCalculo);
        Button btnPerfil = findViewById(R.id.btnPerfil);

        // Botón 1: Envía un String
        btnMensaje.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, MensajeActivity.class);
                intent.putExtra("CLAVE_MENSAJE", "¡Hola desde la Actividad Principal!");
                startActivity(intent);
            }
        });

        btnCalculo.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, CalculoActivity.class);

                // Enviamos el primer número
                intent.putExtra("CLAVE_NUMERO_1", 50);

                // Agregamos esta nueva línea para enviar un segundo número
                intent.putExtra("CLAVE_NUMERO_2", 25);

                intent.putExtra("ClAVE_NUMERO_3", 21);

                startActivity(intent);
            }
        });

        // Botón 3: Envía múltiples tipos de datos
        btnPerfil.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, PerfilActivity.class);
                intent.putExtra("CLAVE_NOMBRE", "Carlos");
                intent.putExtra("CLAVE_EDAD", 30);
                intent.putExtra("CLAVE_PREMIUM", true);
                startActivity(intent);
            }
        });
    }
}