package com.example.es1lab6.Repositories;

public class Twok {

    private String sid;
    private String text;
    private String bgcol;
    private String fontcol;
    private Integer fontsize;
    private Integer fonttype;
    private Integer halign;
    private Integer valign;
    private Double lat;
    private Double lon;

    public Twok() {
    }

    public String getSid() {
        return sid;
    }

    public void setSid(String sid) {
        this.sid = sid;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getBgcol() {
        return bgcol;
    }

    public void setBgcol(String bgcol) {
        this.bgcol = bgcol;
    }

    public String getFontcol() {
        return fontcol;
    }

    public void setFontcol(String fontcol) {
        this.fontcol = fontcol;
    }

    public Integer getFontsize() {
        return fontsize;
    }

    public void setFontsize(Integer fontsize) {
        this.fontsize = fontsize;
    }

    public Integer getFonttype() {
        return fonttype;
    }

    public void setFonttype(Integer fonttype) {
        this.fonttype = fonttype;
    }

    public Integer getHalign() {
        return halign;
    }

    public void setHalign(Integer halign) {
        this.halign = halign;
    }

    public Integer getValign() {
        return valign;
    }

    public void setValign(Integer valign) {
        this.valign = valign;
    }

    public Double getLat() {
        return lat;
    }

    public void setLat(Double lat) {
        this.lat = lat;
    }

    public Double getLon() {
        return lon;
    }

    public void setLon(Double lon) {
        this.lon = lon;
    }
}
