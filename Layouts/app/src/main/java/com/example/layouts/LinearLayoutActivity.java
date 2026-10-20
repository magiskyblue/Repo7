package com.example.layouts;

import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

public class LinearLayoutActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_linear);
        setTitle("LinearLayout");

        findViewById(R.id.btnVolver).setOnClickListener(v -> finish());
    }
}