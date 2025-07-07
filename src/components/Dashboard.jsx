import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useData } from '../context/DataContext'
import { 
  Package, 
  Search, 
  Plus, 
  Edit2, 
  Trash2, 
  Eye, 
  User, 
  LogOut,
  Clock,
  Truck,
  CheckCircle,
  XCircle,
  Filter
} from 'lucide-react'
import Modal from './Modal'
import ParcelForm from './ParcelForm'

const Dashboard = () => {
  const { user, logout } = useAuth()
  const { parcels, loading, addParcel, updateParcel, deleteParcel, getParcelStats, searchParcels } = useData()
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredParcels, setFilteredParcels] = useState([])
  const [selectedParcel, setSelectedParcel] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [modalMode, setModalMode] = useState('add') // 'add' or 'edit'
  const [statusFilter, setStatusFilter] = useState('all')
  const navigate = useNavigate()

  const stats = getParcelStats()

  useEffect(() => {
    let filtered = searchParcels(searchQuery)
    if (statusFilter !== 'all') {
      filtered = filtered.filter(parcel => parcel.status === statusFilter)
    }
    setFilteredParcels(filtered)
  }, [parcels, searchQuery, statusFilter, searchParcels])

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const handleAddParcel = () => {
    setModalMode('add')
    setSelectedParcel(null)
    setShowModal(true)
  }

  const handleEditParcel = (parcel) => {
    setModalMode('edit')
    setSelectedParcel(parcel)
    setShowModal(true)
  }

  const handleDeleteParcel = (id) => {
    if (window.confirm('Are you sure you want to delete this parcel?')) {
      deleteParcel(id)
    }
  }

  const handleFormSubmit = (formData) => {
    if (modalMode === 'add') {
      addParcel(formData)
    } else {
      updateParcel(selectedParcel.id, formData)
    }
    setShowModal(false)
    setSelectedParcel(null)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'text-yellow-600 bg-yellow-50'
      case 'In Transit': return 'text-blue-600 bg-blue-50'
      case 'Delivered': return 'text-green-600 bg-green-50'
      case 'Cancelled': return 'text-red-600 bg-red-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Pending': return <Clock size={16} />
      case 'In Transit': return <Truck size={16} />
      case 'Delivered': return <CheckCircle size={16} />
      case 'Cancelled': return <XCircle size={16} />
      default: return <Package size={16} />
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-sky-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Package className="text-sky-600 w-8 h-8 mr-3" />
              <h1 className="text-2xl font-bold text-gray-800">Curiorio</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, {user?.fullName}</span>
              <Link 
                to="/profile"
                className="p-2 text-gray-500 hover:text-sky-600 rounded-full hover:bg-sky-50 transition-colors"
              >
                <User size={20} />
              </Link>
              <button
                onClick={handleLogout}
                className="p-2 text-gray-500 hover:text-red-600 rounded-full hover:bg-red-50 transition-colors"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card" data-aos="fade-up">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Parcels</p>
                <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
              </div>
              <Package className="text-sky-600 w-8 h-8" />
            </div>
          </div>
          <div className="card" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-3xl font-bold text-yellow-600">{stats.pending}</p>
              </div>
              <Clock className="text-yellow-600 w-8 h-8" />
            </div>
          </div>
          <div className="card" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">In Transit</p>
                <p className="text-3xl font-bold text-blue-600">{stats.inTransit}</p>
              </div>
              <Truck className="text-blue-600 w-8 h-8" />
            </div>
          </div>
          <div className="card" data-aos="fade-up" data-aos-delay="300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Delivered</p>
                <p className="text-3xl font-bold text-green-600">{stats.delivered}</p>
              </div>
              <CheckCircle className="text-green-600 w-8 h-8" />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8" data-aos="fade-up">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 flex-1">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search parcels..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="Pending">Pending</option>
                  <option value="In Transit">In Transit</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>
            <button
              onClick={handleAddParcel}
              className="btn-primary flex items-center gap-2"
            >
              <Plus size={20} />
              Add Parcel
            </button>
          </div>
        </div>

        {/* Parcels Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden" data-aos="fade-up">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Parcel ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sender
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Recipient
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Route
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredParcels.map((parcel) => (
                  <tr key={parcel.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      #{parcel.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {parcel.sender}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {parcel.recipient}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {parcel.origin} → {parcel.destination}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium gap-1 ${getStatusColor(parcel.status)}`}>
                        {getStatusIcon(parcel.status)}
                        {parcel.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex space-x-2">
                        <Link
                          to={`/parcel/${parcel.id}`}
                          className="text-sky-600 hover:text-sky-800"
                        >
                          <Eye size={16} />
                        </Link>
                        <button
                          onClick={() => handleEditParcel(parcel)}
                          className="text-amber-600 hover:text-amber-800"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteParcel(parcel.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredParcels.length === 0 && (
            <div className="text-center py-12">
              <Package className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-500">No parcels found.</p>
            </div>
          )}
        </div>
      </main>

      {/* Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={modalMode === 'add' ? 'Add New Parcel' : 'Edit Parcel'}
      >
        <ParcelForm
          initialData={selectedParcel}
          onSubmit={handleFormSubmit}
          onCancel={() => setShowModal(false)}
        />
      </Modal>
    </div>
  )
}

export default Dashboard