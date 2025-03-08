'use client'

import React, { useState } from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'
import { Calendar, CircleDollarSign, LogOutIcon, Menu, Monitor, ShoppingBag, UserCircleIcon, Users, X } from 'lucide-react'
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
          className="bg-primary mb-4 h-screen rounded-r-3xl rounded-l-none md:rounded-l-3xl mt-4 ml-4 w-64 rounded-b-3xl"
        >
          <SidebarContent className="flex flex-col h-full">
            <SidebarGroup className="flex flex-col h-full">
              <div>
                <SidebarHeader className='text-xl md:text-2xl font-bold text-white px-4 pt-4'>Foundry</SidebarHeader>
                <SidebarGroupLabel className="font-bold text-white px-4">Main</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu className='text-white'>
                    <SidebarMenuItem key="overview">
                      <SidebarMenuButton asChild>
                        <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                          <Monitor size={20} />
                          <span>Overview</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem key="transactions">
                      <SidebarMenuButton asChild>
                        <Link href="/transactions" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                          <CircleDollarSign size={20} />
                          <span>Transactions</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem key="members">
                      <SidebarMenuButton asChild>
                        <Link href="/members" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                          <Users size={20} />
                          <span>Members</span>
                        </Link>
                      </SidebarMenuButton>
                      <SidebarMenuBadge className="bg-white/50">109</SidebarMenuBadge>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>

                <Separator className="bg-white/50 my-2.5 mx-4" />

                <SidebarGroupLabel className="font-bold text-white px-4">Planner</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu className='text-white'>
                    <SidebarMenuItem key="accounts">
                      <SidebarMenuButton asChild>
                        <Link href="/accounts" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                          <ShoppingBag size={20} />
                          <span>Accounts</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem key="Events">
                      <SidebarMenuButton asChild>
                        <Link href="/events" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                          <Calendar size={20} />
                          <span>Events</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem key="users">
                      <SidebarMenuButton asChild>
                        <Link href="#" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                          <Users size={20} />
                          <span>Users</span>
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