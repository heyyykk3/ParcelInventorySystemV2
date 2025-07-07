import React, { createContext, useContext, useState, useEffect } from 'react'

const DataContext = createContext()

export const useData = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}

export const DataProvider = ({ children }) => {
  const [parcels, setParcels] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Initialize data if not exists
    initializeData()
    loadParcels()
  }, [])

  const initializeData = () => {
    // Initialize users with default admin account
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    if (users.length === 0) {
      const defaultUser = {
        username: 'admin',
        password: '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9', // admin123
        fullName: 'Site Administrator',
        email: 'admin@example.com'
      }
      localStorage.setItem('users', JSON.stringify([defaultUser]))
    }

    // Initialize parcels with sample data
    const parcels = JSON.parse(localStorage.getItem('parcels') || '[]')
    if (parcels.length === 0) {
      const sampleParcels = [
        {
          id: 1,
          sender: 'Alice Johnson',
          recipient: 'Bob Smith',
          origin: 'Montreal, QC',
          destination: 'Toronto, ON',
          status: 'In Transit',
          description: 'Electronics shipment - Handle with care',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 2,
          sender: 'Charlie Brown',
          recipient: 'Diana Prince',
          origin: 'Vancouver, BC',
          destination: 'Calgary, AB',
          status: 'Pending',
          description: 'Books and educational materials',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 3,
          sender: 'Eve Wilson',
          recipient: 'Frank Miller',
          origin: 'Halifax, NS',
          destination: 'Ottawa, ON',
          status: 'Delivered',
          description: 'Medical supplies - Urgent delivery',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      ]
      localStorage.setItem('parcels', JSON.stringify(sampleParcels))
    }
  }

  const loadParcels = () => {
    setLoading(true)
    try {
      const savedParcels = JSON.parse(localStorage.getItem('parcels') || '[]')
      setParcels(savedParcels)
    } catch (error) {
      console.error('Error loading parcels:', error)
      setParcels([])
    } finally {
      setLoading(false)
    }
  }

  const saveParcels = (updatedParcels) => {
    localStorage.setItem('parcels', JSON.stringify(updatedParcels))
    setParcels(updatedParcels)
  }

  const addParcel = (parcelData) => {
    const newParcel = {
      id: Math.max(...parcels.map(p => p.id), 0) + 1,
      ...parcelData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    const updatedParcels = [...parcels, newParcel]
    saveParcels(updatedParcels)
    return newParcel
  }

  const updateParcel = (id, updates) => {
    const updatedParcels = parcels.map(parcel => 
      parcel.id === parseInt(id) 
        ? { ...parcel, ...updates, updatedAt: new Date().toISOString() }
        : parcel
    )
    saveParcels(updatedParcels)
    return updatedParcels.find(p => p.id === parseInt(id))
  }

  const deleteParcel = (id) => {
    const updatedParcels = parcels.filter(parcel => parcel.id !== parseInt(id))
    saveParcels(updatedParcels)
    return true
  }

  const getParcelById = (id) => {
    return parcels.find(parcel => parcel.id === parseInt(id))
  }

  const getParcelStats = () => {
    const total = parcels.length
    const pending = parcels.filter(p => p.status === 'Pending').length
    const inTransit = parcels.filter(p => p.status === 'In Transit').length
    const delivered = parcels.filter(p => p.status === 'Delivered').length
    const cancelled = parcels.filter(p => p.status === 'Cancelled').length

    return {
      total,
      pending,
      inTransit,
      delivered,
      cancelled
    }
  }

  const searchParcels = (query) => {
    if (!query) return parcels
    
    const lowercaseQuery = query.toLowerCase()
    return parcels.filter(parcel => 
      parcel.sender.toLowerCase().includes(lowercaseQuery) ||
      parcel.recipient.toLowerCase().includes(lowercaseQuery) ||
      parcel.origin.toLowerCase().includes(lowercaseQuery) ||
      parcel.destination.toLowerCase().includes(lowercaseQuery) ||
      parcel.description.toLowerCase().includes(lowercaseQuery) ||
      parcel.status.toLowerCase().includes(lowercaseQuery)
    )
  }

  const value = {
    parcels,
    loading,
    addParcel,
    updateParcel,
    deleteParcel,
    getParcelById,
    getParcelStats,
    searchParcels,
    refreshParcels: loadParcels
  }

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}