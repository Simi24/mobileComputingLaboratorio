package com.example.es1lab4;

import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;

public class MyViewModel extends ViewModel {
    private MutableLiveData<Integer> grandTotalLiveData = null;

    //private MyViewModel() {}

    public MutableLiveData<Integer> getGrandTotalLiveData(){
        if (grandTotalLiveData == null){
            grandTotalLiveData = new MutableLiveData<Integer>();
            grandTotalLiveData.setValue(0);
        }
        return grandTotalLiveData;
    }

    /*public static synchronized MyViewModel getInstance(){
        if(instance == null) {
            instance = new MyViewModel();
        }
        return instance;
    }*/


    /*private int theNumber = 0;

    public int getTheNumber() {return theNumber;}

    public void setTheNumber(int theNumber) {
        this.theNumber = theNumber;
    }*/
}
