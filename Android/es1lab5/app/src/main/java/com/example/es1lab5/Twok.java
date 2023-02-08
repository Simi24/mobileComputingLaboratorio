package com.example.es1lab5;

public class Twok {

    String name= null;
    String twok = null;
    public Twok(String nome, String passedTwok) {
        name = nome;
        twok = passedTwok;
    }

    @Override
    public String toString() {
        return "Twok{" +
                "name='" + name + '\'' +
                ", twok='" + twok + '\'' +
                '}';
    }
}
