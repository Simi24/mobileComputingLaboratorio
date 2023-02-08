package com.example.es1lab5;

import android.view.View;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.lifecycle.ViewModelProvider;
import androidx.lifecycle.ViewModelStoreOwner;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

public class ViewHolderTwok extends RecyclerView.ViewHolder implements View.OnClickListener {

    private TextView nameTextView;
    private TextView twokTextView;
    private  OnRecyclerViewClickListener mRecyclerViewClickListener;
    private MainActivityViewModel viewModel;
    private List<Twok> twoks;

    public ViewHolderTwok(@NonNull View itemView, OnRecyclerViewClickListener onRecyclerViewClickListener) {
        super(itemView);
        nameTextView = itemView.findViewById(R.id.name);
        twokTextView = itemView.findViewById(R.id.twok);
        mRecyclerViewClickListener = onRecyclerViewClickListener;
        itemView.setOnClickListener(this);

    }

    public void updateContent(Twok twok){
        nameTextView.setText(twok.name);
        twokTextView.setText(twok.twok);
    }

    @Override
    public void onClick(View view) {
        Twok twok = TwokModel.getInstance().get(getAdapterPosition());
        mRecyclerViewClickListener.onRecyclerViewClick(view, getAdapterPosition(), twok);
    }
}
