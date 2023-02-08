package com.example.es1lab8;

import com.example.es1lab8.Components.Followed;
import com.example.es1lab8.Components.FollowedList;
import com.example.es1lab8.Components.GetTwok;
import com.example.es1lab8.Components.Picture;
import com.example.es1lab8.Components.Profile;
import com.example.es1lab8.Components.Sid;
import com.example.es1lab8.Components.SidUid;
import com.example.es1lab8.Components.Twok;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface APIinterface {

    @POST("register")
    Call<Sid> getSid();

    @POST("getProfile")
    Call<Profile> getProfile(@Body Sid sid);

    @POST("getPicture")
    Call<Picture> getPicture(@Body SidUid sidUid);

    @POST("getTwok")
    Call<Twok> getTwok(@Body GetTwok getTwok);

    @POST("setProfile")
    Call<Profile> setProfile(@Body Profile profile);

    @POST("addTwok")
    Call<Twok> addTwok(@Body Twok twok);

    @POST("follow")
    Call<SidUid> follow(@Body SidUid sidUid);

    @POST("unFollow")
    Call<Void> unFollow(@Body SidUid sidUid);

    @POST("getFollowed")
    Call<FollowedList> getFollowed(@Body Sid sid);

    @POST("isFollowed")
    Call<Followed> isFollowed(@Body SidUid sidUid);
}
