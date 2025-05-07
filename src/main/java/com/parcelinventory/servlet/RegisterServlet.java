package com.parcelinventory.servlet;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.WebServlet;
import java.io.IOException;
import java.util.List;
import com.parcelinventory.data.DataStore;
import com.parcelinventory.model.User;
import com.parcelinventory.util.PasswordUtil;

@WebServlet("/register")
public class RegisterServlet extends HttpServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        req.getRequestDispatcher("/WEB-INF/pages/register.jsp").forward(req, resp);
    }
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String u    = req.getParameter("username"),
                p    = req.getParameter("password"),
                n    = req.getParameter("fullname"),
                e    = req.getParameter("email");
        String path = getServletContext().getRealPath("/WEB-INF/data/users.json");
        List<User> list = DataStore.loadUsers(path);
        boolean exists = list.stream().anyMatch(x -> x.getUsername().equals(u));
        if (exists) {
            resp.sendRedirect(req.getContextPath() + "/register?exists=1");
            return;
        }
        list.add(new User(u, PasswordUtil.hash(p), n, e));
        DataStore.saveUsers(path, list);
        resp.sendRedirect(req.getContextPath() + "/?registered=1");
    }
}
