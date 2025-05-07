package com.parcelinventory.servlet;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.WebServlet;
import java.io.IOException;
import java.util.List;
import com.parcelinventory.data.DataStore;
import com.parcelinventory.model.Parcel;

@WebServlet("/parcel")
public class ParcelDetailsServlet extends HttpServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String idStr = req.getParameter("id");
        String path  = getServletContext().getRealPath("/WEB-INF/data/parcels.json");
        List<Parcel> list = DataStore.loadParcels(path);
        Parcel found = null;
        try {
            int id = Integer.parseInt(idStr);
            for (Parcel p: list) {
                if (p.getId() == id) { found = p; break; }
            }
        } catch (Exception e) { /* ignore */ }
        if (found == null) {
            resp.sendRedirect(req.getContextPath() + "/parcels");
            return;
        }
        req.setAttribute("parcel", found);
        req.getRequestDispatcher("/WEB-INF/pages/parcelDetails.jsp")
                .forward(req, resp);
    }
}
