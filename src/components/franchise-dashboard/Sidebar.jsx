import React, { useState } from 'react';
import { 
  BarChart3, 
  History, 
  Settings, 
  LogOut, 
  DollarSign,
  ChevronLeft,
  ChevronRight 
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = ({fx}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      id: 'home',
      title: 'Total Sales',
      icon: <DollarSign size={20} />,
      color: 'bg-purple-500',
      path: '/dashboard/totalsales'
    },
    {
      id: 'sales-history',
      title: 'Sales History',
      icon: <History size={20} />,
      color: 'bg-blue-500',
      path: '/dashboard/sales-history'
    },
    {
      id: 'charts',
      title: 'Charts',
      icon: <BarChart3 size={20} />,
      color: 'bg-green-500',
      path: '/dashboard/charts'
    },
    {
      id: 'settings',
      title: 'Settings',
      icon: <Settings size={20} />,
      color: 'bg-orange-500',
      path: '/dashboard/settings'
    },
    {
      id: 'logout',
      title: 'Logout',
      icon: <LogOut size={20} />,
      color: 'bg-red-500',
      path: '/dashboard/logout',
    }
  ];

  const handleMenuClick = (item) => {
    if (item.id === 'logout') {
      fx(true);
      // Handle logout logic here
      alert('Logging out...');
      // Add your logout logic here
    }
    navigate(item.path);
  };

  return (
    <div className="flex h-full bg-gray-100">
      <div 
        className={`${isExpanded ? 'w-64' : 'w-20'} 
        bg-gray-800 text-white transition-all duration-300 relative h-full`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute -right-3 top-8 bg-gray-800 text-white p-1 rounded-full"
        >
          {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>

        {/* Logo Area */}
        <div className="p-4 text-center border-b border-gray-700">
          <h2 className={`font-bold ${isExpanded ? 'text-xl' : 'text-sm'}`}>
            {isExpanded ? 'Dashboard' : 'DB'}
          </h2>
        </div>

        {/* Menu Items */}
        <nav className="mt-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleMenuClick(item)}
              className={`flex items-center p-4 hover:bg-gray-700 cursor-pointer
              transition-colors duration-200 relative group
              ${location.pathname === item.path ? 'bg-gray-700' : ''}`}
            >
              {/* Colored Indicator */}
              <div className={`absolute left-0 w-1 h-full ${item.color} 
                ${location.pathname === item.path ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                transition-opacity duration-200`}
              />
              
              {/* Icon */}
              <div className={`${item.color} p-2 rounded-lg`}>
                {item.icon}
              </div>

              {/* Title */}
              {isExpanded && (
                <span className="ml-4 text-gray-300 group-hover:text-white">
                  {item.title}
                </span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar; 