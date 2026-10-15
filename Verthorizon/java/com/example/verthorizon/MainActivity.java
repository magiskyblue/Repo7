package com.example.verthorizon; // usa el paquete de tu proyecto

import android.os.Bundle;
import android.util.Log;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private static final String TAG = "CicloDeVida";

    private EditText etDato;
    private Button btnMostrar;
    private TextView tvResultado;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        etDato = findViewById(R.id.etDato);
        btnMostrar = findViewById(R.id.btnMostrar);
        tvResultado = findViewById(R.id.tvResultado);

        // Captura el texto del EditText y lo muestra en el TextView
        btnMostrar.setOnClickListener(v -> {
            String dato = etDato.getText().toString();
            tvResultado.setText("Hola, " + dato);
        });

        avisar("onCreate()");
    }

    @Override
    protected void onStart() {
        super.onStart();
        avisar("onStart()");
    }

    @Override
    protected void onResume() {
        super.onResume();
        avisar("onResume()");
    }

    @Override
    protected void onPause() {
        super.onPause();
        avisar("onPause()");
    }

    @Override
    protected void onStop() {
        super.onStop();
        avisar("onStop()");
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        avisar("onRestart()");
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        avisar("onDestroy()");
    }

    // Muestra un Toast en pantalla y también lo escribe en Logcat
    private void avisar(String metodo) {
        Toast.makeText(this, metodo, Toast.LENGTH_SHORT).show();
        Log.d(TAG, metodo);
    }
}