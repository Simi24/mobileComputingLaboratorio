package com.example.es1lab6;

import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.ViewModelProvider;
import androidx.room.Room;

import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;

import com.example.es1lab6.Repositories.SidUid;
import com.example.es1lab6.Repositories.Picture;
import com.example.es1lab6.Repositories.Profile;
import com.example.es1lab6.Repositories.RetrofitInstance;
import com.example.es1lab6.Repositories.Sid;
import com.example.es1lab6.Repositories.Twok;
import com.example.es1lab6.Room.ProfileRepository;

import java.util.ArrayList;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MainActivity extends AppCompatActivity {
    private Sid sid;
    private ArrayList<Twok> twokArrayList;
    private String TESTSID = "TESTSID";
    private String SIDSHEREDPREFERENCES = "MySid";
    private String SIDTABLE = "SID";

    SharedPreferences prefs = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        prefs = getSharedPreferences(SIDSHEREDPREFERENCES, MODE_PRIVATE);

        ProfileRepository db = Room.databaseBuilder(getApplicationContext(), ProfileRepository.class, "Users").build();


        MainActivityViewModel model = new ViewModelProvider(this).get(MainActivityViewModel.class);

        model.getSidMutableLiveData().observe(this, theSid -> {
            //sid.setSid(theSid.getSid());
            Log.d(TESTSID, "in mainactivity"+ model.getSidMutableLiveData().getValue().toString());
        });


    }

    @Override
    protected void onPostResume() {
        super.onPostResume();

        if(prefs.getBoolean("firstrun", true)){
            Log.d("PROVASID", "Firstrun");
            Call<Sid> call =  RetrofitInstance.getRetrofitInstance().getSid();
            call.enqueue(new Callback<Sid>() {
                @Override
                public void onResponse(Call<Sid> call, Response<Sid> response) {
                    assert response.body() != null;
                    prefs.edit().putString(SIDTABLE, response.body().getSid()).commit();
                    prefs.edit().putBoolean("firstrun", false).commit();

                }

                @Override
                public void onFailure(Call<Sid> call, Throwable t) {
                    Log.d("TAG", "errore");
                }
            });
        } else {
            Log.d("PROVASID", "notFirstRun: "+prefs.getString(SIDTABLE, "non esiste"));
        }
    }

    //xZQNOD50OTG9li81shr9
}