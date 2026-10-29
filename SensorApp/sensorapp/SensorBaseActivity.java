
package com.example.sensorapp;

import android.content.Context;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.os.Bundle;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public abstract class SensorBaseActivity extends AppCompatActivity
        implements SensorEventListener {

    private SensorManager manager;
    private Sensor sensor;
    private TextView datos;

    protected abstract int tipoSensor();
    protected abstract String titulo();

    protected String unidad() {
        return "";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        LinearLayout layout = new LinearLayout(this);
        layout.setOrientation(LinearLayout.VERTICAL);
        layout.setPadding(32, 48, 32, 32);

        TextView encabezado = new TextView(this);
        encabezado.setText(titulo());
        encabezado.setTextSize(26);

        datos = new TextView(this);
        datos.setTextSize(20);
        datos.setPadding(0, 32, 0, 0);

        layout.addView(encabezado);
        layout.addView(datos);
        setContentView(layout);

        manager = (SensorManager)
                getSystemService(Context.SENSOR_SERVICE);

        sensor = manager.getDefaultSensor(tipoSensor());

        if (sensor == null) {
            datos.setText("Este sensor no está disponible.");
        } else {
            datos.setText("Mueve el teléfono para ver los valores.");
        }
    }

    @Override
    protected void onResume() {
        super.onResume();

        if (sensor != null) {
            manager.registerListener(
                    this, sensor, SensorManager.SENSOR_DELAY_UI);
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        manager.unregisterListener(this);
    }

    @Override
    public void onSensorChanged(SensorEvent event) {
        if (datos == null || sensor == null) {
            return;
        }

        String unidadActual = unidad();

        datos.setText(String.format(
                java.util.Locale.getDefault(),
                "Eje X: %.2f %s\nEje Y: %.2f %s\nEje Z: %.2f %s",
                event.values[0], unidadActual,
                event.values[1], unidadActual,
                event.values[2], unidadActual
        ));
    }

    @Override
    public void onAccuracyChanged(Sensor sensor, int accuracy) {
        // No necesitamos realizar ninguna acción aquí.
    }
}
