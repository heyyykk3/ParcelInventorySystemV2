package com.parcelinventory.util;
import java.security.MessageDigest;
import java.nio.charset.StandardCharsets;
public class PasswordUtil {
    public static String hash(String p) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] b = md.digest(p.getBytes(StandardCharsets.UTF_8));
            StringBuilder sb = new StringBuilder();
            for (byte x : b) sb.append(String.format("%02x", x));
            return sb.toString();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    public static boolean verify(String p, String h) {
        return hash(p).equalsIgnoreCase(h);
    }
}
