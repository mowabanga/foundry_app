import React from 'react'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'
import { Calendar, CircleDollarSign, Monitor, ShoppingBag, Users } from 'lucide-react'

type Props = {}

     
const AppSidebar = (props: Props) => {
  return (
    <Sidebar collapsible='none' className='bg-primary h-screen rounded-r-3xl rounded-l-3xl mt-4'>
        <SidebarContent>
            <SidebarGroup>
                <SidebarHeader className='text-2xl font-bold text-white'>Foundry</SidebarHeader>
                <SidebarGroupLabel className="font-bold">Main</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem key="overview">
                            <SidebarMenuButton asChild>
                                <a href="#">
                                    <Monitor />
                                    <span>Overview</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem key="transactions">
                            <SidebarMenuButton asChild>
                                <a href="#">
                                    <CircleDollarSign />
                                    <span>Transactions</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem key="members">
                            <SidebarMenuButton asChild>
                                <a href="#">
                                    <Users />
                                    <span>Members</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                    </SidebarMenu>
                </SidebarGroupContent>
                <SidebarGroupLabel className="font-bold">Planner</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem key="accounts">
                            <SidebarMenuButton asChild>
                                <a href="#">
                                    <ShoppingBag />
                                    <span>Accounts</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem key="Events">
                            <SidebarMenuButton asChild>
                                <a href="#">
                                    <Calendar />
                                    <span>Events</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem key="members">
                            <SidebarMenuButton asChild>
                                <a href="#">
                                    <Users />
                                    <span></span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar