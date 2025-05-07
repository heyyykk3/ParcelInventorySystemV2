package com.parcelinventory.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;
import java.io.IOException;

@WebServlet("/logout")
public class LogoutServlet extends HttpServlet {

    // Handle GET /logout
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        // Invalidate user’s session if it exists
        HttpSession session = req.getSession(false);
        if (session != null) {
            session.invalidate();
        }
        // Redirect back to login form with a logout flag
        resp.sendRedirect(req.getContextPath() + "/login?logout=1");
    }

    // Also allow POST /logout (e.g. if you invoke via a form)
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        // Simply delegate to doGet
        doGet(req, resp);
    }
}
