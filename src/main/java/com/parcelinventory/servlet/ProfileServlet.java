package com.parcelinventory.servlet;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.WebServlet;
import java.io.IOException;
import java.util.List;
import com.parcelinventory.data.DataStore;
import com.parcelinventory.model.User;

@WebServlet("/profile")
public class ProfileServlet extends HttpServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String user = (String) req.getSession().getAttribute("username");
        String path = getServletContext().getRealPath("/WEB-INF/data/users.json");
        List<User> list = DataStore.loadUsers(path);
        User me = list.stream()
                .filter(u -> u.getUsername().equals(user))
                .findFirst()
                .orElse(null);
        req.setAttribute("userProfile", me);
        req.getRequestDispatcher("/WEB-INF/pages/profile.jsp")
                .forward(req, resp);
    }
}
