'use client'

import React, { useState } from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'
import { Calendar, LogOutIcon, Menu, Monitor, ShoppingBag, UserCircleIcon, Users, X } from 'lucide-react'
import Link from 'next/link'
import { Separator } from '../ui/separator'

const AppSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleSidebar = () => setIsOpen(!isOpen);
  
  return (
    <>
      <button 
        onClick={toggleSidebar} 
        className="md:hidden fixed z-50 top-4 left-4 p-2 rounded-full bg-primary text-white shadow-md mb-4"
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out z-40`}>
        <Sidebar 
          collapsible="none" 
          className="bg-primary h-screen  w-64 rounded-b-3xl"
        >
          {/* change structure: sidebar to start form top to bottom with the revised list: 
                    General -  Dashboard
                    Accounting - Transactions, Accounts, Transactional Items
                    User Management - Members, Administrations, Logs 

                    ** Move user icon  to top right of navbar
          */}
          <SidebarContent className="flex flex-col h-full">
            <SidebarGroup className="flex flex-col h-full">
              <div>
                <SidebarHeader className='text-xl md:text-2xl font-bold text-white px-4 pt-4'>Foundry</SidebarHeader>
                <SidebarGroupLabel className="font-bold text-white px-4">General</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu className='text-white'>
                    <SidebarMenuItem key="overview">
                      <SidebarMenuButton asChild>
                        <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                          <Monitor size={20} />
                          <span>Dashboard</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>

                <Separator className="bg-white/50 my-2.5 mx-4" />

                <SidebarGroupLabel className="font-bold text-white px-4">Accounting</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu className='text-white'>
                    <SidebarMenuItem key="accounts">
                      <SidebarMenuButton asChild>
                        <Link href="/transactions" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                          <ShoppingBag size={20} />
                          <span>Transactions</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem key="Events">
                      <SidebarMenuButton asChild>
                        <Link href="/accounts" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                          <Calendar size={20} />
                          <span>Accounts</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem key="users">
                      <SidebarMenuButton asChild>
                        <Link href="/users" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                          <Users size={20} />
                          <span>Users</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>

                <Separator className="bg-white/50 my-2.5 mx-4" />
                <SidebarGroupLabel className="font-bold text-white px-4">User Management</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu className='text-white'>
                  <SidebarMenuItem key="overview">
                      <SidebarMenuButton asChild>
                        <Link href="/members" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                          <Monitor size={20} />
                          <span>Members</span>
                        </Link>
                      </SidebarMenuButton>
                      <SidebarMenuButton asChild>
                        <Link href="/administration" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                          <Monitor size={20} />
                          <span>Administration</span>
                        </Link>
                      </SidebarMenuButton>
                      <SidebarMenuButton asChild>
                        <Link href="/logs" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                          <Monitor size={20} />
                          <span>Logs</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </div>
              
              <div className="mt-auto">
                <SidebarFooter className='flex flex-row justify-between items-center text-white p-4'>
                  <div className='flex flex-row gap-2 items-center'>
                    <UserCircleIcon size={24} />
                    <div className="text-xs">
                      <p>071234567</p>
                      <p>johndoe@xyz.com</p>
                    </div>
                  </div>
                  <LogOutIcon className='hover:cursor-pointer hover:text-white/80 transition-colors' />
                </SidebarFooter>
              </div>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </div>
      
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden" 
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}

export default AppSidebar