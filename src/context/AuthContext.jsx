import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in on app start
    const savedUser = localStorage.getItem('currentUser')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = async (username, password) => {
    try {
      // Get users from localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      
      // Simple password hash simulation (in real app, use proper hashing)
      const hashedPassword = await hashPassword(password)
      
      // Find user with matching credentials
      const foundUser = users.find(u => 
        u.username === username && u.password === hashedPassword
      )
      
      if (foundUser) {
        const userWithoutPassword = { ...foundUser }
        delete userWithoutPassword.password
        setUser(userWithoutPassword)
        localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword))
        return { success: true }
      } else {
        return { success: false, error: 'Invalid username or password' }
      }
    } catch (error) {
      return { success: false, error: 'Login failed' }
    }
  }

  const register = async (userData) => {
    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      
      // Check if username already exists
      if (users.some(u => u.username === userData.username)) {
        return { success: false, error: 'Username already exists' }
      }
      
      // Hash password
      const hashedPassword = await hashPassword(userData.password)
      
      // Create new user
      const newUser = {
        ...userData,
        password: hashedPassword
      }
      
      users.push(newUser)
      localStorage.setItem('users', JSON.stringify(users))
      
      // Auto-login after registration
      const userWithoutPassword = { ...newUser }
      delete userWithoutPassword.password
      setUser(userWithoutPassword)
      localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword))
      
      return { success: true }
    } catch (error) {
      return { success: false, error: 'Registration failed' }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('currentUser')
  }

  const updateProfile = (updatedData) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const userIndex = users.findIndex(u => u.username === user.username)
    
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...updatedData }
      localStorage.setItem('users', JSON.stringify(users))
      
      const userWithoutPassword = { ...users[userIndex] }
      delete userWithoutPassword.password
      setUser(userWithoutPassword)
      localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword))
    }
  }

  // Simple password hashing (in production, use proper bcrypt or similar)
  const hashPassword = async (password) => {
    const encoder = new TextEncoder()
    const data = encoder.encode(password)
    const hashBuffer = await crypto.subtle.digest('SHA-256', data)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  }

  const value = {
    user,
    login,
    register,
    logout,
    updateProfile,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}