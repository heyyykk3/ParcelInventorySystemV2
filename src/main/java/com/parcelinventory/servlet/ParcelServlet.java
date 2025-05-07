package com.parcelinventory.servlet;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.WebServlet;
import java.io.IOException;
import java.util.List;
import com.parcelinventory.data.DataStore;
import com.parcelinventory.model.Parcel;

@WebServlet("/parcels")
public class ParcelServlet extends HttpServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String path = getServletContext().getRealPath("/WEB-INF/data/parcels.json");
        List<Parcel> list = DataStore.loadParcels(path);
        req.setAttribute("parcels", list);
        req.getRequestDispatcher("/WEB-INF/pages/dashboard.jsp").forward(req, resp);
    }
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String act  = req.getParameter("action");
        String path = getServletContext().getRealPath("/WEB-INF/data/parcels.json");
        List<Parcel> list = DataStore.loadParcels(path);

        if ("add".equals(act)) {
            int id = list.stream().mapToInt(Parcel::getId).max().orElse(0) + 1;
            list.add(new Parcel(
                    id,
                    req.getParameter("sender"),
                    req.getParameter("recipient"),
                    req.getParameter("origin"),
                    req.getParameter("destination"),
                    req.getParameter("status"),
                    req.getParameter("description")
            ));
        } else if ("edit".equals(act)) {
            try {
                int id = Integer.parseInt(req.getParameter("id"));
                for (Parcel p: list) {
                    if (p.getId() == id) {
                        p.setSender(req.getParameter("sender"));
                        p.setRecipient(req.getParameter("recipient"));
                        p.setOrigin(req.getParameter("origin"));
                        p.setDestination(req.getParameter("destination"));
                        p.setStatus(req.getParameter("status"));
                        p.setDescription(req.getParameter("description"));
                    }
                }
            } catch (NumberFormatException ignored) {}
        } else if ("delete".equals(act)) {
            try {
                int id = Integer.parseInt(req.getParameter("id"));
                list.removeIf(p -> p.getId() == id);
            } catch (NumberFormatException ignored) {}
        }

        DataStore.saveParcels(path, list);
        resp.sendRedirect(req.getContextPath() + "/parcels");
    }
}
