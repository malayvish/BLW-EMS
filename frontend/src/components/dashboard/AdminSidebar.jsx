import React from 'react'
import {NavLink} from 'react-router-dom'
import {FaBuilding, FaCalendarAlt, FaCogs, FaMoneyBillWave, FaTachometerAlt, FaUsers} from 'react-icons/fa'

const AdminSidebar = () => {
  return (
    <div className='bg-blue-900 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64'>
      <div className='bg-blue-600 h-12 flex items-center justify-center'>
        <img src="/logo.jpeg" alt="Logo" className="h-8 w-8 object-contain mr-3 rounded-full" />
        <h3 className='text-4xl text-center font-sans'>BLW EMS</h3>
      </div>
      <div className='mt-4 px-2 space-y-2'>
        <NavLink to="/admin-dashboard"
        className={({isActive}) =>`${isActive ? "bg-blue-500" : " "} flex items-center space-x-4 py-4.5 px-4 rounded`}  
        end>
            <FaTachometerAlt/>
            <span>Dashboard</span>
        </NavLink>
        <NavLink to="/admin-dashboard/employees"
         className={({isActive}) =>`${isActive ? "bg-blue-500" : " "} flex items-center space-x-4 py-4.5 px-4 rounded`}>
            <FaUsers/>
            <span>Employee</span>
        </NavLink>
        <NavLink to="/admin-dashboard/departments"
        className={({isActive}) =>`${isActive ? "bg-blue-500" : " "} flex items-center space-x-4 py-4.5 px-4 rounded`}>
            <FaBuilding/>
            <span>Department</span>
        </NavLink>
        {/* <NavLink to="/admin-dashboard"
        className='flex items-center space-x-4 py-2.5 px-4 rounded'>
            <FaCalendarAlt/>
            <span>Leave</span>
        </NavLink> */}
        <NavLink to="/admin-dashboard/salary/add"
        className={({isActive}) =>`${isActive ? "bg-blue-500" : " "} flex items-center space-x-4 py-4.5 px-4 rounded`}>
            <FaMoneyBillWave/>
            <span>Salary</span>
        </NavLink>
        {/* <NavLink to="/admin-dashboard"
        className='flex items-center space-x-4 py-2.5 px-4 rounded'>
            <FaCogs/>
            <span>Settings</span>
        </NavLink> */}
      </div>
    </div>
  )
}

export default AdminSidebar
