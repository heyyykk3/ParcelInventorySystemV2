package com.parcelinventory.model;
public class User {
    private String username;
    private String password;
    private String fullName;
    private String email;
    public User() {}
    public User(String u, String p, String n, String e) {
        this.username = u; this.password = p; this.fullName = n; this.email = e;
    }
    public String getUsername() { return username; }
    public void setUsername(String u) { this.username = u; }
    public String getPassword() { return password; }
    public void setPassword(String p) { this.password = p; }
    public String getFullName() { return fullName; }
    public void setFullName(String n) { this.fullName = n; }
    public String getEmail() { return email; }
    public void setEmail(String e) { this.email = e; }
}
