package com.example.es2lab8;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import android.Manifest;
import android.annotation.SuppressLint;
import android.content.pm.PackageManager;
import android.location.Location;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.TextView;

import com.google.android.gms.location.FusedLocationProviderClient;
import com.google.android.gms.location.LocationServices;
import com.google.android.gms.tasks.OnSuccessListener;

import org.w3c.dom.Text;

public class MainActivity extends AppCompatActivity {
    private static final int  MY_PERMISSION_REQUEST_ACCESS_FINE_LOCATION = 0;
    private FusedLocationProviderClient fusedLocationProviderClient;
    private TextView latitude;
    private TextView longitude;
    private TextView precision;

    public static final int BOTTOM = 0x00000050;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        latitude = findViewById(R.id.latitude);
        longitude = findViewById(R.id.longitude);
        precision = findViewById(R.id.precision);

        fusedLocationProviderClient = LocationServices.getFusedLocationProviderClient(this);

        if(ContextCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED){
            Log.d("TAG", "i prmessi non sono ancora stati concessi");
            ActivityCompat.requestPermissions(this,
                    new String[]{Manifest.permission.ACCESS_FINE_LOCATION},
                    MY_PERMISSION_REQUEST_ACCESS_FINE_LOCATION);
        } else {
            Log.d("TAG", "i permessi sono già stati concessi");
            getLastLocation();
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        switch (requestCode){
            case MY_PERMISSION_REQUEST_ACCESS_FINE_LOCATION:{
                if (grantResults.length > 0
                    && grantResults[0] == PackageManager.PERMISSION_GRANTED){
                    Log.d("TAG", "ora abbiamo i permessi");
                    getLastLocation();
                } else {
                    Log.d("TAG", "ranges");
                    latitude.setText("RANGES");
                }
            }
        }
    }

    @SuppressLint("MissingPermission")
    private void getLastLocation(){
        fusedLocationProviderClient.getLastLocation()
                .addOnSuccessListener(this, location -> {
                    if(location != null){
                        Log.d("TAG", String.valueOf(location.getLatitude()));
                        latitude.setText(String.valueOf(location.getLatitude()));
                        latitude.setGravity(BOTTOM);

                        longitude.setText(String.valueOf(location.getLongitude()));

                        precision.setText(String.valueOf(location.getAccuracy()));
                    } else {
                        Log.d("TAG", "last position isn't available");
                    }
                });
    }

}