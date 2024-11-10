'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Menu, Users, Building, Briefcase, CreditCard, UserPlus, Calendar, BarChart, GraduationCap, ClipboardList, LineChart, FileText, MapPin, CheckCircle, PieChart, ShoppingCart, Package, LogIn, UserPlus as SignUp, Bell, MessageSquare } from 'lucide-react'

export default function Component() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [expandedItems, setExpandedItems] = useState({})
  const [currentPage, setCurrentPage] = useState('Dashboard')
  const [dropdownOpen, setDropdownOpen] = useState({ notifications: false, messages: false })

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  
  const toggleExpand = (item) => {
    setExpandedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }))
  }

  const toggleDropdown = (dropdown) => {
    setDropdownOpen(prev => ({
      notifications: dropdown === 'notifications' ? !prev.notifications : false,
      messages: dropdown === 'messages' ? !prev.messages : false
    }))
  }

  const menuItems = [
    {
      name: 'Super Admin',
      icon: Users,
      subItems: ['Dashboard', 'User Management', 'Organisation Management']
    },
    {
      name: 'Organisation',
      icon: Building,
      subItems: ['Dashboard', 'Organisation List']
    },
    {
      name: 'HRM Module',
      icon: Briefcase,
      subItems: ['Dashboard', 'Employees Management', 'Team Management', 'Leave Management', 'Calendar & Scheduling', 'Payroll Management', 'Recruitment Management', 'Performance Management', 'Training Management', 'Manager Self-Service (MSS)', 'Reports & Analytics']
    },
    {
      name: 'Payroll Management',
      icon: CreditCard,
      subItems: ['Payroll Processing', 'Salary & Incentives', 'Deductions & Taxes']
    },
    {
      name: 'Recruitment Management',
      icon: UserPlus,
      subItems: ['Job Listings', 'Candidate Sourcing', 'Applicant Tracking']
    },
    {
      name: 'Attendance',
      icon: Calendar,
      subItems: ['Employee Attendance', 'GPS Tracking', 'Face Recognition']
    },
    {
      name: 'CRM Module',
      icon: BarChart,
      subItems: ['Dashboard', 'Sales Management', 'Customer Management', 'Tasks Management', 'Marketing Campaigns', 'Communication Management', 'Territory Management', 'Quote and Order Management', 'Partner Management', 'Event Management', 'Reporting & Analytics', 'Settings']
    },
    {
      name: 'Location',
      icon: MapPin,
      subItems: ['Live Team', 'Map']
    },
    {
      name: 'Task Management',
      icon: CheckCircle,
      subItems: []
    },
    {
      name: 'Project Management Module',
      icon: ClipboardList,
      subItems: ['Dashboard', 'Project List', 'Project Planning']
    },
    {
      name: 'Product Management Module',
      icon: Package,
      subItems: ['Dashboard', 'Product List Management', 'Inventory Management', 'Sales Order Management']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-6">
            <button 
              onClick={toggleSidebar} 
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 active:scale-95"
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
            <span className="text-black font-bold text-xl">Admin Portal</span>
          </div>
          <div className="flex items-center gap-8">
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('notifications')} 
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <Bell className="w-6 h-6 text-gray-600" />
              </button>
              {dropdownOpen.notifications && (
                <div className="absolute right-0 mt-3 w-80 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-800">Notifications</h3>
                  </div>
                  {[1, 2, 3].map((item) => (
                    <a 
                      key={item}
                      href="#" 
                      className="block px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Bell className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-800">New notification {item}</p>
                          <p className="text-xs text-gray-500 mt-1">2 minutes ago</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('messages')} 
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <MessageSquare className="w-6 h-6 text-gray-600" />
              </button>
              {dropdownOpen.messages && (
                <div className="absolute right-0 mt-3 w-80 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-800">Messages</h3>
                  </div>
                  {[1, 2].map((item) => (
                    <a 
                      key={item}
                      href="#" 
                      className="block px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                        <div>
                          <p className="text-sm text-gray-800">User {item}</p>
                          <p className="text-xs text-gray-500 mt-1">New message received</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 text-black hover:bg-gray-200 rounded-lg transition-all duration-200 font-medium">
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium shadow-sm hover:shadow active:scale-95">
                <SignUp className="w-4 h-4" />
                <span>Sign Up</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <aside className={`fixed left-0 top-[73px] bottom-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } overflow-y-auto`}>
        <nav className="p-4">
          {menuItems.map((item) => (
            <div key={item.name} className="mb-2">
              <button
                onClick={() => toggleExpand(item.name)}
                className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors duration-200" />
                  <span className="text-gray-700 group-hover:text-blue-600 font-medium transition-colors duration-200">{item.name}</span>
                </div>
                {item.subItems.length > 0 && (
                  <div className="text-gray-400 group-hover:text-blue-600 transition-colors duration-200">
                    {expandedItems[item.name] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                )}
              </button>
              {expandedItems[item.name] && item.subItems.length > 0 && (
                <div className="ml-4 mt-2 space-y-1">
                  {item.subItems.map((subItem) => (
                    <button
                      key={subItem}
                      onClick={() => setCurrentPage(subItem)}
                      className={`w-full text-left p-2 rounded-lg transition-colors duration-200 text-sm
                        ${currentPage === subItem 
                          ? 'bg-blue-50 text-blue-600 font-medium' 
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                    >
                      {subItem}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      <main className={`pt-[73px] ${isSidebarOpen ? 'ml-64' : 'ml-0'} transition-all duration-300 ease-in-out`}>
        <div className="p-8">
          <h1 className="text-2xl font-bold text-gray-800">{currentPage}</h1>
          <p className="mt-4 text-gray-600">This is the {currentPage} page. Add your content here.</p>
        </div>
      </main>
    </div>
  )
}