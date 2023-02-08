package com.example.es1lab7.Repositories;

import java.util.ArrayList;

public class FollowedList {
    private ArrayList<Profile> followed;

    public FollowedList() {
    }

    public ArrayList<Profile> getFollowed() {
        return followed;
    }

    public void setFollowed(ArrayList<Profile> followed) {
        this.followed = followed;
    }
}
