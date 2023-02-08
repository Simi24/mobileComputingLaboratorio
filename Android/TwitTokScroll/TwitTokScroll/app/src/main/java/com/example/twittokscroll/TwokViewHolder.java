package com.example.twittokscroll;

import android.view.View;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

public class TwokViewHolder extends RecyclerView.ViewHolder {
    private TextView txtName, txtText;

    public TwokViewHolder(@NonNull View itemView) {
        super(itemView);
        txtName = itemView.findViewById(R.id.txtNome);
        txtText = itemView.findViewById(R.id.txtText);
    }

    public void updateContent(Twok twok) {
        txtName.setText(twok.name);
        txtText.setText(twok.text);
    }
}
