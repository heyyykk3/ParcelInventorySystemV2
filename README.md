# Parcel Inventory System Pro

A lightweight, JSON-powered Jakarta EE web application for parcel tracking and inventory management, designed for modern courier teams.

---

## 🚀 Overview

Curiorio streamlines parcel operations—no database setup, simple JSON storage, and a clean, responsive Tailwind UI. Users can register, log in, add/edit/delete parcels, and view detailed status timelines.

---

## 🔧 Tech Stack

* **Java 17** • Jakarta Servlet 6 • JSTL 3
* **Tailwind CSS** • **AOS** for animations
* **Jackson 2.18** for JSON
* **Tomcat 10.x** as application server
* **Maven WAR** packaging

---

## 🛠 Installation & Setup

```bash
# Requirements: JDK 17+, Maven, Tomcat 10.x
mvn clean package                  # builds target/ParcelInventorySystemPro.war
cp target/ParcelInventorySystemPro.war $CATALINA_HOME/webapps
# Start Tomcat, then visit:
http://localhost:8080/ParcelInventorySystemPro/
```

---

## 📋 Usage

1. **Register** a new account or use default `admin / admin123`.
2. **Log in** to access the dashboard.
3. **Add** new parcels; **edit** or **delete** existing ones via modals.
4. **View** parcel details with status timeline and map placeholder.
5. **Profile** page to view and edit your account info.

---

## ✨ Key Features

* **Auth & Sessions**: Secure registration, login, logout, and session filtering.
* **Dashboard**: Search, filter, responsive table, and metrics cards.
* **Modals**: Intuitive add/edit forms with validation.
* **Detail View**: Timeline, descriptions, and dummy map.
* **Animations**: Smooth AOS transitions for all UI elements.

---

## 👥 Team & Responsibilities

| Member        | Role           | Responsibilities                                           |
| ------------- | -------------- | ---------------------------------------------------------- |
| **Kunj**      | Backend Lead   | Data layer (`DataStore`), CRUD servlets, JSON integration. |
| **Shailaija** | UI/UX Designer | Tailwind layouts, components, AOS animations, modal UX.    |
| **Prathna**   | Auth & Docs    | Registration/login flow, session security, documentation.  |

---

## 📝 Reflection

Working on Curiorio has been a valuable exercise in both technical execution and professional collaboration. From the outset, our team prioritized clear communication—scheduling weekly sync‑ups, using GitHub Issues to track tasks, and employing a consistent Git branching strategy (feature branches, pull requests, code reviews). This structure ensured that everyone knew their responsibilities and deadlines, and allowed us to address merge conflicts proactively with peer reviews.

We embraced an agile mindset: breaking down features into small, testable increments and soliciting feedback early. For example, after the first iteration of the dashboard, we held a user‑testing session with classmates, gathering insights on layout intuitiveness and accessibility. Their recommendations led us to refine the search/filter controls and enhance table readability, demonstrating a commitment to user‑centered design.

In terms of professional etiquette, we documented all APIs and UI behaviors in the README and in‑code JavaDoc comments, which proved invaluable during handoffs. When unexpected bugs arose—such as session timeouts or JSON parsing errors—we triaged them quickly, writing unit tests for our `DataStore` and introducing input validation on both client and server sides. This emphasis on quality reduced regression risk and streamlined deployment to Tomcat.

Our approach to version control was equally deliberate. Meaningful commit messages, structured pull request templates, and milestone tagging on GitHub helped us track progress and roll back reliably if needed. We also set up branch protection rules to mandate at least one reviewer before merging, fostering accountability and high code standards.

Finally, this project reinforced the importance of adaptability. When requirements changed—shifting the login from the index to a dedicated page—we collaborated to refactor servlet mappings and JSP layouts with minimal disruption. Each team member stepped in to assist others, demonstrating cross‑functional support and shared ownership.

Overall, Curiorio reflects our growth as communicators, problem‑solvers, and software engineers, ready to deliver maintainable, user‑friendly applications in a professional environment.
