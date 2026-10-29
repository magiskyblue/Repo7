
package com.example.sensorapp;

import android.hardware.Sensor;

public class GiroscopioActivity extends SensorBaseActivity {

    @Override
    protected int tipoSensor() {
        return Sensor.TYPE_GYROSCOPE;
    }

    @Override
    protected String titulo() {
        return "Demo: Giroscopio";
    }

    @Override
    protected String unidad() {
        return "rad/s";
    }
}
