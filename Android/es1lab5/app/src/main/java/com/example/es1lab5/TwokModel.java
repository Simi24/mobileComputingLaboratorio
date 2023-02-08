package com.example.es1lab5;

import java.util.ArrayList;

public class TwokModel {
    private ArrayList<Twok> twoks = null;

    private static TwokModel theInstance = null;

    public static synchronized TwokModel getInstance(){
        if(theInstance == null) {
            theInstance = new TwokModel();
        }
        return  theInstance;
    }

    private TwokModel(){
        twoks = new ArrayList<Twok>();
    }

    public Twok get(int index){
        return twoks.get(index);
    }

    public int getSize(){
        return twoks.size();
    }

    public void initWithFakeData(){
        twoks.add(new Twok("Simone", "testo1"));
        twoks.add(new Twok("Samuele", "testo2"));
        twoks.add(new Twok("Andrea", "testo3"));
        twoks.add(new Twok("Federico", "testo4"));
        for(int i=0; i<20; i++){
            String name = "name" + i;
            String text = "testo" + i;
            twoks.add(new Twok(name, text));
        }
    }

    @Override
    public String toString() {
        return "TwokModel{" +
                "twoks=" + twoks +
                '}';
    }
}
