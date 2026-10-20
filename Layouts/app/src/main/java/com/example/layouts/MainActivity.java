package com.example.layouts;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        setTitle("Layouts");

        View btnLinear = findViewById(R.id.btnLinear);
        View btnRelative = findViewById(R.id.btnRelative);
        View btnFrame = findViewById(R.id.btnFrame);
        View btnTable = findViewById(R.id.btnTable);

        btnLinear.setOnClickListener(v ->
                startActivity(new Intent(this, LinearLayoutActivity.class)));
        btnRelative.setOnClickListener(v ->
                startActivity(new Intent(this, RelativeLayoutActivity.class)));
        btnFrame.setOnClickListener(v ->
                startActivity(new Intent(this, FrameLayoutActivity.class)));
        btnTable.setOnClickListener(v ->
                startActivity(new Intent(this, TableLayoutActivity.class)));
    }
}