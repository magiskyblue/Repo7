
package com.example.sensorapp;

import android.hardware.Sensor;

public class AcelerometroActivity extends SensorBaseActivity {

    @Override
    protected int tipoSensor() {
        return Sensor.TYPE_ACCELEROMETER;
    }

    @Override
    protected String titulo() {
        return "Demo: Acelerómetro";
    }

    @Override
    protected String unidad() {
        return "m/s²";
    }
}
