package com.parcelinventory.model;
public class Parcel {
    private int    id;
    private String sender, recipient, origin, destination, status, description;
    public Parcel() {}
    public Parcel(int id, String s, String r, String o, String d, String st, String desc) {
        this.id = id; this.sender = s; this.recipient = r;
        this.origin = o; this.destination = d; this.status = st;
        this.description = desc;
    }
    public int getId() { return id; }
    public void setId(int v) { this.id = v; }
    public String getSender() { return sender; }
    public void setSender(String v) { this.sender = v; }
    public String getRecipient() { return recipient; }
    public void setRecipient(String v) { this.recipient = v; }
    public String getOrigin() { return origin; }
    public void setOrigin(String v) { this.origin = v; }
    public String getDestination() { return destination; }
    public void setDestination(String v) { this.destination = v; }
    public String getStatus() { return status; }
    public void setStatus(String v) { this.status = v; }
    public String getDescription() { return description; }
    public void setDescription(String v) { this.description = v; }
}
