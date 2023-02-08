package com.example.es1lab7;

import androidx.appcompat.app.AppCompatActivity;
import androidx.room.Room;

import android.content.SharedPreferences;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Bundle;
import android.util.Base64;
import android.util.Log;
import android.widget.ImageView;

import com.example.es1lab7.Repositories.GetTwok;
import com.example.es1lab7.Repositories.Picture;
import com.example.es1lab7.Repositories.RetrofitInstance;
import com.example.es1lab7.Repositories.Sid;
import com.example.es1lab7.Repositories.SidUid;
import com.example.es1lab7.Repositories.Twok;
import com.example.es1lab7.Room.Profile;
import com.example.es1lab7.Room.ProfileRepository;

import java.nio.charset.StandardCharsets;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MainActivity extends AppCompatActivity {
    private Sid sid;
    private SharedPreferences prefs = null;

    private ProfileRepository db;
    private String SIDSHEREDPREFERENCES = "MySid";
    private String SIDTABLE = "SID";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        prefs = getSharedPreferences(SIDSHEREDPREFERENCES, MODE_PRIVATE);

        db = Room.databaseBuilder(getApplicationContext(),
                ProfileRepository.class, "users").build();

        getTwok();
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


    private void getTwok(){
        String sid = prefs.getString(SIDTABLE, " ");
        GetTwok getTwok = new GetTwok();
        getTwok.setSid(sid);

        Call<Twok> twokCall = RetrofitInstance.getRetrofitInstance().getTwok(getTwok);
        twokCall.enqueue(new Callback<Twok>() {
            @Override
            public void onResponse(Call<Twok> call, Response<Twok> response) {
                new Thread(() ->{
                    final ImageView imageView = findViewById(R.id.imageView);
                    Integer uid = Integer.valueOf(response.body().getUid());
                    String picture = getPicture(uid);
                    if (picture != null){
                        Log.d("TAG", "prendiamo l'immagine dal DB ed esiste");
                        byte[] imageAsBytes = Base64.decode(picture, 0);
                        Bitmap bitmap = BitmapFactory.decodeByteArray(imageAsBytes, 0, imageAsBytes.length);
                        imageView.setImageBitmap(bitmap);
                    } else {
                        Log.d("TAG", "dobbiamo prendere l'immagine dal server");
                        SidUid sidUid = new SidUid();
                        sidUid.setSid(sid);
                        sidUid.setUid(uid);
                        Call<Picture> pictureCall = RetrofitInstance.getRetrofitInstance().getPicture(sidUid);
                        pictureCall.enqueue(new Callback<Picture>() {
                            @Override
                            public void onResponse(Call<Picture> call, Response<Picture> response) {
                                if(response.body().getPicture() != null){
                                    Log.d("TAG", "abbiamo prese l'immagine: ");
                                    byte[] imageAsBytes = Base64.decode(response.body().getPicture(), 0);
                                    Bitmap bitmap = BitmapFactory.decodeByteArray(imageAsBytes, 0, imageAsBytes.length);
                                    Log.d("TAG", "convertiamo l'immagine in bitmap "+String.valueOf(imageAsBytes));
                                    imageView.setImageBitmap(bitmap);
                                    Profile profile = new Profile();
                                    profile.name = response.body().getName();
                                    profile.picture = response.body().getPicture();
                                    profile.pVersion = response.body().getPversion();
                                    profile.uid = response.body().getUid();
                                    setPicture(profile);
                                } else {
                                    Profile profile = new Profile();
                                    profile.name = response.body().getName();
                                    profile.picture = response.body().getPicture();
                                    profile.pVersion = response.body().getPversion();
                                    profile.uid = response.body().getUid();
                                    setPicture(profile);
                                }


                            }

                            @Override
                            public void onFailure(Call<Picture> call, Throwable t) {
                                Log.d("TAG", t.getLocalizedMessage());
                            }
                        });
                    }

                }).start();
            }

            @Override
            public void onFailure(Call<Twok> call, Throwable t) {

            }
        });
    }

    private String getPicture(Integer uid){

        String picture = db.userDao().getProfile(uid);
        Log.d("TAG", "prendiamo l'immagine dal db "+picture);
        return picture;
    }

    private void setPicture(Profile profile){
        Log.d("TAG", "entro in set Picture con: "+profile.name);
        new Thread(() -> {
            db.userDao().insertAll(profile);
            Log.d("TAG", "inserisco il nuovo utente nel DB");
        }).start();

    }

}

