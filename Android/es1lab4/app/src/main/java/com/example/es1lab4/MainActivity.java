package com.example.es1lab4;

import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.ViewModel;
import androidx.lifecycle.ViewModelProvider;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

//Fatto con storage e singleton

public class MainActivity extends AppCompatActivity {

    private TextView myTextView;
    //private String BUNDLE_KEY_THE_NUMBER = "value";
    //private int theNumber = 0;

    private MyViewModel viewModel;

    /*@Override
    protected void onSaveInstanceState(@NonNull Bundle outState) {
        Log.d("TAG", "onSavedChiamato" + theNumber);
        outState.putInt(BUNDLE_KEY_THE_NUMBER, theNumber);
        super.onSaveInstanceState(outState);
    }*/

    /*@Override
    protected void onRestoreInstanceState(@NonNull Bundle savedInstanceState) {
        super.onRestoreInstanceState(savedInstanceState);
        theNumber = savedInstanceState.getInt(BUNDLE_KEY_THE_NUMBER);
        myTextView = findViewById(R.id.textView);
        myTextView.setText(String.valueOf(theNumber));
    }*/

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Log.d("TAG", "On create");
        myTextView = findViewById(R.id.textView);
        //model = MyViewModel.getInstance();

        MyViewModel viewModel = new ViewModelProvider(this).get(MyViewModel.class);

        viewModel.getGrandTotalLiveData().observe(this, theValue ->{
            myTextView.setText(String.valueOf(theValue));
        });


        //myTextView.setText(String.valueOf(model.getTheNumber()));
        Button button = findViewById(R.id.button);
        Button button1 = findViewById(R.id.button2);
        Button button2 = findViewById(R.id.button3);
        Button button3 = findViewById(R.id.button4);


        button.setOnClickListener(v -> {
            viewModel.getGrandTotalLiveData().setValue(viewModel.getGrandTotalLiveData().getValue() + 1);
        });
        button1.setOnClickListener(v -> {
            viewModel.getGrandTotalLiveData().setValue(viewModel.getGrandTotalLiveData().getValue() - 1);
        });

        button2.setOnClickListener(v -> {
            viewModel.getGrandTotalLiveData().setValue(viewModel.getGrandTotalLiveData().getValue() * 2);
        });
        button3.setOnClickListener(v -> {
            viewModel.getGrandTotalLiveData().setValue((int)Math.pow(viewModel.getGrandTotalLiveData().getValue(), 2) );
        });
    }


    /*@Override
    public void onClick(View view) {

        switch (view.getId()){

            case R.id.button:
                Log.d("TAG", "pulsante premuto");
                //theNumber = Integer.parseInt(myTextView.getText().toString()) + 1;
                model.setTheNumber(Integer.parseInt(myTextView.getText().toString()) + 1);
                myTextView.setText(String.valueOf(model.getTheNumber()));
                break;
            case R.id.button2:
                Log.d("TAG", "pulsante 2 premuto");
                model.setTheNumber(Integer.parseInt(myTextView.getText().toString()) - 1);
                myTextView.setText(String.valueOf(model.getTheNumber()));
                break;
            case R.id.button3:
                Log.d("TAG", "pulsante 3 premuto");
                model.setTheNumber(Integer.parseInt(myTextView.getText().toString()) * 2);
                myTextView.setText(String.valueOf(model.getTheNumber()));
                break;
            case R.id.button4:
                Log.d("TAG", "pulsante 4 premuto");
                int numero =  Integer.parseInt(myTextView.getText().toString());
                model.setTheNumber((int)Math.pow(numero, 2));
                myTextView.setText(String.valueOf(model.getTheNumber()));
                break;
        }

    }*/
}