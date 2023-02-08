package com.example.es2lab2;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    private TextView myTextView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        myTextView = findViewById(R.id.textView);
        Button button = findViewById(R.id.button);
        Button button1 = findViewById(R.id.button2);
        Button button2 = findViewById(R.id.button3);
        Button button3 = findViewById(R.id.button4);

        button.setOnClickListener(this);
        button1.setOnClickListener(this);
        button2.setOnClickListener(this);
        button3.setOnClickListener(this);

    }

    @Override
    public void onClick(View view) {
        switch (view.getId()){

            case R.id.button:
                Log.d("TAGGE", "pulsante premuto");
                int number = Integer.parseInt(myTextView.getText().toString());
                myTextView.setText(String.valueOf(number + 1));
                break;
            case R.id.button2:
                Log.d("TAGGE", "pulsante 2 premuto");
                int number1 = Integer.parseInt(myTextView.getText().toString());
                myTextView.setText(String.valueOf(number1 - 1));
                break;
            case R.id.button3:
                Log.d("TAGGE", "pulsante 3 premuto");
                int number2 = Integer.parseInt(myTextView.getText().toString());
                myTextView.setText(String.valueOf(number2 * 2));
                break;
            case R.id.button4:
                Log.d("TAGGE", "pulsante 4 premuto");
                int number3 = Integer.parseInt(myTextView.getText().toString());
                myTextView.setText(String.valueOf((int)Math.pow(number3, 2)));
                break;
        }
    }
}