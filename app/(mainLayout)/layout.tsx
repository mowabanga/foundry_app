import Navbar from "@/components/general/Navbar";
import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/general/AppSidebar";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="max-w-7xl px-4 sm:px-6 md:px-6 lg:px-8">
            <SidebarProvider>
              <aside className="w-64">
                <AppSidebar />
              </aside>
              <div className="flex-grow p-4">
                <Navbar />
                {children}
              </div>
            </SidebarProvider>
          </div> 
    </div>
  )
}