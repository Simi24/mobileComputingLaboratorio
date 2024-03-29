package com.example.es1lab8.Components;

import com.example.es1lab8.APIinterface;

import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class RetrofitInstance {

    public static APIinterface getRetrofitInstance(){
        String BASE_URL = "https://develop.ewlab.di.unimi.it/mc/twittok/";
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(BASE_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        return retrofit.create(APIinterface.class);
    }

}
