# Curiorio - Parcel Inventory System Pro

A modern, React-powered parcel tracking and inventory management system with beautiful UI and seamless user experience.

---

## 🚀 Overview

Curiorio is a revamped parcel management system featuring:
- **Modern React Frontend** with responsive design
- **Real-time Local Storage** for data persistence
- **Beautiful Tailwind CSS** styling with smooth animations
- **Comprehensive Parcel Management** with search, filter, and CRUD operations
- **User Authentication** with profile management
- **Responsive Design** optimized for all devices

---

## 🔧 Tech Stack

* **React 18** • **Vite** • **React Router 6**
* **Tailwind CSS** • **Lucide React** icons
* **AOS** animations • **Local Storage** for data
* **Netlify** hosting • **Modern ES6+** JavaScript

---

## 🛠 Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- Git

### Local Development
```bash
# Clone the repository
git clone <repository-url>
cd parcel-inventory-pro

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Netlify Deployment
1. **Connect to Netlify**: Link your repository to Netlify
2. **Build Settings**: 
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Deploy**: Netlify will automatically deploy your application

---

## 📋 Usage

### Getting Started
1. **Visit** your deployed application or run locally
2. **Login** with demo account: `admin / admin123`
3. **Explore** the dashboard with sample parcel data
4. **Add, Edit, Delete** parcels using the intuitive interface
5. **Search & Filter** parcels by various criteria
6. **View Details** with tracking timeline and route information
7. **Update Profile** information as needed

### Features
- **Dashboard**: Overview metrics, search, and parcel management
- **Parcel Management**: Full CRUD operations with validation
- **Detailed View**: Comprehensive parcel information with timeline
- **User Profile**: Account management and password changes
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile

---

## ✨ Key Features

### 🔐 Authentication & Security
- Secure user registration and login
- Password hashing with SHA-256
- Session management with localStorage
- Protected routes and authentication guards

### 📊 Dashboard & Analytics
- Real-time parcel statistics
- Interactive search and filtering
- Status-based color coding
- Responsive data table with actions

### 📦 Parcel Management
- Add new parcels with validation
- Edit existing parcel information
- Delete parcels with confirmation
- Comprehensive parcel details view

### 🎨 Modern UI/UX
- Clean, modern design with Tailwind CSS
- Smooth animations with AOS library
- Responsive layout for all screen sizes
- Intuitive navigation and user flows

### 🔍 Advanced Features
- Real-time search across all parcel fields
- Status-based filtering (Pending, In Transit, Delivered, Cancelled)
- Detailed tracking timeline
- Route visualization placeholder
- Profile management with password changes

---

## 🏗️ Architecture

```
src/
├── components/          # React components
│   ├── Dashboard.jsx   # Main dashboard with metrics
│   ├── Login.jsx       # Authentication login
│   ├── Register.jsx    # User registration
│   ├── Profile.jsx     # User profile management
│   ├── ParcelDetails.jsx # Detailed parcel view
│   ├── ParcelForm.jsx  # Add/Edit parcel form
│   └── Modal.jsx       # Reusable modal component
├── context/            # React Context for state
│   ├── AuthContext.jsx # Authentication state
│   └── DataContext.jsx # Parcel data management
├── App.jsx             # Main application component
├── main.jsx            # React entry point
└── index.css          # Global styles with Tailwind
```

---

## 🌟 Demo Account

**Username**: `admin`  
**Password**: `admin123`

The application comes with sample parcel data to demonstrate all features.

---

## 🚀 Deployment

### Netlify (Recommended)
1. **Push** your code to GitHub/GitLab
2. **Connect** repository to Netlify
3. **Configure** build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **Deploy** automatically on every push

### Manual Build
```bash
npm run build
# Upload 'dist' folder to your hosting provider
```

---

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Features
1. Create components in `src/components/`
2. Add routes in `src/App.jsx`
3. Update contexts for state management
4. Style with Tailwind CSS classes

---

## 📱 Mobile Responsive

The application is fully responsive and works seamlessly on:
- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

---

## 🎯 Future Enhancements

- **Real-time notifications** for parcel updates
- **Email integration** for automated notifications
- **Advanced analytics** and reporting
- **Barcode scanning** for mobile devices
- **Integration with shipping APIs**
- **Multi-language support**
- **Dark theme** option
- **Export functionality** (PDF, CSV)

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for the beautiful icons
- **Netlify** for seamless deployment
- **AOS** for smooth animations

---

**Built with ❤️ for modern parcel management**
