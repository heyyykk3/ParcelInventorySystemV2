#!/bin/bash

# Curiorio - Parcel Inventory System Pro
# Deployment Script for Netlify

echo "🚀 Starting Curiorio deployment setup..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies!"
    exit 1
fi

# Build the application
echo "🏗️  Building the application..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Build output is in the 'dist' directory"
else
    echo "❌ Build failed!"
    exit 1
fi

# Display deployment information
echo ""
echo "🎉 Curiorio is ready for deployment!"
echo ""
echo "📋 Next steps:"
echo "1. Push your code to GitHub/GitLab"
echo "2. Connect your repository to Netlify"
echo "3. Configure build settings:"
echo "   - Build command: npm run build"
echo "   - Publish directory: dist"
echo "4. Deploy automatically!"
echo ""
echo "🌐 For local development:"
echo "   npm run dev"
echo ""
echo "🎯 Demo Account:"
echo "   Username: admin"
echo "   Password: admin123"
echo ""
echo "✨ Happy shipping with Curiorio!"