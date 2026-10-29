
package com.example.sensorapp;

import android.content.Intent;
import android.os.Bundle;
import android.view.MenuItem;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.splashscreen.SplashScreen;
import androidx.core.view.GravityCompat;
import androidx.drawerlayout.widget.DrawerLayout;

import com.google.android.material.appbar.MaterialToolbar;
import com.google.android.material.navigation.NavigationView;

public class MainActivity extends AppCompatActivity {

    private DrawerLayout drawerLayout;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.installSplashScreen(this);
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        drawerLayout = findViewById(R.id.drawerLayout);

        MaterialToolbar toolbar = findViewById(R.id.toolbar);
        NavigationView navigationView =
                findViewById(R.id.navigationView);

        toolbar.setNavigationOnClickListener(v ->
                drawerLayout.openDrawer(GravityCompat.START));

        navigationView.setNavigationItemSelectedListener(item -> {
            abrirPantalla(item);

            if (drawerLayout.isDrawerOpen(GravityCompat.START)) {
                drawerLayout.closeDrawer(GravityCompat.START);
            }

            return true;
        });
    }

    private void abrirPantalla(@NonNull MenuItem item) {
        int id = item.getItemId();
        Intent intent = null;

        if (id == R.id.nav_inicio) {
            return;
        } else if (id == R.id.nav_acelerometro) {
            intent = new Intent(this, AcelerometroActivity.class);
        } else if (id == R.id.nav_giroscopio) {
            intent = new Intent(this, GiroscopioActivity.class);
        } else if (id == R.id.nav_gps) {
            intent = new Intent(this, GpsActivity.class);
        } else if (id == R.id.nav_magnetometro) {
            intent = new Intent(this, MagnetometroActivity.class);
        }

        if (intent != null) {
            startActivity(intent);
        }
    }

    @Override
    public void onBackPressed() {
        if (drawerLayout != null &&
                drawerLayout.isDrawerOpen(GravityCompat.START)) {
            drawerLayout.closeDrawer(GravityCompat.START);
        } else {
            super.onBackPressed();
        }
    }
}
