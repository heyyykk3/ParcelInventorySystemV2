<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<%@ taglib prefix="fn" uri="jakarta.tags.functions" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Curiorio – Login</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 flex items-center justify-center min-h-screen">

<div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
  <h2 class="text-2xl font-bold text-center mb-6">Welcome Back</h2>

  <c:if test="${param.error=='1'}">
    <div class="mb-4 text-sm text-red-700 bg-red-100 px-4 py-2 rounded">
      Invalid username or password
    </div>
  </c:if>
  <c:if test="${param.logout=='1'}">
    <div class="mb-4 text-sm text-blue-700 bg-blue-100 px-4 py-2 rounded">
      Successfully logged out
    </div>
  </c:if>

  <form action="${pageContext.request.contextPath}/login" method="post" class="space-y-4">
    <input
            name="username"
            value="${fn:escapeXml(param.username)}"
            placeholder="Username"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
    />
    <input
            type="password"
            name="password"
            placeholder="Password"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
    />
    <button
            type="submit"
            class="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-full transition"
    >
      Log In
    </button>
  </form>

  <p class="mt-6 text-center text-sm text-gray-600">
    Don’t have an account?
    <a href="${pageContext.request.contextPath}/register" class="text-sky-600 hover:underline font-medium">
      Register here
    </a>
  </p>
</div>

</body>
</html>
