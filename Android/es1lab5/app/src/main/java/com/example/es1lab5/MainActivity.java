package com.example.es1lab5;

import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.ViewModelProvider;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import androidx.viewpager2.widget.ViewPager2;

import android.os.Bundle;
import android.util.Log;
import android.view.View;

public class MainActivity extends AppCompatActivity implements OnRecyclerViewClickListener {

    TwokModel model = null;
    ViewPager2 viewPager2 = null;

    @Override
    public void onRecyclerViewClick(View v, int position, Twok twok) {
        Log.d("TAG", "list clicked at position: " + position + twok.name + twok.twok);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);



        viewPager2 = findViewById(R.id.twokViewPager);
        //recyclerView.setLayoutManager(new LinearLayoutManager(this)); per le recyclerView serve il layout manager
        TwokAdapter adapter = new TwokAdapter(this, this);
        viewPager2.setAdapter(adapter);

        //usiamo classi anonime per avere funzioni di callback quando scorriamo la lista
        viewPager2.registerOnPageChangeCallback(new ViewPager2.OnPageChangeCallback() {
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