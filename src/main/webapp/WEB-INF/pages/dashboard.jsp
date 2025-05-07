<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<%@ taglib prefix="fn" uri="jakarta.tags.functions" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Curiorio – Dashboard</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet"/>
</head>
<body class="bg-gray-100 min-h-screen">

<!-- NAVBAR -->
<header class="bg-white shadow fixed w-full z-20">
    <div class="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <a href="${pageContext.request.contextPath}/" class="text-2xl font-bold text-sky-600">Curiorio</a>
        <nav class="space-x-4">
            <a href="${pageContext.request.contextPath}/profile" class="text-gray-700 hover:text-sky-600">Profile</a>
            <a href="${pageContext.request.contextPath}/logout" class="text-gray-700 hover:text-sky-600">Logout</a>
        </nav>
    </div>
</header>

<main class="pt-20 max-w-6xl mx-auto px-4">

    <!-- METRICS CARDS -->
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <!-- Total Parcels -->
        <div class="bg-white rounded-lg shadow p-6" data-aos="fade-up">
            <h3 class="text-sm font-medium text-gray-500">Total Parcels</h3>
            <p class="mt-2 text-3xl font-semibold text-gray-800">
                <c:out value="${fn:length(parcels)}"/>
            </p>
        </div>
        <!-- Pending -->
        <div class="bg-white rounded-lg shadow p-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="text-sm font-medium text-gray-500">Pending</h3>
            <p class="mt-2 text-3xl font-semibold text-yellow-500">
                <c:set var="pending" value="0"/>
                <c:forEach var="p" items="${parcels}">
                    <c:if test="${p.status=='Pending'}">
                        <c:set var="pending" value="${pending + 1}"/>
                    </c:if>
                </c:forEach>
                ${pending}
            </p>
        </div>
        <!-- In Transit -->
        <div class="bg-white rounded-lg shadow p-6" data-aos="fade-up" data-aos-delay="200">
            <h3 class="text-sm font-medium text-gray-500">In Transit</h3>
            <p class="mt-2 text-3xl font-semibold text-sky-500">
                <c:set var="inTransit" value="0"/>
                <c:forEach var="p" items="${parcels}">
                    <c:if test="${p.status=='In Transit'}">
                        <c:set var="inTransit" value="${inTransit + 1}"/>
                    </c:if>
                </c:forEach>
                ${inTransit}
            </p>
        </div>
        <!-- Delivered -->
        <div class="bg-white rounded-lg shadow p-6" data-aos="fade-up" data-aos-delay="300">
            <h3 class="text-sm font-medium text-gray-500">Delivered</h3>
            <p class="mt-2 text-3xl font-semibold text-green-500">
                <c:set var="delivered" value="0"/>
                <c:forEach var="p" items="${parcels}">
                    <c:if test="${p.status=='Delivered'}">
                        <c:set var="delivered" value="${delivered + 1}"/>
                    </c:if>
                </c:forEach>
                ${delivered}
            </p>
        </div>
    </section>

    <!-- SEARCH & ADD BUTTON -->
    <section class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 space-y-4 sm:space-y-0">
        <div class="relative w-full sm:w-1/2" data-aos="fade-right">
            <input id="search" type="text" placeholder="Search by sender or recipient"
                   class="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"/>
            <span class="absolute left-3 top-2.5 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 16s4-4 8-8m0 0a8 8 0 11-8 8m8-8H8"/>
          </svg>
        </span>
        </div>
        <button onclick="openAdd()"
                class="w-full sm:w-auto px-6 py-2 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition"
                data-aos="fade-left">
            + Add Parcel
        </button>
    </section>

    <!-- PARCEL TABLE -->
    <section class="bg-white shadow rounded-lg overflow-hidden" data-aos="fade-up">
        <table class="min-w-full text-sm">
            <thead class="bg-sky-50">
            <tr>
                <th class="px-4 py-3 text-left">ID</th>
                <th class="px-4 py-3 text-left">Sender</th>
                <th class="px-4 py-3 text-left">Recipient</th>
                <th class="px-4 py-3 text-left">Status</th>
                <th class="px-4 py-3 text-left">Actions</th>
            </tr>
            </thead>
            <tbody>
            <c:forEach var="p" items="${parcels}">
                <tr class="border-b hover:bg-gray-50">
                    <td class="px-4 py-2">${p.id}</td>
                    <td class="px-4 py-2">${fn:escapeXml(p.sender)}</td>
                    <td class="px-4 py-2">${fn:escapeXml(p.recipient)}</td>
                    <td class="px-4 py-2">${fn:escapeXml(p.status)}</td>
                    <td class="px-4 py-2 space-x-2">
                        <a href="${pageContext.request.contextPath}/parcel?id=${p.id}"
                           class="text-sky-600 hover:underline">View</a>
                        <button onclick="openEdit(${p.id}, this)"
                                data-sender="${fn:escapeXml(p.sender)}"
                                data-recipient="${fn:escapeXml(p.recipient)}"
                                data-origin="${fn:escapeXml(p.origin)}"
                                data-destination="${fn:escapeXml(p.destination)}"
                                data-status="${fn:escapeXml(p.status)}"
                                data-description="${fn:escapeXml(p.description)}"
                                class="text-amber-600 hover:underline">
                            Edit
                        </button>
                        <form method="post" action="${pageContext.request.contextPath}/parcels"
                              class="inline" onsubmit="return confirm('Delete?');">
                            <input type="hidden" name="action" value="delete"/>
                            <input type="hidden" name="id" value="${p.id}"/>
                            <button class="text-red-600 hover:underline">Delete</button>
                        </form>
                    </td>
                </tr>
            </c:forEach>
            </tbody>
        </table>
    </section>

    <!-- ADD PARCEL MODAL -->
    <dialog id="addModal" class="rounded-lg">
        <form method="post" action="${pageContext.request.contextPath}/parcels" class="p-6 space-y-4 w-80">
            <input type="hidden" name="action" value="add"/>
            <h3 class="text-lg font-semibold">Add Parcel</h3>
            <input name="sender"       placeholder="Sender"      required class="w-full px-3 py-2 border rounded-full"/>
            <input name="recipient"    placeholder="Recipient"   required class="w-full px-3 py-2 border rounded-full"/>
            <input name="origin"       placeholder="Origin"      required class="w-full px-3 py-2 border rounded-full"/>
            <input name="destination"  placeholder="Destination" required class="w-full px-3 py-2 border rounded-full"/>
            <select name="status" required class="w-full px-3 py-2 border rounded-full">
                <option selected disabled value="">Status</option>
                <option>Pending</option><option>In Transit</option><option>Delivered</option>
            </select>
            <textarea name="description" rows="3" placeholder="Description" class="w-full px-3 py-2 border rounded-lg"></textarea>
            <div class="flex justify-end space-x-3">
                <button type="button" onclick="addModal.close()" class="px-4 py-2 bg-gray-200 rounded-full">Cancel</button>
                <button type="submit" class="px-4 py-2 bg-sky-600 text-white rounded-full">Save</button>
            </div>
        </form>
    </dialog>

    <!-- EDIT PARCEL MODAL -->
    <dialog id="editModal" class="rounded-lg"></dialog>

