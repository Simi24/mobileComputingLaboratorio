package com.example.es1lab2;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.widget.Button;
import android.widget.TextView;

import java.math.BigInteger;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        TextView myTextView = findViewById(R.id.textView);
        Button button = findViewById(R.id.button);
        Button button1 = findViewById(R.id.button2);
        Button button2 = findViewById(R.id.button3);
        Button button3 = findViewById(R.id.button4);

        button.setOnClickListener(v -> {
            Log.d("TAG", myTextView.getText().toString());
            int number = Integer.parseInt(myTextView.getText().toString());
            myTextView.setText(String.valueOf(number + 1));
        });

        button1.setOnClickListener(v -> {
            Log.d("TAG", myTextView.getText().toString());
            int number = Integer.parseInt(myTextView.getText().toString());
            myTextView.setText(String.valueOf(number -1));
        });

        button2.setOnClickListener(v -> {
            Log.d("TAG", myTextView.getText().toString());
            int number = Integer.parseInt(myTextView.getText().toString());
            myTextView.setText(String.valueOf(number * 2));
        });

        button3.setOnClickListener(v -> {
            Log.d("TAG", myTextView.getText().toString());
            int number = Integer.parseInt(myTextView.getText().toString());
            myTextView.setText(String.valueOf((int)Math.pow(number, 2)));
        });
    }
}