package com.example.twittokscroll;

import androidx.appcompat.app.AppCompatActivity;
import androidx.viewpager2.widget.ViewPager2;

import android.os.Bundle;
import android.util.Log;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {
    private ViewPager2 viewPager;
    private List<Twok> twoks;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        /* Creazione dati per DEMO*/
        Twok t1 = new Twok("Pippo", "Buongiornissimo Caffe!?!");
        Twok t2 = new Twok("Pluto", "Saluti da Gubbio");
        Twok t3 = new Twok("Paperino", "Bello questo social");
        Twok t4 = new Twok("Topolino", "stacca stacca!!!");
        twoks = new ArrayList<>();
        twoks.add(t1);
        twoks.add(t2);
        twoks.add(t3);
        twoks.add(t4);

        viewPager = findViewById(R.id.viewPager);
        TwokAdapter twokAdapter = new TwokAdapter(this, twoks);
        viewPager.setAdapter(twokAdapter);

        viewPager.registerOnPageChangeCallback(new ViewPager2.OnPageChangeCallback() {
            @Override
            public void onPageScrolled(int position, float positionOffset, int positionOffsetPixels) {
                super.onPageScrolled(position, positionOffset, positionOffsetPixels);
                Log.d("Main", "onPageScrolled");
            }

            @Override
            public void onPageSelected(int position) {
                super.onPageSelected(position);
                Log.d("Main", "onPageSelected");
            }

        });
    }
}