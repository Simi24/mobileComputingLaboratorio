package com.example.es1lab5;

import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;

import java.util.ArrayList;
import java.util.List;

public class MainActivityViewModel extends ViewModel {
    private MutableLiveData<List<Twok>> twoksLiveData = null;
    private List<Twok> twokList;

    public MutableLiveData<List<Twok>> getTwoksLiveData() {
        if(twoksLiveData == null){
            twoksLiveData = new MutableLiveData<>();
            twoksLiveData.setValue(initWithFakeData());
            return twoksLiveData;
        }

        return twoksLiveData;
    }

    public List<Twok> initWithFakeData(){
        twokList = new ArrayList<>();
        twokList.add(new Twok("Simone", "testo1"));
        twokList.add(new Twok("Samuele", "testo2"));
        twokList.add(new Twok("Andrea", "testo3"));
        twokList.add(new Twok("Federico", "testo4"));
        for(int i=0; i<20; i++){
            String name = "name" + i;
            String text = "testo" + i;
            twokList.add(new Twok(name, text));
        }
        return twokList;
    }

}
