package com.example.es1lab6;

import android.util.Log;

import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;

import com.example.es1lab6.Repositories.RetrofitInstance;
import com.example.es1lab6.Repositories.Sid;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MainActivityViewModel extends ViewModel {
    private MutableLiveData<Sid> sid = null;

    public MutableLiveData<Sid> getSidMutableLiveData() {
        if(sid == null){
            sid = new MutableLiveData<>();
            loadSid();
            return sid;
        }
        return sid;
    }

    public MainActivityViewModel() {
        super();

        loadSid();

    }

    private void loadSid(){
        Call<Sid> call =  RetrofitInstance.getRetrofitInstance().getSid();
        call.enqueue(new Callback<Sid>() {
            @Override
            public void onResponse(Call<Sid> call, Response<Sid> response) {
                assert response.body() != null;
                sid.setValue(response.body());
                Log.d("TAG", "in viewModel "+response.body().getSid());
            }

            @Override
            public void onFailure(Call<Sid> call, Throwable t) {
                Log.d("TAG", "errore");
            }
        });
    }
}
