<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Parcel #${parcel.id} Details</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet"/>
</head>
<body class="bg-gray-100 min-h-screen">

<!-- NAVBAR -->
<header class="bg-white shadow fixed w-full z-20">
  <div class="max-w-4xl mx-auto px-4 flex items-center justify-between h-16">
    <a href="${pageContext.request.contextPath}/parcels" class="text-2xl font-bold text-sky-600">← Back to Dashboard</a>
    <a href="${pageContext.request.contextPath}/logout" class="text-gray-700 hover:text-sky-600">Logout</a>
  </div>
</header>

<main class="pt-24 max-w-4xl mx-auto px-4">

  <!-- HEADER INFO -->
  <section class="bg-white rounded-lg shadow p-6 mb-6" data-aos="fade-down">
    <div class="flex items-center space-x-6">
      <!-- Sender Avatar -->
      <div class="flex-shrink-0">
        <img src="https://ui-avatars.com/api/?name=${parcel.sender}&background=BBF7D0&color=065F46&rounded=true&size=96"
             alt="${parcel.sender}" class="rounded-full border-4 border-sky-500"/>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-1">Parcel #${parcel.id}</h2>
        <p class="text-gray-600">From <strong>${parcel.sender}</strong> to <strong>${parcel.recipient}</strong></p>
        <p class="text-sm text-gray-500 mt-1">Origin: ${parcel.origin} | Destination: ${parcel.destination}</p>
      </div>
    </div>
  </section>

  <!-- STATUS TIMELINE -->
  <section class="bg-white rounded-lg shadow p-6 mb-6" data-aos="fade-up">
    <h3 class="text-xl font-semibold mb-4">Status Timeline</h3>
    <ul class="border-l-2 border-sky-600">
      <li class="mb-4 ml-4">
        <div class="absolute w-3 h-3 bg-sky-600 rounded-full mt-1 -left-1.5"></div>
        <p class="font-medium">Created</p>
        <p class="text-sm text-gray-500">2025-05-01 09:00</p>
      </li>
      <li class="mb-4 ml-4">
        <div class="absolute w-3 h-3 bg-yellow-500 rounded-full mt-1 -left-1.5"></div>
        <p class="font-medium">Picked Up</p>
        <p class="text-sm text-gray-500">2025-05-02 14:30</p>
      </li>
      <li class="mb-4 ml-4">
        <div class="absolute w-3 h-3 bg-blue-500 rounded-full mt-1 -left-1.5"></div>
        <p class="font-medium">In Transit</p>
        <p class="text-sm text-gray-500">2025-05-03 08:15</p>
      </li>
      <li class="ml-4">
        <div class="absolute w-3 h-3 bg-green-500 rounded-full mt-1 -left-1.5"></div>
        <p class="font-medium">Delivered</p>
        <p class="text-sm text-gray-500">2025-05-04 11:20</p>
      </li>
    </ul>
  </section>

  <!-- DESCRIPTION & MAP -->
  <section class="bg-white rounded-lg shadow p-6 mb-6 grid md:grid-cols-2 gap-6" data-aos="fade-up">
    <div>
      <h3 class="text-xl font-semibold mb-2">Description</h3>
      <p class="text-gray-700">${parcel.description}</p>
    </div>
    <div>
      <h3 class="text-xl font-semibold mb-2">Route Map</h3>
      <div class="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
        <span class="text-gray-500">Map placeholder</span>
      </div>
    </div>
  </section>

  <!-- ACTIONS -->
  <section class="flex space-x-4 mb-12" data-aos="fade-up">
    <a href="${pageContext.request.contextPath}/parcels"
       class="px-6 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">Back</a>
    <button onclick="window.location.reload()"
            class="px-6 py-2 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition">Refresh</button>
  </section>

</main>

<footer class="bg-white py-6">
  <div class="max-w-4xl mx-auto text-center text-sm text-gray-500">
    © 2025 Curiorio. 📦✨
  </div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
<script> AOS.init({ duration: 700, once: true }); </script>
</body>
</html>
