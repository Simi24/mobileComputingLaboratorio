package com.example.es1lab1;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity2 extends AppCompatActivity {



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);

        Intent myIntent = getIntent();
        if(myIntent.hasExtra("valueToShow")){
            Log.d("Activity 2", myIntent.getStringExtra("valueToShow"));
        }

        TextView tv = this.findViewById(R.id.textViewActivity2);
        tv.setText(myIntent.getStringExtra("valueToShow"));

        Button buttonCall = findViewById(R.id.button2);

        buttonCall.setOnClickListener(new View.OnClickListener(){
            public void onClick(View v) {
                Intent intent = new Intent((Intent.ACTION_DIAL);

            }
        });
    }
}