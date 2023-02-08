package com.example.es1lab7.Repositories;

public class Sid {
    private String sid;

    public String getSid() {
        assert (sid != null);
        return sid;
    }

    public void setSid(String sid) {
        this.sid = sid;
    }

    @Override
    public String toString() {
        return "Sid{" +
                "sid='" + sid + '\'' +
                '}';
    }
}
