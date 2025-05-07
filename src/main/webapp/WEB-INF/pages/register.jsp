<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Curiorio – Register</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 flex items-center justify-center min-h-screen">

<div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
  <h2 class="text-2xl font-bold text-center mb-6">Create Your Account</h2>

  <c:if test="${param.exists=='1'}">
    <div class="mb-4 text-sm text-yellow-800 bg-yellow-100 px-4 py-2 rounded">
      Username already in use
    </div>
  </c:if>

  <form action="${pageContext.request.contextPath}/register" method="post" class="space-y-4">
    <input
            name="fullname"
            placeholder="Full Name"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
    />
    <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
    />
    <input
            name="username"
            placeholder="Username"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
    />
    <input
            type="password"
            name="password"
            placeholder="Password (min 6 chars)"
            minlength="6"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
    />
    <button
            type="submit"
            class="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition"
    >
      Sign Up
    </button>
  </form>

  <p class="mt-6 text-center text-sm text-gray-600">
    Already registered?
    <a href="${pageContext.request.contextPath}/login" class="text-sky-600 hover:underline font-medium">
      Log in here
    </a>
  </p>
</div>

</body>
</html>
