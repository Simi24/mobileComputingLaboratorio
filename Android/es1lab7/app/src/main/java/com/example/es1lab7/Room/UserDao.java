package com.example.es1lab7.Room;

import androidx.room.Dao;
import androidx.room.Insert;
import androidx.room.Query;
import androidx.room.Update;

@Dao
public interface UserDao {

    @Insert
    void insertAll(Profile... profile);

    @Update
    void updateUser(Profile... profiles);


    @Query("SELECT picture FROM profile WHERE uid = :uid")
    String getProfile(int uid);

}
