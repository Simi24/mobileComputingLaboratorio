package com.example.es1lab5;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.lifecycle.ViewModelProvider;
import androidx.lifecycle.ViewModelStoreOwner;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

public class TwokAdapter extends RecyclerView.Adapter<ViewHolderTwok> {

    private LayoutInflater twokInflater;

    private MainActivityViewModel viewModel;
    private OnRecyclerViewClickListener onRecyclerViewClickListener;
    private List<Twok> twoks;

    public TwokAdapter(Context context, OnRecyclerViewClickListener recyclerViewClickListener) {
        this.twokInflater = LayoutInflater.from(context);
        viewModel = new ViewModelProvider((ViewModelStoreOwner) context).get(MainActivityViewModel.class);
        twoks = viewModel.getTwoksLiveData().getValue();

        this.onRecyclerViewClickListener = recyclerViewClickListener;
    }

    @NonNull
    @Override
    public ViewHolderTwok onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = twokInflater.inflate(R.layout.single_row, parent, false);
        return new ViewHolderTwok(view, onRecyclerViewClickListener);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolderTwok holder, int position) {
        Twok twok = twoks.get(position);
        holder.updateContent(twok);
    }

    @Override
    public int getItemCount() {
        return twoks.size();
    }
}