</main>

<script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
<script>
    AOS.init({ duration: 600, once: true });

    function openAdd() {
        document.getElementById('addModal').showModal();
    }

    function openEdit(id, btn) {
        const editModal = document.getElementById('editModal');
        const tpl = document.querySelector('#addModal form').cloneNode(true);
        tpl.querySelector('[name=action]').value = 'edit';
        tpl.querySelector('[name=id]')?.remove();
        const hidden = document.createElement('input');
        hidden.name = 'id'; hidden.type = 'hidden'; hidden.value = id;
        tpl.appendChild(hidden);

        tpl.querySelector('[name=sender]').value      = btn.dataset.sender;
        tpl.querySelector('[name=recipient]').value   = btn.dataset.recipient;
        tpl.querySelector('[name=origin]').value      = btn.dataset.origin;
        tpl.querySelector('[name=destination]').value = btn.dataset.destination;
        tpl.querySelector('[name=status]').value      = btn.dataset.status;
        tpl.querySelector('[name=description]').value = btn.dataset.description;
        tpl.querySelector('h3').innerText = 'Edit Parcel';

        editModal.innerHTML = '';
        editModal.appendChild(tpl);
        editModal.showModal();
    }

    // Search filter
    document.getElementById('search').addEventListener('input', function() {
        const q = this.value.toLowerCase();
        document.querySelectorAll('tbody tr').forEach(row => {
            row.style.display = row.innerText.toLowerCase().includes(q) ? '' : 'none';
        });
    });
</script>
</body>
</html>
