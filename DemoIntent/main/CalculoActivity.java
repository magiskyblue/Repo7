package com.example.demointent; // Asegúrate de que sea tu paquete

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;

public class CalculoActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_calculo);

        TextView tvCalculo = findViewById(R.id.tvCalculo);
        Button btnVolver = findViewById(R.id.btnVolver);

        // 1. Recibir AMBOS números usando sus claves exactas
        int numero1 = getIntent().getIntExtra("CLAVE_NUMERO_1", 0);
        int numero2 = getIntent().getIntExtra("CLAVE_NUMERO_2", 0);
        int numero3 = getIntent().getIntExtra("CLAVE_NUMERO_3", 0);

        // 2. Realizar una operación con los dos números (ejemplo: suma)
        int resultado = numero1 + numero2 + numero3 ;

        // 3. Mostrar el resultado en pantalla
        tvCalculo.setText("La suma de " + numero1 + " y " + numero2 + "y numero 3"+ numero3 +" es: " + resultado);

        // Botón para volver al inicio
        btnVolver.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });
    }
}