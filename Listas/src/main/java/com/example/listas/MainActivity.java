package com.example.listas;

import android.graphics.Color;
import android.os.Bundle;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.view.WindowCompat;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Íconos claros en la barra de estado (el fondo es oscuro)
        WindowCompat.getInsetsController(getWindow(), getWindow().getDecorView())
                .setAppearanceLightStatusBars(false);

        RecyclerView rvPlanetas = findViewById(R.id.rvPlanetas);

        // POSICIONAMIENTO: lista vertical
        rvPlanetas.setLayoutManager(new LinearLayoutManager(this));

        List<Planeta> planetas = new ArrayList<>();
        planetas.add(new Planeta("Mercurio", "Planeta rocoso", "58 M km", "4,879 km de diámetro", "0",
                "Un año en Mercurio dura solo 88 días terrestres.", Color.parseColor("#9CA3AF")));
        planetas.add(new Planeta("Venus", "Planeta rocoso", "108 M km", "12,104 km de diámetro", "0",
                "Es el planeta más caliente, con unos 465 °C, y gira en sentido contrario a la mayoría.",
                Color.parseColor("#E8B04B")));
        planetas.add(new Planeta("Tierra", "Planeta rocoso", "150 M km", "12,742 km de diámetro", "1",
                "Es el único lugar donde sabemos que existe vida.", Color.parseColor("#3B82F6")));
        planetas.add(new Planeta("Marte", "Planeta rocoso", "228 M km", "6,779 km de diámetro", "2",
                "Tiene el Monte Olimpo, el volcán más alto conocido del sistema solar.",
                Color.parseColor("#EF4444")));
        planetas.add(new Planeta("Júpiter", "Gigante gaseoso", "778 M km", "139,820 km de diámetro", "90+",
                "Su Gran Mancha Roja es una tormenta más grande que la Tierra.",
                Color.parseColor("#D6A36A")));
        planetas.add(new Planeta("Saturno", "Gigante gaseoso", "1,434 M km", "116,460 km de diámetro", "200+",
                "Sus famosos anillos están hechos de hielo y roca.", Color.parseColor("#E5C97B")));
        planetas.add(new Planeta("Urano", "Gigante helado", "2,871 M km", "50,724 km de diámetro", "25+",
                "Gira prácticamente acostado sobre su costado.", Color.parseColor("#67E8F9")));
        planetas.add(new Planeta("Neptuno", "Gigante helado", "4,495 M km", "49,244 km de diámetro", "10+",
                "Tiene vientos de más de 2,000 km/h, los más rápidos del sistema solar.",
                Color.parseColor("#6366F1")));

        rvPlanetas.setAdapter(new PlanetaAdapter(planetas, this::mostrarDato));
    }

    private void mostrarDato(Planeta planeta) {
        new AlertDialog.Builder(this)
                .setTitle(planeta.getNombre())
                .setMessage(planeta.getDato())
                .setPositiveButton("Cerrar", null)
                .show();
    }
}