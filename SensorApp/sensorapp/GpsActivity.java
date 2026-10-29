
package com.example.sensorapp;

import android.Manifest;
import android.app.Activity;
import android.content.Context;
import android.content.pm.PackageManager;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.Bundle;
import android.os.Looper;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.core.app.ActivityCompat;

public class GpsActivity extends Activity {

    private static final int CODIGO_PERMISO = 100;

    private TextView datos;
    private LocationManager manager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        LinearLayout layout = new LinearLayout(this);
        layout.setOrientation(LinearLayout.VERTICAL);
        layout.setPadding(32, 48, 32, 32);

        TextView titulo = new TextView(this);
        titulo.setText("Demo: GPS");
        titulo.setTextSize(26);

        datos = new TextView(this);
        datos.setTextSize(18);
        datos.setPadding(0, 32, 0, 32);
        datos.setText("Pulsa el botón para obtener tu ubicación.");

        Button boton = new Button(this);
        boton.setText("Obtener ubicación");

        layout.addView(titulo);
        layout.addView(datos);
        layout.addView(boton);

        setContentView(layout);

        manager = (LocationManager)
                getSystemService(Context.LOCATION_SERVICE);

        boton.setOnClickListener(v -> obtenerUbicacion());
    }

    private boolean tienePermiso() {
        return ActivityCompat.checkSelfPermission(
                this, Manifest.permission.ACCESS_FINE_LOCATION)
                == PackageManager.PERMISSION_GRANTED
                || ActivityCompat.checkSelfPermission(
                this, Manifest.permission.ACCESS_COARSE_LOCATION)
                == PackageManager.PERMISSION_GRANTED;
    }

    private void obtenerUbicacion() {
        if (!tienePermiso()) {
            ActivityCompat.requestPermissions(
                    this,
                    new String[]{
                            Manifest.permission.ACCESS_FINE_LOCATION,
                            Manifest.permission.ACCESS_COARSE_LOCATION
                    },
                    CODIGO_PERMISO
            );
            return;
        }

        try {
            if (!manager.isProviderEnabled(
                    LocationManager.GPS_PROVIDER)) {
                datos.setText(
                        "Activa la ubicación del teléfono e inténtalo de nuevo."
                );
                return;
            }

            datos.setText("Buscando ubicación GPS...");

            LocationListener listener = new LocationListener() {
                @Override
                public void onLocationChanged(
                        @NonNull Location location) {
                    mostrarUbicacion(location);
                }

                @Override
                public void onProviderEnabled(
                        @NonNull String provider) {
                }

                @Override
                public void onProviderDisabled(
                        @NonNull String provider) {
                    datos.setText("El GPS está desactivado.");
                }
            };

            manager.requestSingleUpdate(
                    LocationManager.GPS_PROVIDER,
                    listener,
                    Looper.getMainLooper()
            );

        } catch (SecurityException e) {
            datos.setText("No se concedió el permiso de ubicación.");
        } catch (IllegalArgumentException e) {
            datos.setText("El proveedor GPS no está disponible.");
        }
    }

    private void mostrarUbicacion(Location location) {
        datos.setText(String.format(
                java.util.Locale.getDefault(),
                "Ubicación obtenida\n\nLatitud: %.6f\nLongitud: %.6f\nPrecisión: %.1f metros",
                location.getLatitude(),
                location.getLongitude(),
                location.getAccuracy()
        ));
    }

    @Override
    public void onRequestPermissionsResult(
            int requestCode,
            @NonNull String[] permissions,
            @NonNull int[] grantResults) {

        super.onRequestPermissionsResult(
                requestCode, permissions, grantResults);

        if (requestCode == CODIGO_PERMISO) {
            if (tienePermiso()) {
                obtenerUbicacion();
            } else {
                datos.setText(
                        "Permiso denegado. No se puede obtener la ubicación."
                );
            }
        }
    }
}
