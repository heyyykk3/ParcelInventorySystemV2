package com.parcelinventory.data;
import java.io.File; import java.io.IOException; import java.util.*;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.type.TypeReference;
import com.parcelinventory.model.User;
import com.parcelinventory.model.Parcel;

public class DataStore {
    private static final ObjectMapper M = new ObjectMapper();

    private static <T> List<T> read(String path, TypeReference<List<T>> ref) {
        try {
            File f = new File(path);
            if (!f.exists()) return new ArrayList<>();
            return M.readValue(f, ref);
        } catch (IOException e) {
            return new ArrayList<>();
        }
    }

    private static <T> void write(String path, List<T> data) {
        try {
            M.writerWithDefaultPrettyPrinter().writeValue(new File(path), data);
        } catch (IOException e) {}
    }

    public static List<User> loadUsers(String p) { return read(p, new TypeReference<List<User>>(){}); }
    public static void saveUsers(String p, List<User> d) { write(p, d); }
    public static List<Parcel> loadParcels(String p) { return read(p, new TypeReference<List<Parcel>>(){}); }
    public static void saveParcels(String p, List<Parcel> d) { write(p, d); }
}
