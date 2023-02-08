package com.example.es1lab7.Room;

import androidx.room.Database;
import androidx.room.RoomDatabase;

@Database(entities = {Profile.class}, version=1)
public abstract class ProfileRepository extends RoomDatabase {
    public abstract UserDao userDao();
}
