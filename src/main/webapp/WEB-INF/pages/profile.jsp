<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Curiorio – Profile</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet"/>
</head>
<body class="bg-gray-100 min-h-screen">

<!-- NAVBAR -->
<header class="bg-white shadow fixed w-full z-20">
  <div class="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
    <a href="${pageContext.request.contextPath}/parcels" class="text-2xl font-bold text-sky-600">Curiorio</a>
    <nav class="space-x-4">
      <a href="${pageContext.request.contextPath}/parcels" class="text-gray-700 hover:text-sky-600">Dashboard</a>
      <a href="${pageContext.request.contextPath}/logout" class="text-gray-700 hover:text-sky-600">Logout</a>
    </nav>
  </div>
</header>

<main class="pt-20 max-w-4xl mx-auto px-4 py-8">

  <section class="bg-white rounded-lg shadow p-8" data-aos="fade-up">
    <div class="flex flex-col sm:flex-row items-center">
      <!-- Avatar -->
      <div class="flex-shrink-0 mb-6 sm:mb-0 sm:mr-8">
        <img src="https://via.placeholder.com/120"
             alt="User avatar"
             class="rounded-full border-4 border-sky-500"/>
      </div>
      <!-- Info -->
      <div>
        <h2 class="text-3xl font-semibold mb-2">${userProfile.fullName}</h2>
        <p class="text-gray-600 mb-4">@${userProfile.username}</p>

        <div class="space-y-2">
          <div class="flex items-center">
            <svg class="h-5 w-5 text-sky-500 mr-2" xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 12a4 4 0 01-8 0m8 0a8 8 0 11-8 0 8 8 0 018 0z"/>
            </svg>
            <span>${userProfile.email}</span>
          </div>
          <div class="flex items-center">
            <svg class="h-5 w-5 text-sky-500 mr-2" xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5h12M9 3v2m-6 8h6M9 9v6m6-10h6M15 3v2m-6 8h6M15 9v6m-6 4h12"/>
            </svg>
            <span>Member since: <c:out value="${userProfile.username ne null ? '2025-01-01' : ''}"/></span>
          </div>
        </div>

        <button onclick="editProfile.showModal()"
                class="mt-6 px-6 py-2 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition">
          Edit Profile
        </button>
      </div>
    </div>
  </section>

  <!-- EDIT PROFILE MODAL -->
  <dialog id="editProfile" class="rounded-lg p-0 overflow-hidden" data-aos="fade-in">
    <form method="post" action="#" class="bg-white p-6 space-y-4 w-80">
      <h3 class="text-xl font-semibold mb-2">Edit Profile</h3>
      <input name="fullname" value="${userProfile.fullName}" required
             class="w-full px-4 py-2 border rounded-full focus:ring-2 focus:ring-sky-400"/>
      <input type="email" name="email" value="${userProfile.email}" required
             class="w-full px-4 py-2 border rounded-full focus:ring-2 focus:ring-sky-400"/>
      <!-- Add saving logic in your servlet if desired -->
      <div class="flex justify-end space-x-3 pt-2">
        <button type="button" onclick="editProfile.close()"
                class="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">Cancel</button>
        <button class="px-4 py-2 bg-sky-600 text-white rounded-full hover:bg-sky-700">Save</button>
      </div>
    </form>
  </dialog>

</main>

<!-- Footer -->
<footer class="bg-white py-6 mt-12">
  <div class="max-w-4xl mx-auto text-center text-sm text-gray-500">
    © 2025 Curiorio. 📦✨
  </div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
<script>
  AOS.init({ duration: 600, once: true });
</script>
</body>
</html>
