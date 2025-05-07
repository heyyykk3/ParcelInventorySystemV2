package com.parcelinventory.servlet;

import com.parcelinventory.data.DataStore;
import com.parcelinventory.model.User;
import com.parcelinventory.util.PasswordUtil;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;
import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.List;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {

    // Show the form on GET /login
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        // Forward to the JSP inside WEB-INF/pages
        req.getRequestDispatcher("/WEB-INF/pages/login.jsp")
                .forward(req, resp);
    }

    // Process credentials on POST /login
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {

        String username = req.getParameter("username");
        String password = req.getParameter("password");

        String path = getServletContext().getRealPath("/WEB-INF/data/users.json");
        List<User> users = DataStore.loadUsers(path);

        boolean ok = users.stream()
                .anyMatch(u ->
                        u.getUsername().equals(username) &&
                                PasswordUtil.verify(password, u.getPassword())
                );

        if (ok) {
            req.getSession().setAttribute("username", username);
            resp.sendRedirect(req.getContextPath() + "/parcels");
        } else {
            String enc = URLEncoder.encode(username == null ? "" : username,
                    StandardCharsets.UTF_8);
            resp.sendRedirect(req.getContextPath()
                    + "/login?error=1&username=" + enc);
        }
    }
}
