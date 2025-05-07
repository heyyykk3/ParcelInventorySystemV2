<%@ page contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Curiorio – Home</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">

    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- AOS animations -->
    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet"/>
</head>

<body class="font-sans antialiased text-gray-800">

<!-- NAVBAR -->
<header class="fixed w-full bg-white shadow z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" class="text-2xl font-bold text-sky-600">Curiorio</a>
        <nav class="space-x-6">
            <a href="#features" class="hover:text-sky-600">Features</a>
            <a href="#about"    class="hover:text-sky-600">About</a>
            <a href="#team"     class="hover:text-sky-600">Team</a>
            <a href="#contact"  class="hover:text-sky-600">Contact</a>
            <a href="${pageContext.request.contextPath}/login"
               class="ml-4 px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition">
                Login
            </a>
            <a href="${pageContext.request.contextPath}/register"
               class="px-4 py-2 border border-sky-600 text-sky-600 rounded hover:bg-sky-50 transition">
                Register
            </a>
        </nav>
    </div>
</header>

<main class="pt-20">

    <!-- HERO SECTION -->
    <section class="bg-gradient-to-r from-sky-500 to-indigo-600 text-white">
        <div class="max-w-4xl mx-auto text-center py-24 px-4" data-aos="fade-down">
            <h1 class="text-5xl font-extrabold mb-4">Curiorio</h1>
            <p class="text-xl mb-8">Seamless parcel inventory & tracking built for modern courier teams.</p>
            <a href="${pageContext.request.contextPath}/login"
               class="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 transition">
                Get Started
            </a>
        </div>
    </section>

    <!-- FEATURES SECTION -->
    <section id="features" class="py-16 bg-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-semibold text-center mb-12" data-aos="fade-up">Key Features</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="p-6 bg-slate-50 rounded-lg shadow-sm" data-aos="fade-right">
                    <h3 class="text-xl font-semibold mb-2">✅ Quick Setup</h3>
                    <p>Clone the repo, build the WAR, deploy on Tomcat—ready in minutes, no DB needed.</p>
                </div>
                <div class="p-6 bg-slate-50 rounded-lg shadow-sm" data-aos="fade-up">
                    <h3 class="text-xl font-semibold mb-2">🔒 Secure Auth</h3>
                    <p>Robust register/login flow with session filtering and SHA-256 password hashing.</p>
                </div>
                <div class="p-6 bg-slate-50 rounded-lg shadow-sm" data-aos="fade-left">
                    <h3 class="text-xl font-semibold mb-2">📱 Responsive UI</h3>
                    <p>Tailwind CSS and AOS for beautiful, mobile-first layouts and scroll animations.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ABOUT SECTION -->
    <section id="about" class="py-16 bg-slate-100">
        <div class="max-w-4xl mx-auto px-4 text-center" data-aos="zoom-in">
            <h2 class="text-3xl font-semibold mb-4">What is Curiorio?</h2>
            <p class="text-lg text-gray-700">
                Curiorio simplifies parcel management for courier teams: track shipments, manage inventory,
                and stay on top of deliveries—all with a lightweight, JSON-powered backend. No complex
                database setup—just straightforward, maintainable code.
            </p>
        </div>
    </section>

    <!-- TEAM SECTION -->
    <section id="team" class="py-16 bg-white">
        <div class="max-w-6xl mx-auto px-4">
            <h2 class="text-3xl font-semibold text-center mb-12" data-aos="fade-up">Meet the Team</h2>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Kunj -->
                <div class="bg-slate-50 rounded-lg shadow p-6 text-center" data-aos="flip-left">
                    <img src="https://via.placeholder.com/120" alt="Kunj" class="mx-auto rounded-full mb-4"/>
                    <h3 class="text-xl font-semibold mb-1">Kunj</h3>
                    <p class="text-sky-600 mb-2">Backend Lead</p>
                    <p class="text-gray-600 text-sm">Designed the JSON data layer, CRUD servlets, and project architecture.</p>
                </div>
                <!-- Shailaija -->
                <div class="bg-slate-50 rounded-lg shadow p-6 text-center" data-aos="flip-up" data-aos-delay="100">
                    <img src="https://via.placeholder.com/120" alt="Shailaija" class="mx-auto rounded-full mb-4"/>
                    <h3 class="text-xl font-semibold mb-1">Shailaija</h3>
                    <p class="text-sky-600 mb-2">UI/UX Designer</p>
                    <p class="text-gray-600 text-sm">Crafted all Tailwind layouts, modals, and client-side animations.</p>
                </div>
                <!-- Prathna -->
                <div class="bg-slate-50 rounded-lg shadow p-6 text-center" data-aos="flip-right" data-aos-delay="200">
                    <img src="https://via.placeholder.com/120" alt="Prathna" class="mx-auto rounded-full mb-4"/>
                    <h3 class="text-xl font-semibold mb-1">Prathna</h3>
                    <p class="text-sky-600 mb-2">Auth & Docs</p>
                    <p class="text-gray-600 text-sm">Implemented secure auth flow and wrote comprehensive docs/README.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CONTACT SECTION -->
    <section id="contact" class="py-16 bg-slate-100">
        <div class="max-w-3xl mx-auto px-4 text-center" data-aos="fade-up">
            <h2 class="text-3xl font-semibold mb-4">Get in Touch</h2>
            <p class="mb-6 text-gray-700">
                Questions? Feedback? Drop us a line and we’ll get back to you ASAP.
            </p>
            <form action="mailto:curiorio@example.com" method="post" enctype="text/plain"
                  class="space-y-4 max-w-md mx-auto">
                <input type="text" name="name" placeholder="Your Name" required
                       class="w-full px-4 py-2 border rounded focus:ring focus:ring-sky-500"/>
                <input type="email" name="email" placeholder="Your Email" required
                       class="w-full px-4 py-2 border rounded focus:ring focus:ring-sky-500"/>
                <textarea name="message" rows="4" placeholder="Your Message" required
                          class="w-full px-4 py-2 border rounded focus:ring focus:ring-sky-500"></textarea>
                <button type="submit"
                        class="px-6 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition">
                    Send Message
                </button>
            </form>
        </div>
    </section>

</main>

<!-- FOOTER -->
<footer class="bg-white py-6">
    <div class="max-w-4xl mx-auto text-center text-sm text-gray-500">
        © 2025 Curiorio. Built by Kunj · Shailaija · Prathna.
    </div>
</footer>

<!-- AOS Init -->
<script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
<script> AOS.init({ duration: 800, once: true }); </script>
</body>
</html>
