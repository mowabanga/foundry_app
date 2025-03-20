"use client";

import React, { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import {
  Calendar,
  FileText,
  LogOutIcon,
  Menu,
  Monitor,
  ShieldUser,
  ShoppingBag,
  UserCircleIcon,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ Import usePathname

const AppSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // ✅ Get the current path

  const toggleSidebar = () => setIsOpen(!isOpen);

  // ✅ Function to check if the link is active
  const isActive = (href) => pathname === href;

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed z-50 top-4 left-4 p-2 rounded-full bg-primary text-white shadow-md mb-4"
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? <X size={24} className="bg-blue-600 ring-4 ring-amber-200 rounded-full absolute left-57" /> : <Menu size={24} />}
      </button>

      <div
        className={`fixed inset-y-0 left-0 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300 ease-in-out z-40`}
        style={{ width: isOpen ? "80%" : "0", maxWidth: "16rem" }}
      >
        <Sidebar collapsible="none" className="bg-primary h-screen w-full md:w-64 overflow-x-hidden overflow-y-auto">
          <SidebarContent className="flex flex-col h-full">
            <SidebarGroup className="flex flex-col h-full">
              <div className="h-full flex flex-col gap-4">
                <SidebarHeader className="text-xl md:text-2xl font-bold text-white pt-4">
                  <span>Foundry</span>
                </SidebarHeader>

                <div>
                  <SidebarGroupLabel className="font-bold text-white">General</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu className="text-white">
                      <SidebarMenuItem key="overview">
                        <SidebarMenuButton asChild>
                          <Link
                            href="/dashboard"
                            className={`flex items-center gap-2 p-2 rounded-md ${
                              isActive("/dashboard") ? "bg-white text-primary font-bold" : "hover:bg-white/10"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <Monitor size={20} />
                            <span>Dashboard</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </div>

                <div>
                  <SidebarGroupLabel className="font-bold text-white">Accounting</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu className="text-white">
                      <SidebarMenuItem key="transactions">
                        <SidebarMenuButton asChild>
                          <Link
                            href="/transactions"
                            className={`flex items-center gap-2 p-2 rounded-md ${
                              isActive("/transactions") ? "bg-white text-primary font-bold" : "hover:bg-white/10"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <ShoppingBag size={20} />
                            <span>Transactions</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>

                      <SidebarMenuItem key="accounts">
                        <SidebarMenuButton asChild>
                          <Link
                            href="/accounts"
                            className={`flex items-center gap-2 p-2 rounded-md ${
                              isActive("/accounts") ? "bg-white text-primary font-bold" : "hover:bg-white/10"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <Calendar size={20} />
                            <span>Accounts</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </div>

                <div>
                  <SidebarGroupLabel className="font-bold text-white">User Management</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu className="text-white">
                      <SidebarMenuItem key="members">
                        <SidebarMenuButton asChild>
                          <Link
                            href="/members"
                            className={`flex items-center gap-2 p-2 rounded-md ${
                              isActive("/members") ? "bg-white text-primary font-bold" : "hover:bg-white/10"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <Users size={20} />
                            <span>Members</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>

                      <SidebarMenuItem key="administration">
                        <SidebarMenuButton asChild>
                          <Link
                            href="/administration"
                            className={`flex items-center gap-2 p-2 rounded-md ${
                              isActive("/administration") ? "bg-white text-primary font-bold" : "hover:bg-white/10"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <ShieldUser size={20} />
                            <span>Administration</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>

                      <SidebarMenuItem key="logs">
                        <SidebarMenuButton asChild>
                          <Link
                            href="/logs"
                            className={`flex items-center gap-2 p-2 rounded-md ${
                              isActive("/logs") ? "bg-white text-primary font-bold" : "hover:bg-white/10"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <FileText size={20} />
                            <span>Logs</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </div>
              </div>

              <div className="mb-2">
                <SidebarFooter className="flex flex-row justify-between items-center text-white p-4">
                  <div className="flex flex-row gap-2 items-center justify-center">
                    <UserCircleIcon size={28} />
                    <div className="text-xs flex flex-col justify-center">
                      <p>071234567</p>
                      <p>johndoe@xyz.com</p>
                    </div>
                  </div>
                  <LogOutIcon className="hover:cursor-pointer hover:text-white/80 transition-colors" />
                </SidebarFooter>
              </div>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </div>

      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsOpen(false)} aria-hidden="true" />}
    </>
  );
};

export default AppSidebar;
