import React, { useState, useEffect } from 'react'
import { Save, X } from 'lucide-react'

const ParcelForm = ({ initialData, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    sender: '',
    recipient: '',
    origin: '',
    destination: '',
    status: 'Pending',
    description: ''
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (initialData) {
      setFormData({
        sender: initialData.sender || '',
        recipient: initialData.recipient || '',
        origin: initialData.origin || '',
        destination: initialData.destination || '',
        status: initialData.status || 'Pending',
        description: initialData.description || ''
      })
    }
  }, [initialData])

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.sender.trim()) {
      newErrors.sender = 'Sender name is required'
    }
    
    if (!formData.recipient.trim()) {
      newErrors.recipient = 'Recipient name is required'
    }
    
    if (!formData.origin.trim()) {
      newErrors.origin = 'Origin is required'
    }
    
    if (!formData.destination.trim()) {
      newErrors.destination = 'Destination is required'
    }
    
    if (!formData.status) {
      newErrors.status = 'Status is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      onSubmit(formData)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="sender" className="block text-sm font-medium text-gray-700 mb-2">
            Sender Name *
          </label>
          <input
            type="text"
            id="sender"
            name="sender"
            value={formData.sender}
            onChange={handleChange}
            className={`input-field ${errors.sender ? 'border-red-500 focus:ring-red-500' : ''}`}
            placeholder="Enter sender name"
          />
          {errors.sender && (
            <p className="mt-1 text-sm text-red-600">{errors.sender}</p>
          )}
        </div>

        <div>
          <label htmlFor="recipient" className="block text-sm font-medium text-gray-700 mb-2">
            Recipient Name *
          </label>
          <input
            type="text"
            id="recipient"
            name="recipient"
            value={formData.recipient}
            onChange={handleChange}
            className={`input-field ${errors.recipient ? 'border-red-500 focus:ring-red-500' : ''}`}
            placeholder="Enter recipient name"
          />
          {errors.recipient && (
            <p className="mt-1 text-sm text-red-600">{errors.recipient}</p>
          )}
        </div>

        <div>
          <label htmlFor="origin" className="block text-sm font-medium text-gray-700 mb-2">
            Origin *
          </label>
          <input
            type="text"
            id="origin"
            name="origin"
            value={formData.origin}
            onChange={handleChange}
            className={`input-field ${errors.origin ? 'border-red-500 focus:ring-red-500' : ''}`}
            placeholder="Enter origin location"
          />
          {errors.origin && (
            <p className="mt-1 text-sm text-red-600">{errors.origin}</p>
          )}
        </div>

        <div>
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
            Destination *
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className={`input-field ${errors.destination ? 'border-red-500 focus:ring-red-500' : ''}`}
            placeholder="Enter destination location"
          />
          {errors.destination && (
            <p className="mt-1 text-sm text-red-600">{errors.destination}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
            Status *
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className={`input-field ${errors.status ? 'border-red-500 focus:ring-red-500' : ''}`}
          >
            <option value="Pending">Pending</option>
            <option value="In Transit">In Transit</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
          {errors.status && (
            <p className="mt-1 text-sm text-red-600">{errors.status}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none"
            placeholder="Enter parcel description (optional)"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
        <button
          type="button"
          onClick={onCancel}
          className="btn-secondary flex items-center gap-2"
        >
          <X size={16} />
          Cancel
        </button>
        <button
          type="submit"
          className="btn-primary flex items-center gap-2"
        >
          <Save size={16} />
          {initialData ? 'Update Parcel' : 'Add Parcel'}
        </button>
      </div>
    </form>
  )
}

export default ParcelForm