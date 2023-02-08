package com.example.es1lab6;

import android.net.DnsResolver;

import com.example.es1lab6.Repositories.Twok;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class TwokCallback implements Callback<Twok> {
    @Override
    public void onResponse(Call<Twok> call, Response<Twok> response) {

    }

    @Override
    public void onFailure(Call<Twok> call, Throwable t) {

    }
}
