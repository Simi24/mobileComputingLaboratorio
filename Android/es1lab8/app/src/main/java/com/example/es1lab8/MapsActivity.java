package com.example.es1lab8;

import androidx.fragment.app.FragmentActivity;

import android.os.Bundle;
import android.util.Log;

import com.example.es1lab8.Components.GetTwok;
import com.example.es1lab8.Components.RetrofitInstance;
import com.example.es1lab8.Components.Sid;
import com.example.es1lab8.Components.Twok;
import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.MarkerOptions;
import com.example.es1lab8.databinding.ActivityMapsBinding;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MapsActivity extends FragmentActivity implements OnMapReadyCallback {

    private GoogleMap mMap;
    private ActivityMapsBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        binding = ActivityMapsBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        // Obtain the SupportMapFragment and get notified when the map is ready to be used.
        SupportMapFragment mapFragment = (SupportMapFragment) getSupportFragmentManager()
                .findFragmentById(R.id.map);
        mapFragment.getMapAsync(this);
    }

    /**
     * Manipulates the map once available.
     * This callback is triggered when the map is ready to be used.
     * This is where we can add markers or lines, add listeners or move the camera. In this case,
     * we just add a marker near Sydney, Australia.
     * If Google Play services is not installed on the device, the user will be prompted to install
     * it inside the SupportMapFragment. This method will only be triggered once the user has
     * installed Google Play services and returned to the app.
     */
    @Override
    public void onMapReady(GoogleMap googleMap) {
        mMap = googleMap;
        Log.d("TAG", "fa questa chiamata");
        loadSid(mMap);
        // Add a marker in Sydney and move the camera
        /*LatLng sydney = new LatLng(-34, 151);
        mMap.addMarker(new MarkerOptions().position(sydney).title("Marker in Sydney"));
        mMap.moveCamera(CameraUpdateFactory.newLatLng(sydney));*/
    }

    private void loadSid(GoogleMap mMap){
        Log.d("TAG", "entriamo in load sid");
        Call<Sid> call =  RetrofitInstance.getRetrofitInstance().getSid();
        call.enqueue(new Callback<Sid>() {
            @Override
            public void onResponse(Call<Sid> call, Response<Sid> response) {
                assert response.body() != null;
                Log.d("TAG", "in viewModel "+response.body().getSid());
                getTwok(response.body().getSid(), mMap);
            }

            @Override
            public void onFailure(Call<Sid> call, Throwable t) {
                Log.d("TAG", "errore");
            }
        });
    }

    private void getTwok(String sid, GoogleMap mMap){
        GetTwok getTwok = new GetTwok();
        getTwok.setSid(sid);
        getTwok.setTid(3);

        Call<Twok> twokCall = RetrofitInstance.getRetrofitInstance().getTwok(getTwok);
        twokCall.enqueue(new Callback<Twok>() {
            @Override
            public void onResponse(Call<Twok> call, Response<Twok> response) {
                Log.d("TAG", response.body().getText());
                LatLng twokPosition = new LatLng(response.body().getLat(), response.body().getLon());
                mMap.addMarker(new MarkerOptions().position(twokPosition).title("Marker in twok's position"));
                mMap.moveCamera(CameraUpdateFactory.newLatLng(twokPosition));
            }

            @Override
            public void onFailure(Call<Twok> call, Throwable t) {

            }
        });
    }
}