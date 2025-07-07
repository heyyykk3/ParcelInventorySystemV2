import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useData } from '../context/DataContext'
import { 
  Package, 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Truck, 
  CheckCircle, 
  XCircle,
  Calendar,
  User,
  FileText,
  Edit2
} from 'lucide-react'
import Modal from './Modal'
import ParcelForm from './ParcelForm'

const ParcelDetails = () => {
  const { id } = useParams()
  const { getParcelById, updateParcel } = useData()
  const [parcel, setParcel] = useState(null)
  const [showEditModal, setShowEditModal] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const parcelData = getParcelById(id)
    if (parcelData) {
      setParcel(parcelData)
    } else {
      navigate('/dashboard')
    }
  }, [id, getParcelById, navigate])

  const handleEditSubmit = (formData) => {
    const updatedParcel = updateParcel(id, formData)
    setParcel(updatedParcel)
    setShowEditModal(false)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      case 'In Transit': return 'text-blue-600 bg-blue-50 border-blue-200'
      case 'Delivered': return 'text-green-600 bg-green-50 border-green-200'
      case 'Cancelled': return 'text-red-600 bg-red-50 border-red-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Pending': return <Clock size={20} />
      case 'In Transit': return <Truck size={20} />
      case 'Delivered': return <CheckCircle size={20} />
      case 'Cancelled': return <XCircle size={20} />
      default: return <Package size={20} />
    }
  }

  const getTrackingTimeline = () => {
    const timeline = [
      {
        status: 'Pending',
        title: 'Parcel Created',
        description: 'Your parcel has been registered in our system',
        date: parcel?.createdAt,
        active: true
      },
      {
        status: 'In Transit',
        title: 'In Transit',
        description: 'Parcel is on its way to destination',
        date: parcel?.status === 'In Transit' || parcel?.status === 'Delivered' ? parcel?.updatedAt : null,
        active: parcel?.status === 'In Transit' || parcel?.status === 'Delivered'
      },
      {
        status: 'Delivered',
        title: 'Delivered',
        description: 'Parcel has been delivered successfully',
        date: parcel?.status === 'Delivered' ? parcel?.updatedAt : null,
        active: parcel?.status === 'Delivered'
      }
    ]

    return timeline
  }

  const formatDate = (dateString) => {
    if (!dateString) return ''
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (!parcel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-sky-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link
                to="/dashboard"
                className="mr-4 p-2 text-gray-500 hover:text-sky-600 rounded-full hover:bg-sky-50 transition-colors"
              >
                <ArrowLeft size={20} />
              </Link>
              <Package className="text-sky-600 w-8 h-8 mr-3" />
              <h1 className="text-2xl font-bold text-gray-800">Parcel #{parcel.id}</h1>
            </div>
            <button
              onClick={() => setShowEditModal(true)}
              className="btn-primary flex items-center gap-2"
            >
              <Edit2 size={16} />
              Edit Parcel
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Parcel Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Status Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6" data-aos="fade-up">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Current Status</h2>
                <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border gap-2 ${getStatusColor(parcel.status)}`}>
                  {getStatusIcon(parcel.status)}
                  {parcel.status}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center text-gray-600">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">Created: {formatDate(parcel.createdAt)}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock size={16} className="mr-2" />
                  <span className="text-sm">Updated: {formatDate(parcel.updatedAt)}</span>
                </div>
              </div>
            </div>

            {/* Parcel Details */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6" data-aos="fade-up">
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Parcel Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center mb-2">
                    <User size={16} className="mr-2 text-gray-400" />
                    <label className="text-sm font-medium text-gray-700">Sender</label>
                  </div>
                  <p className="text-gray-900 font-medium">{parcel.sender}</p>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <User size={16} className="mr-2 text-gray-400" />
                    <label className="text-sm font-medium text-gray-700">Recipient</label>
                  </div>
                  <p className="text-gray-900 font-medium">{parcel.recipient}</p>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <MapPin size={16} className="mr-2 text-gray-400" />
                    <label className="text-sm font-medium text-gray-700">Origin</label>
                  </div>
                  <p className="text-gray-900">{parcel.origin}</p>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <MapPin size={16} className="mr-2 text-gray-400" />
                    <label className="text-sm font-medium text-gray-700">Destination</label>
                  </div>
                  <p className="text-gray-900">{parcel.destination}</p>
                </div>
              </div>
              
              {parcel.description && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center mb-2">
                    <FileText size={16} className="mr-2 text-gray-400" />
                    <label className="text-sm font-medium text-gray-700">Description</label>
                  </div>
                  <p className="text-gray-900">{parcel.description}</p>
                </div>
              )}
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6" data-aos="fade-up">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Route Map</h2>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-500">Interactive map coming soon</p>
                  <p className="text-sm text-gray-400">
                    {parcel.origin} → {parcel.destination}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6" data-aos="fade-up">
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Tracking Timeline</h2>
              <div className="space-y-4">
                {getTrackingTimeline().map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center mr-4 ${
                      item.active 
                        ? 'bg-sky-600 border-sky-600 text-white' 
                        : 'bg-gray-100 border-gray-300 text-gray-400'
                    }`}>
                      {item.active ? (
                        <CheckCircle size={16} />
                      ) : (
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-sm font-medium ${item.active ? 'text-gray-900' : 'text-gray-500'}`}>
                        {item.title}
                      </h3>
                      <p className={`text-xs mt-1 ${item.active ? 'text-gray-600' : 'text-gray-400'}`}>
                        {item.description}
                      </p>
                      {item.date && (
                        <p className="text-xs text-gray-500 mt-1">
                          {formatDate(item.date)}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Edit Modal */}
      <Modal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        title="Edit Parcel"
      >
        <ParcelForm
          initialData={parcel}
          onSubmit={handleEditSubmit}
          onCancel={() => setShowEditModal(false)}
        />
      </Modal>
    </div>
  )
}

export default ParcelDetails