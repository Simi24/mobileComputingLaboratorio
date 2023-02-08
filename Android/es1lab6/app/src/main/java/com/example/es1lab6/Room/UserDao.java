package com.example.es1lab6.Room;

import androidx.room.Dao;
import androidx.room.Delete;
import androidx.room.Insert;
import androidx.room.Query;
import androidx.room.Update;

import java.util.List;

@Dao
public interface UserDao {

    @Insert
    void insertAll(Profile... profiles);

    @Update
    void updateUser(Profile... profiles);

    @Query("SELECT picture FROM profile WHERE uid = :uid")
    List<Profile> getAll(int uid);

}
