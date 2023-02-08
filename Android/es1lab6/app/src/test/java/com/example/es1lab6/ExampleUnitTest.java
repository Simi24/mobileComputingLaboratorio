package com.example.es1lab6;

import org.junit.Test;

import static org.junit.Assert.*;

import com.example.es1lab6.Repositories.RetrofitInstance;
import com.example.es1lab6.Repositories.Sid;

import java.io.IOException;

import retrofit2.Call;
import retrofit2.Response;

/**
 * Example local unit test, which will execute on the development machine (host).
 *
 * @see <a href="http://d.android.com/tools/testing">Testing documentation</a>
 */
public class ExampleUnitTest {
    @Test
    public void addition_isCorrect() {
        assertEquals(4, 2 + 2);
    }

    @Test
    public void checkGetSid(){
        Call<Sid> call =  RetrofitInstance.getRetrofitInstance().getSid();
        try {
            Response<Sid> resp = call.execute();
            assert resp.body() != null;
            String sid = resp.body().getSid();
            assertTrue(sid.length() > 5);
        } catch (IOException e) {
            e.printStackTrace();

        }

    }
}