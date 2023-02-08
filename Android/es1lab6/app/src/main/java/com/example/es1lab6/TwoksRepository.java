package com.example.es1lab6;

import android.util.Log;

import com.example.es1lab6.Repositories.GetTwok;
import com.example.es1lab6.Repositories.RetrofitInstance;
import com.example.es1lab6.Repositories.Twok;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CountDownLatch;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class TwoksRepository {
    public static ArrayList<Twok> twokList = null;
    public static ArrayList<Twok> getTwokList(String sid) {
        GetTwok getTwok = new GetTwok();
        getTwok.setSid(sid);
        twokList = new ArrayList<>();
            Call<Twok> twokCall = RetrofitInstance.getRetrofitInstance().getTwok(getTwok);
            twokCall.enqueue(new Callback<Twok>() {
                @Override
                public void onResponse(Call<Twok> call, Response<Twok> response) {
                    if(response.isSuccessful()){
                        twokList.add(response.body());
                        Log.d("TAGLIST", "get twok: "+response.body().getText());
                    } else {
                        Log.d("TAG", "risposta fallita");
                    }

                }

                @Override
                public void onFailure(Call<Twok> call, Throwable t) {
                    t.printStackTrace();
                }
            });
        return twokList;
    }
}
