
package com.example.sensorapp;

import android.hardware.Sensor;

public class MagnetometroActivity extends SensorBaseActivity {

    @Override
    protected int tipoSensor() {
        return Sensor.TYPE_MAGNETIC_FIELD;
    }

    @Override
    protected String titulo() {
        return "Demo: Magnetómetro";
    }

    @Override
    protected String unidad() {
        return "µT";
    }
}
